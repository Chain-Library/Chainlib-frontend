"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Import Variants explicitly
import { X } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "../motion/Animation-wrapper";
import { useWalletContext } from "./WalletProvider";
import { useRouter } from "next/navigation";

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (wallet: string) => void;
}

export default function WalletConnectModal({
  isOpen,
  onClose,
}: WalletConnectModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const { connectors, connectAsync } = useWalletContext();
  const router = useRouter();

  const handleSelect = (walletId: string) => {
    setSelectedWallet(walletId);
  };

  const handleConfirm = async () => {
    if (!selectedWallet) return;

    const connector = connectors.find((c) => c.id === selectedWallet);
    if (!connector) {
      console.error("Connector not found:", selectedWallet);
      return;
    }

    try {
      await connectAsync({ connector });
      router.push("/sign-in");
      onClose();
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  // Explicitly type modalVariants as Variants
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Helper to get icon source
  function getIconSource(
    icon: string | { dark: string; light: string }
  ): string {
    if (typeof icon === "string") {
      return icon;
    }
    return icon.dark; // Or icon.light, depending on theme
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-blue-600 p-6 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                Connect Wallet
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-300 mb-4 text-center">
              Choose a wallet you want Hüto connect to Chain Lib
            </p>

            <div className="space-y-3 mb-6">
              {connectors.map((wallet, index) => (
                <AnimationWrapper
                  key={wallet?.id}
                  variant="slideRight"
                  delay={index * 0.1}
                >
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors ${
                      selectedWallet === wallet.id
                        ? "border-teal-500 bg-[#0d0e24]"
                        : ""
                    }`}
                    onClick={() => handleSelect(wallet.id)}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center`}
                    >
                      <div className="">
                        <Image
                          src={getIconSource(wallet.icon)}
                          alt={wallet.name}
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-white">{wallet.name}</span>
                  </button>
                </AnimationWrapper>
              ))}
            </div>

            <AnimationWrapper variant="slideUp" delay={0.3}>
              <button
                onClick={handleConfirm}
                disabled={!selectedWallet}
                className={`w-full py-3 rounded-full text-white font-medium transition-colors ${
                  selectedWallet
                    ? "bg-blue-500 hover:bg-blue-900"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                Connect
              </button>
            </AnimationWrapper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
