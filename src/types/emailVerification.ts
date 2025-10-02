// src/types/emailVerification.ts
export interface EmailVerification {
  verificationId: string;
  email: string;
  code: string;
  used: boolean;
  createdAt: Date;
  expiresAt: Date;
}
