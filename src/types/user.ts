// src/types/user.ts
export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  investorProfile: string;
  companyName: string;
  companyAddress: string;
  address: string;
  country: string;
  state: string;
  description: string;
  capitalToInvest: string;
  favorites: string[];
  emailVerified: boolean;
  openToPartnership: boolean;
  registrationComplete: boolean;
  lastSignIn: Date | null;
  createdAt: Date;
}
