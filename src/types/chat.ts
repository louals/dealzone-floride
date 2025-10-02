// src/types/chat.ts
export interface Chat {
  chatId: string;
  participants: string[]; // list of userIds
  lastMessage: string;
  lastMessageAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
