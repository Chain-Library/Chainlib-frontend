import { IFooterLinks, ILink, IOnboardStepProps } from "./types";

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
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "2",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "3",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
  {
    id: "4",
    title: "Native Invisibility",
    author: "Darrin Collins",
    price: 10,
    rating: 4.5,
    coverImage: "/images/bookCover1.png",
    isVerified: true,
  },
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
  },
];
