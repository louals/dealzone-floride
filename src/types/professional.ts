// src/types/professional.ts
export interface Professional {
  professionalId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  roleTitle: string;
  companyName: string;
  companyDescription: string;
  serviceDescription: string;
  targetAudience: string;
  valueProposition: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  confirmPassword: string;
}
