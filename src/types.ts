export interface ILink {
  link: string;
  href: string;
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
