import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/metadata";

function getMailConfig() {
  const user = process.env.GMAIL_USER ?? siteConfig.email;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!pass) {
    return null;
  }

  return { user, pass };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { ok: false, message: "入力内容をご確認ください。", fieldErrors },
        { status: 400 }
      );
    }

    console.log("[CONTACT_FORM_SUBMISSION]", {
      ...parsed.data,
      receivedAt: new Date().toISOString()
    });

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "メール送信設定が未完了です。管理者がVercel環境変数（GMAIL_APP_PASSWORD）を設定後にご利用ください。"
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass
      }
    });

    const lines = [
      "学会運営代行サイトからお問い合わせが届きました。",
      "",
      `団体名: ${parsed.data.organization}`,
      `担当者名: ${parsed.data.name}`,
      `メール: ${parsed.data.email}`,
      `電話: ${parsed.data.phone || "未入力"}`,
      `会員数: ${parsed.data.memberCount}`,
      "",
      "相談内容:",
      parsed.data.message
    ];

    await transporter.sendMail({
      from: `"がっかりさせない学会" <${mailConfig.user}>`,
      to: siteConfig.email,
      replyTo: parsed.data.email,
      subject: `【お問い合わせ】${parsed.data.organization} / ${parsed.data.name}`,
      text: lines.join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.7; color: #0f172a;">
          <h2 style="margin: 0 0 12px;">お問い合わせ通知</h2>
          <p>学会運営代行サイトからお問い合わせが届きました。</p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 12px;">
            <tbody>
              <tr><td style="padding: 6px 0; font-weight: 700; width: 140px;">団体名</td><td>${escapeHtml(parsed.data.organization)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">担当者名</td><td>${escapeHtml(parsed.data.name)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">メール</td><td>${escapeHtml(parsed.data.email)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">電話</td><td>${escapeHtml(parsed.data.phone || "未入力")}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">会員数</td><td>${escapeHtml(parsed.data.memberCount)}</td></tr>
            </tbody>
          </table>
          <div style="margin-top: 16px;">
            <div style="font-weight: 700; margin-bottom: 6px;">相談内容</div>
            <div style="white-space: pre-wrap; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">${escapeHtml(parsed.data.message)}</div>
          </div>
        </div>
      `
    });

    await transporter.sendMail({
      from: `"がっかりさせない学会" <${mailConfig.user}>`,
      to: parsed.data.email,
      replyTo: siteConfig.email,
      subject: "【受付確認】お問い合わせを受け付けました（がっかりさせない学会）",
      text: [
        `${parsed.data.name} 様`,
        "",
        "お問い合わせありがとうございます。",
        "以下の内容で受け付けました。内容を確認のうえ、担当よりご連絡いたします。",
        "",
        `団体名: ${parsed.data.organization}`,
        `担当者名: ${parsed.data.name}`,
        `メール: ${parsed.data.email}`,
        `電話: ${parsed.data.phone || "未入力"}`,
        `会員数: ${parsed.data.memberCount}`,
        "",
        "ご相談内容:",
        parsed.data.message,
        "",
        `お問い合わせ先: ${siteConfig.email}`
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.7; color: #0f172a;">
          <p>${escapeHtml(parsed.data.name)} 様</p>
          <p>お問い合わせありがとうございます。以下の内容で受け付けました。内容を確認のうえ、担当よりご連絡いたします。</p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 12px;">
            <tbody>
              <tr><td style="padding: 6px 0; font-weight: 700; width: 140px;">団体名</td><td>${escapeHtml(parsed.data.organization)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">担当者名</td><td>${escapeHtml(parsed.data.name)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">メール</td><td>${escapeHtml(parsed.data.email)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">電話</td><td>${escapeHtml(parsed.data.phone || "未入力")}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 700;">会員数</td><td>${escapeHtml(parsed.data.memberCount)}</td></tr>
            </tbody>
          </table>
          <div style="margin-top: 16px;">
            <div style="font-weight: 700; margin-bottom: 6px;">ご相談内容</div>
            <div style="white-space: pre-wrap; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">${escapeHtml(parsed.data.message)}</div>
          </div>
          <p style="margin-top: 16px;">お問い合わせ先: ${escapeHtml(siteConfig.email)}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_FORM_ERROR]", error);
    return NextResponse.json(
      { ok: false, message: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
