export interface ILink {
  link: string;
  href: string;
}

export enum pubType {
  NFT = "Exclusive NFT Edition",
  SERIES = "Series",
  EBOOK = "E-Book",
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  imageUrl: string;
  verified: boolean;
}

export interface IFooterLinks {
  link: string;
  href: string;
}

export interface IOnboardStepContentProps {
  header: string;
  message: string;
  index: number;
  handleClick: (index: number) => void;
  length: number;
}

export interface IMessageCard {
  step: number;
  heading: string;
  message: string;
}

export interface IOnboardStepImageProps {
  alt: string;
  className?: string;
  ImageSrc: string;
  index: number;
  handleClick: (index: number) => void;
  length: number;
  step: number;
}

export interface IOnboardStepProps {
  alt: string;
  ImageSrc: string;
  header: string;
  message: string;
}

export type SidebarItem = {
  icon: string;
  label: string;
  href: string;
  badge?: number;
};
