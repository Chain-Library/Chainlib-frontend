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
