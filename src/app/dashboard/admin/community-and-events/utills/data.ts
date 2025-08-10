export type Community = {
  id: number;
  name: string;
  visibility: "Public" | "Private";
  membersLabel: string;
  sessionsLabel: string;
  liveNow?: boolean;
  cover?: string;
  description: string;
};

export const COMMUNITIES: Community[] = [
  {
    id: 101,
    name: "Fantasy Enthusiasts",
    visibility: "Public",
    membersLabel: "1.5k+ Members",
    sessionsLabel: "2+ Session a Month",
    liveNow: true,
    description:
      "Vibrant book club dedicated to exploring the vast and magical realms of fantasy literature. From epic sagas and dark fantasy to urban magic and whimsical tales, we delve into all corners of the genre.",
  },
  {
    id: 102,
    name: "Rustaceans Lab",
    visibility: "Public",
    membersLabel: "3.2k+ Members",
    sessionsLabel: "4 Sessions a Month",
    description:
      "Community for Rust learners and professionals focusing on systems programming, performance and safety.",
  },
  {
    id: 103,
    name: "Creators Hub",
    visibility: "Private",
    membersLabel: "820 Members",
    sessionsLabel: "Weekly Sessions",
    description:
      "A private space for content creators to share practices, tools and collaborate on projects.",
  },
  {
    id: 104,
    name: "AI Readers Club",
    visibility: "Public",
    membersLabel: "2.1k+ Members",
    sessionsLabel: "Bi-weekly",
    description:
      "We read and discuss approachable AI/ML books and articles. No PhD required—curiosity welcome.",
  },
];
