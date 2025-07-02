export type ClubDetailsProps = {
  id: string;
  name: string;
  isPublic: boolean;
  memberCount: number; 
  sessionsInfo: string; 
  unreadNotifications: number;
  authorAvatars: string[]; 
};
