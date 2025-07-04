"use client";
import { createContext, useContext } from "react";

export const MobileMenuContext = createContext<{
  openMobileMenu: () => void;
} | null>(null);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within ReaderProfileLayout");
  }
  return context;
};
