import {
  IFooterLinks,
  ILink,
  IOnboardStepProps,
  SidebarItem,
} from "./types/types";

export const links: ILink[] = [
  { link: "Home", href: "/" },
  { link: "Books", href: "/books/bookId" },
  { link: "How It Works", href: "/how-it-works" },
  { link: "About ChainLib", href: "/about-us" },
];

export const FooterLink: IFooterLinks[] = [
  { link: "Explore", href: "/explore" },
  { link: "Home", href: "/" },
  { link: "Books", href: "/books" },
  { link: "How It Works", href: "/how-it-works" },
  { link: "About", href: "/about-us" },
  { link: "Legal", href: "/legal" },
  { link: "Privacy Policy", href: "/privacy-policy" },
  { link: "Terms Of Service", href: "/terms-of-service" },
];

export const sidebarItems: SidebarItem[] = [
  {
    icon: "/dashboardIcon.svg",
    label: "Dashboard",
    href: "/author",
  },
  {
    icon: "/manageIcon.svg",
    label: "Manage Content",
    href: "/author/publish",
  },
  {
    icon: "/earningsIcon.svg",
    label: "Earnings",
    href: "/author/earnings",
  },
  {
    icon: "/analyticsIcon.svg",
    label: "Analytics panel",
    href: "/author/analytics",
  },
  {
    icon: "/readersIcon.svg",
    label: "Readers Feedback",
    href: "/author/feedback",
  },
  {
    icon: "/notificationIcon.svg",
    label: "Notification",
    href: "/notifications",
    badge: 1,
  },
  {
    icon: "/profileIcon.svg",
    label: "Profile",
    href: "/profile",
  },
  {
    icon: "/signoutIcon.svg",
    label: "Sign Out",
    href: "/signout",
  },
];

// Mock data - would be fetched from API
export const stats = {
  booksPublished: 12,
  totalEarning: 817.0,
  totalReads: 12,
  followers: 12,
};

