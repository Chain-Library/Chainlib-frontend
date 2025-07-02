"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "../motion/Animation-wrapper";
import { useWalletContext } from "./WalletProvider";
import { useRouter } from "next/navigation";

// interface WalletOption {
//   id: string;
//   name: string;
//   icon: string;
// }

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (wallet: string) => void;
}

export default function WalletConnectModal({
  isOpen,
  onClose,
}: WalletConnectModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<number | null>(null);
  const { connectors, connectAsync } = useWalletContext();
  const router = useRouter();

  const handleSelect = (walletId: number) => {
    setSelectedWallet(walletId);
  };

  // ② On confirm, look up the connector object and call connectWallet
  const handleConfirm = async () => {
    if (!selectedWallet) return;

    const connector = connectors[selectedWallet - 1];
    if (!connector) {
      console.error("Connector not found:", selectedWallet);
      return;
    }

    try {
      await connectAsync({ connector }); // ■ await the wallet prompt
      router.push("/sign-in"); // ■ now safe to navigate
      onClose();
    } catch (err) {
      console.error("Wallet connection failed:", err); // ■ handle rejections
    }
  };

  const modalVariants = {
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // helper to get icon source
  function getIconSource(
    icon: string | { dark: string; light: string }
  ): string {
    if (typeof icon === "string") {
      // If it's a string, use it directly
      return icon;
    } else {
      // If it's an object, use the dark variant (or light, as needed)
      return icon.dark; // Or icon.light, depending on your theme
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="relative w-fit px-[80px] rounded-2xl bg-white py-[60px] shadow-xl relative"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="text-gray-400 absolute top-5 right-5 bg-[#F6F6F6] p-2 rounded-[8px]"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold text-[#0F265C] text-center mb-1">
              Connect Wallet
            </h2>

            <p className="text-[#0F265C] mb-4 text-center text-sm">
              Choose a wallet you want to connect to Chain Lib
            </p>

            <div className="space-x-8 mb-6 flex justify-center">
              {connectors.map((wallet, index) => {
                console.log(connectors, "connectors");
                return (
                  <AnimationWrapper
                    key={wallet?.id}
                    variant="slideRight"
                    delay={index * 0.1}
                  >
                    <button
                      style={{ boxShadow: "0px 6px 6px 0px #1212120A" }}
                      className={`w-[200px] text-black border p-2 rounded-[10px] transition-all ease-in-out duration-200 
                        ${
                          selectedWallet === index + 1
                            ? "border-[#6366F1] bg-[#F6F6F6]"
                            : "border-[#E0E0E0] hover:border-[#6366F1] hover:bg-[#F0F2FF] bg-white"
                        }`}
                      onClick={() => handleSelect(index + 1)}
                    >
                      <div className="bg-[#E0F0FF] flex justify-center items-center mb-5 h-[120px] rounded-[8px]">
                        <Image
                          src={getIconSource(wallet.icon)}
                          alt={wallet.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>

                      <span className={`font-medium`}>{wallet.name}</span>
                    </button>
                  </AnimationWrapper>
                );
              })}
            </div>

            {/* ③ Confirmation button */}
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
