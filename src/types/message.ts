// src/types/message.ts
export interface Message {
  messageId: string;
  chatId: string; // FK
  senderId: string; // FK
  receiverId: string; // FK
  content: string;
  attachments: string[];
  messageType: string;
  readBy: string[];
  status: string;
  createdAt: Date;
}
