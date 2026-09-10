/**
 * Typed environment variables helper
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://designmeinteriors.com",
  CONTACT_RECEIVER_EMAIL: process.env.CONTACT_RECEIVER_EMAIL || "Interiorsdesignme@gmail.com",
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_SECURE: process.env.SMTP_SECURE === "true",
};

export type Env = typeof env;