export const recentBooks = [
  {
    id: 1,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
  {
    id: 2,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
  {
    id: 3,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: false,
  },
  {
    id: 4,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
];

export const trendingBooks = [
  {
    id: 1,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
  {
    id: 2,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
  {
    id: 3,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: false,
  },
  {
    id: 4,
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    imageUrl: "/bookCover.png",
    verified: true,
  },
];

export const topAuthors = [
  { id: 1, name: "Elizabeth Joe", imageUrl: "/authorImg.png", verified: true },
  { id: 2, name: "Alex Paul", imageUrl: "/authorImg2.png", verified: true },
  {
    id: 3,
    name: "Samson Tersoor",
    imageUrl: "/authorImg3.png",
    verified: true,
  },
  { id: 4, name: "Vamika Maya", imageUrl: "/authorImg4.png", verified: true },
];

export const newReleases = [
  {
    imageUrl: "/Cover.png",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "10",
    rating: "4.5",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Creative Minds",
    author: "Jane Doe",
    price: "12",
    rating: "4.8",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Dreamscape",
    author: "John Smith",
    price: "15",
    rating: "4.9",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Hidden Voices",
    author: "Mary Lane",
    price: "9",
    rating: "4.7",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Beyond Borders",
    author: "Leo Thomas",
    price: "13",
    rating: "4.6",
    verified: true,
  },
];

export const trendingBooksHome = [
  {
    imageUrl: "/Cover.png",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "10",
    rating: "4.5",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Creative Minds",
    author: "Jane Doe",
    price: "12",
    rating: "4.8",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Dreamscape",
    author: "John Smith",
    price: "15",
    rating: "4.9",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Hidden Voices",
    author: "Mary Lane",
    price: "9",
    rating: "4.7",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Beyond Borders",
    author: "Leo Thomas",
    price: "13",
    rating: "4.6",
    verified: true,
  },
];
export const nftEditions = [
  {
    imageUrl: "/Cover.png",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: "10",
    rating: "4.5",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Creative Minds",
    author: "Jane Doe",
    price: "12",
    rating: "4.8",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Dreamscape",
    author: "John Smith",
    price: "15",
    rating: "4.9",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Hidden Voices",
    author: "Mary Lane",
    price: "9",
    rating: "4.7",
    verified: true,
  },
  {
    imageUrl: "/Cover.png",
    title: "Beyond Borders",
    author: "Leo Thomas",
    price: "13",
    rating: "4.6",
    verified: true,
  },
];

export const signupSteps: IOnboardStepProps[] = [
  {
    alt: "Sign up and connect wallet image",
    header: "Sign Up & Connect Wallet",
    message:
      "Join ChainLib as a writer by connecting your StarkNet wallet(e.g., Braavos or Argent).",
    ImageSrc: "./SignupSteps/SignUpStep1.svg",
  },
  {
    message:
      "Get a Unique NFT-powered author profile with your bio, genres, and publishing rights",
    alt: "Sign up and connect wallet image",
    header: "Create Your Author Identity",
    ImageSrc: "./SignupSteps/SignUpStep2.svg",
  },
  {
    message:
      "Sign a smart contract that outlines ownership rights and revenue sharing.",
    alt: "Sign up and connect wallet image",
    header: "Agree To Terms",
    ImageSrc: "./SignupSteps/SignUpStep3.svg",
  },
  {
    message:
      "Access your personal dashboard to manage books, track earnings and engage with readers.",
    alt: "Sign up and connect wallet image",
    header: "Set Up Your Dashboard",
    ImageSrc: "./SignupSteps/SignUpStep4.svg",
  },
  {
    message:
      "Upload your book, add metadata(title, genre, price), and mint it as a content NFT.",
    alt: "Sign up and connect wallet image",
    header: "Publish your Books",
    ImageSrc: "./SignupSteps/SignUpStep5.svg",
  },
  {
    message:
      "Earn instantly from purchases or subscriptions no middleman, full transparency",
    alt: "Sign up and connect wallet image",
    header: "Get Paid Directly",
    ImageSrc: "./SignupSteps/SignUpStep6.svg",
  },
];

export const relatedBooks = [
  {
    id: "1",
    imageUrl: "/Cover.png",

    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "2",
    imageUrl: "/Cover.png",

    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "3",
    imageUrl: "/Cover.png",

    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "4",
    imageUrl: "/Cover.png",

    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
];

export const AVAILABLE_GENRES = [
  "Fiction",
  "Drama",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Romance",
];

export const AVAILABLE_TAGS = [
  "Adventure",
  "Sci-Fi",
  "Bestseller",
  "New Release",
  "Fantasy",
];

export const loginSteps: IOnboardStepProps[] = [
  {
    message: "Sign up quickly with your wallet and start exploring.",
    alt: "Sign up and connect wallet image",
    header: "Join & Connect Wallet",
    ImageSrc: "./LoginSteps/LoginStep1.svg",
  },
  {
    message:
      "Choose your favorite genre, set reading goals and follow your favorite author",
    alt: "Sign up and connect wallet image",
    header: "Personalize Your Profile",
    ImageSrc: "./LoginSteps/LoginStep2.svg",
  },
  {
    message:
      "Browse trending titles, new releases, and exclusive collections curated for you",
    alt: "Sign up and connect wallet image",
    header: "Discover Content",
    ImageSrc: "./LoginSteps/LoginStep3.svg",
  },
  {
    message:
      "Read online , offline, or own a special edition NFT of your favorite book",
    alt: "Sign up and connect wallet image",
    header: "Read or Collect",
    ImageSrc: "./LoginSteps/LoginStep4.svg",
  },
  {
    message:
      "Leave reviews, earn achievements, join book clubs, and climb the reader ranks",
    alt: "Sign up and connect wallet image",
    header: "Engage & Level Up",
    ImageSrc: "./LoginSteps/LoginStep5.svg",
  },
  {
    message: "Support Authors Directly",
    alt: "Sign up and connect wallet image",
    header:
      "Every read and purchase supports the creator. Collect, recommend, and enjoy the community",
    ImageSrc: "./LoginSteps/LoginStep6.svg",
  },
];

export const bookData = [
  {
    title: "Native Invisibility",
    author: "Darrin Collins",
    authorImage: "/author1.svg",
    rating: 4.5,
    reviews: 109,
    description:
      '"Native Invisibility" delves into the complex and often insidious ways in which Indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.',
    price: 12,
    strikeCount: "193 STRK",
    genre: "Fiction",
    category: "Comic",
    pageCount: "21 Pages",
    language: "English",
    publishDate: "12 April, 2025",
    isbn: "978-3-16-148410-0",
    publisherNote:
      "Native Invisibility unveils the crucial ways Indigenous cultures are often unseen in our modern world. This vital book fosters understanding and action for recognition and justice.",
    authorBio:
      "Darrin Collins is a dedicated researcher and writer deeply committed to exploring issues of cultural visibility, marginalization, and the intersection of identity and technology. His work in Native Invisibility reflects a long-standing interest in amplifying underrepresented voices and fostering a more nuanced understanding of diverse experiences in the contemporary world.",
    isVerified: true,
    coverImage: "/images/bookCover1.png",
    blockchainData: {
      smartContractAddress: "0x8...dd5A",
      tokenStandard: "ERC-721",
      network: "Ethereum",
      minted: "15 April 2025",
    },
  },
];

export const filterOptions = ["Book Type", "Status", "Genre", "Collaborations"];

export const statsCardsTop = [
  {
    title: "Published",
    value: "89",
    icon: "/published.svg",
    badgeColor: "#096CFF",
  },
  {
    title: "Regular Book",
    value: "27",
    icon: "/regular.svg",
    iconColor: "#239641",
    badgeColor: "#239641",
    iconBgColor: "#e9f7ff",
  },
  {
    title: "NFT Editions",
    value: "7",
    icon: "/dolls.svg",
    iconColor: "#822ecb",
    badgeColor: "#822ecb",
    iconBgColor: "#f6f6f6",
  },
  { title: "Series", value: "12", icon: "/series.svg", badgeColor: "#ed8d48" },
];

export const statsCardsBottom = [
  {
    title: "Collections",
    value: "12",
    icon: "/collect.svg",
    badgeValue: "12",
    badgeColor: "#0f3d99",
  },
  {
    title: "Under Review",
    value: "3",
    icon: "/review.svg",
    badgeValue: "12",
    badgeColor: "#dba736",
  },
  {
    title: "Draft",
    value: "6",
    icon: "/draft.svg",
    badgeValue: "6",
    badgeColor: "#888888",
  },
];

export const recentDashBoardBooks = [
  {
    id: "1",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "2",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "3",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "4",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "5",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "6",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "7",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "8",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
];

export const nftBooks = [
  {
    id: "5",
    title: "Peace and Hate",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "6",
    title: "Love at Night",
    price: "$10",
    status: "Under Review",
    statusColor: "#dba736",
  },
  {
    id: "7",
    title: "Dark World",
    price: "$10",
    status: "Draft",
    statusColor: "#5d5d5d",
  },
  {
    id: "8",
    title: "Peace and Hate",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
];

export const seriesBooks = [
  {
    id: "9",
    title: "Native Invisibility",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
  {
    id: "10",
    title: "Love at Night",
    price: "$10",
    status: "Under Review",
    statusColor: "#dba736",
  },
  {
    id: "11",
    title: "Dark World",
    price: "$10",
    status: "Draft",
    statusColor: "#5d5d5d",
  },
  {
    id: "12",
    title: "Peace and Hate",
    price: "$10",
    status: "Published",
    statusColor: "#34a853",
  },
];

export const collections = [
  { id: "1", title: "Top Tech Books", price: "$10" },
  { id: "2", title: "My Best Boook", price: "$10", owners: 1 },
  { id: "3", title: "Most Read", price: "$10" },
  { id: "4", title: "Comics", price: "$10" },
];
