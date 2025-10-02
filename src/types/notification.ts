// src/types/notification.ts
export interface Notification {
  notificationId: string;
  userId: string; // FK
  type: string;
  message: string;
  link: string;
  relatedId: string;
  read: boolean;
  createdAt: Date;
}
