import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


interface WalletAddressType {
  braavos: string
  argent: string
}

export const handlePaste = async (
  walletType: string,
  setWalletAddress: React.Dispatch<React.SetStateAction<WalletAddressType>>,
) => {
  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API not available")
    }

    const clipboardText = await navigator.clipboard.readText()


    setWalletAddress((prev) => ({
      ...prev,
      [walletType]: clipboardText.trim(),
    }))

    console.log(`Pasted to ${walletType}:`, clipboardText.trim())
    return clipboardText.trim()
  } catch (error) {
    console.error("Failed to read clipboard:", error)


    const fallbackText = prompt("Clipboard access denied. Please paste your wallet address:")
    if (fallbackText) {
      setWalletAddress((prev) => ({
        ...prev,
        [walletType]: fallbackText.trim(),
      }))
      return fallbackText.trim()
    }

    return null
  }
}



export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });
