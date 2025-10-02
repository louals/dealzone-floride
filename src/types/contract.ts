// src/types/contract.ts
export interface Contract {
  contractId: string;
  offerId: string; // FK
  propertyId: string; // FK
  buyerId: string; // FK
  sellerId: string; // FK
  buyerName: string;
  buyerEmail: string;
  sellerName: string;
  sellerEmail: string;
  buyerSigned: boolean;
  buyerSignedAt: Date | null;
  sellerSigned: boolean;
  sellerSignedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
