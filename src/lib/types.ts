export type ClubDetailsProps = {
  id: string;
  name: string;
  isPublic: boolean;
  memberCount: number;
  sessionsInfo: string;
  unreadNotifications: number;
  authorAvatars: string[];
};

export type SignInStep =
  | "adminSignIn"
  | "emailSignIn"
  | "walletSelection"
  | "qrCode"
  | "connecting"
  | "signature"
  | "success";
