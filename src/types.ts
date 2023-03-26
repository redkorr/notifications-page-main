export type Notification = {
  id: number;
  avatar: string;
  userName: string;
  time: number;
  type: string;
  isRead: boolean;
  postTitle?: string;
  groupName?: string;
  message?: string;
  pictureSrc?: string;
};
