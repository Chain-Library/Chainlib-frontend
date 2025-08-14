export type Recipients = "Private" | "Write" | "General" | "Writer" | "Reader";
export type NotificationItem = {
  id: string;
  title: string;
  email: string;
  recipients: Recipients;
  status: "Sent" | "Pending" | "Failed";
  date: string;
  sentBy: string;
  receiver: string;
  image?: string;
  body?: string;
};

const RECIPS: Recipients[] = [
  "Private",
  "Write",
  "General",
  "Writer",
  "Reader",
];
const STATUS: NotificationItem["status"][] = ["Sent", "Pending", "Failed"];

export const NOTIFICATIONS: NotificationItem[] = Array.from({ length: 40 }).map(
  (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return {
      id: String(i + 1),
      title: i % 2 ? "Policy Violation" : "Announcement: Coming Soon",
      email: `user${i + 1}@example.com`,
      recipients: RECIPS[i % RECIPS.length],
      status: STATUS[i % STATUS.length],
      date: d.toISOString(),
      sentBy: i % 2 ? "Admin Team" : "Moderator",
      receiver: i % 3 ? "Writers" : "Readers",
      image: "/coming-soon.jpg",
      body: "We are excited to announce a series of improvements and new features in our subscription plans. Starting this month, subscribers will enjoy enhanced benefits tailored to provide greater value and a more seamless experience.",
    };
  }
);
