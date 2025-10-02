// src/types/offer.ts
export interface OfferBase {
  offerId: string;
  senderId: string; // FK
  propertyId: string; // FK
  propertyOwnerId: string; // FK
  offerAmount: number;
  status: string;
  reason: string;
  buyerMessage: string;
  proofOfFundsAccounts: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReceivedOffer extends OfferBase {}
export interface SentOffer extends OfferBase {}
