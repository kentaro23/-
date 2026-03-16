"use client";

import { useRouter } from "next/navigation";
import type {
  ChangeEvent,
  FormEvent,
  ReactNode
} from "react";
import { useState, useTransition } from "react";
import {
  contactSchema,
  memberCountOptions,
  type ContactFormValues
} from "@/lib/contact-schema";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  organization: "",
  name: "",
  email: "",
  phone: "",
  memberCount: "未定",
  message: ""
};

export function ContactForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string>("");

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;
      setValues((prev) => ({ ...prev, [field]: nextValue }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    startTransition(async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        setSubmitError(data.message ?? "送信に失敗しました。時間をおいて再度お試しください。");
        if (data.fieldErrors) setErrors(data.fieldErrors);
        return;
      }

      router.push("/thanks");
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="団体名"
          required
          error={errors.organization}
          hint="学会名・研究会名・法人名"
        >
          <input
            value={values.organization}
            onChange={handleChange("organization")}
            className={inputClass(Boolean(errors.organization))}
            autoComplete="organization"
            aria-invalid={Boolean(errors.organization)}
          />
        </Field>

        <Field label="担当者名" required error={errors.name}>
          <input
            value={values.name}
            onChange={handleChange("name")}
            className={inputClass(Boolean(errors.name))}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field label="メールアドレス" required error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            className={inputClass(Boolean(errors.email))}
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field label="電話番号" error={errors.phone} hint="任意">
          <input
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            className={inputClass(Boolean(errors.phone))}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <Field label="会員数" required error={errors.memberCount} hint="概算で構いません">
        <select
          value={values.memberCount}
          onChange={handleChange("memberCount")}
          className={inputClass(Boolean(errors.memberCount))}
          aria-invalid={Boolean(errors.memberCount)}
        >
          {memberCountOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="ご相談内容"
        required
        error={errors.message}
      >
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          className={inputClass(Boolean(errors.message))}
          rows={5}
          placeholder="現在の運営体制、委託を検討している業務範囲、課題感など"
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      {submitError ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white shadow-subtle transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "送信中..." : "送信する"}
      </button>
      <p className="text-xs text-gray-400">通常1営業日以内にご返信します。</p>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-baseline gap-1.5">
        <span className="text-sm font-medium text-ink">{label}</span>
        {required ? <span className="text-xs text-red-500">*</span> : null}
        {hint ? <span className="text-xs text-gray-400">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink outline-none transition",
    "placeholder:text-gray-400 focus:ring-2 focus:ring-brand-500/20",
    hasError
      ? "border-red-300 focus:border-red-400"
      : "border-gray-300 focus:border-brand-500"
  ].join(" ");
}
