import { z } from "zod";

export const memberCountOptions = [
  "〜100名",
  "101〜300名",
  "301〜500名",
  "501〜1000名",
  "1001名以上",
  "未定"
] as const;

export const contactSchema = z.object({
  organization: z.string().min(1, "団体名を入力してください。"),
  name: z.string().min(1, "担当者名を入力してください。"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください。")
    .email("メールアドレスの形式を確認してください。"),
  phone: z.string().optional(),
  memberCount: z.enum(memberCountOptions, {
    errorMap: () => ({ message: "会員数を選択してください。" })
  }),
  message: z.string().min(1, "相談内容を入力してください。")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
