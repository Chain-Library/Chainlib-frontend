import { Variants } from "framer-motion";

export const animateFn = (variants: Variants, custom: number | null = null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    custom,
    variants,
  };
};
