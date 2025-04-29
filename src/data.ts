import { IFooterLinks, ILink, IOnboardStepProps } from "./types";

export const links: ILink[] = [
  { link: "Home", href: "/" },
  { link: "Books", href: "/books/:bookId" },
  { link: "How It Works", href: "/how-it-works" },
  { link: "About ChainLib", href: "/about-chainlib" },
];

export const FooterLink: IFooterLinks[] = [
  { link: "Explore", href: "/explore" },
  { link: "Home", href: "/" },
  { link: "Books", href: "/books" },
  { link: "How It Works", href: "/how-it-works" },
  { link: "About", href: "/about-chainlib" },
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
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Get a Unique NFT-powered author profile with your bio, genres, and publishing rights",
    alt: "Sign up and connect wallet image",
    header: "Create Your Author Identity",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Sign a smart contract that outlines ownership rights and revenue sharing.",
    alt: "Sign up and connect wallet image",
    header: "Agree To Terms",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Access your personal dashboard to manage books, track earnings and engage with readers.",
    alt: "Sign up and connect wallet image",
    header: "Set Up Your Dashboard",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Upload your book, add metadata(title, genre, price), and mint it as a content NFT.",
    alt: "Sign up and connect wallet image",
    header: "Publish your Books",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Earn instantly from purchases or subscriptions no middleman, full transparency",
    alt: "Sign up and connect wallet image",
    header: "Get Paid Directly",
    ImageSrc: "./HIWSignup.svg",
  },
];

export const loginSteps: IOnboardStepProps[] = [
  {
    message: "Sign up quickly with your wallet and start exploring.",
    alt: "Sign up and connect wallet image",
    header: "Join & Connect Wallet",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Choose your favorite genre, set reading goals and follow your favorite author",
    alt: "Sign up and connect wallet image",
    header: "Personalize Your Profile",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Browse trending titles, new releases, and exclusive collections curated for you",
    alt: "Sign up and connect wallet image",
    header: "Discover Content",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Read online , offline, or own a special edition NFT of your favorite book",
    alt: "Sign up and connect wallet image",
    header: "Read or Collect",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message:
      "Leave reviews, earn achievements, join book clubs, and climb the reader ranks",
    alt: "Sign up and connect wallet image",
    header: "Engage & Level Up",
    ImageSrc: "./HIWSignup.svg",
  },
  {
    message: "Support Authors Directly",
    alt: "Sign up and connect wallet image",
    header:
      "Every read and purchase supports the creator. Collect, recommend, and enjoy the community",
    ImageSrc: "./HIWSignup.svg",
  },
];
