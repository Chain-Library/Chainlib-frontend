"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TogglePasswordProps {
  inputId: string;
}

export function TogglePassword({ inputId }: TogglePasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

    // Get the password input and toggle its type
    const passwordInput = document.getElementById(inputId) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = showPassword ? "password" : "text";
    }
  };

  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      aria-label="Toggle password visibility"
    >
      {showPassword ? (
        <EyeOff className="w-5 h-5" />
      ) : (
        <Eye className="w-5 h-5" />
      )}
    </button>
  );
}
