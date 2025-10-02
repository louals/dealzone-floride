// src/types/contact.ts
export interface Contact {
  contactId: string;
  userId?: string; // FK, optional
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}
