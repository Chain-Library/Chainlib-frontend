
"use client";

import Loader from "@/app/_components/Loader";
import AppleIcon from "@/assets/svg/appleIcon";
import GoogleIcon from "@/assets/svg/googleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { TogglePassword } from "../_component/toggle-password";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const router = useRouter();

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (value && !validateEmail(value)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (email && !validateEmail(email)) {
            setIsEmailValid(false);
            return;
        }

        if (email && password) {
            router.push("/author/id");
        }
        console.log("Form submitted");
        setIsLoading(false);
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-500 mb-8">
                Enter your registered email address and password to access your account.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email address"
                        className={`w-full p-3 border ${!isEmailValid ? "border-red-500" : "border-gray-300"
                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {!isEmailValid && (
                        <p className="text-red-500 text-xs">Enter a valid email address</p>
                    )}
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <Link href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <TogglePassword inputId="password" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 text-white text-center grid place-content-center bg-primary-600 font-medium rounded-md transition-colors"
                >
                    {isLoading ? <Loader /> : <span>Log In</span>}
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">Or Continue With</p>
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        className="flex items-center justify-center w-1/2 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors gap-2"
                    >
                        <GoogleIcon />
                        Google
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-1/2 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        <AppleIcon />
                        Apple
                    </button>
                </div>
            </div>

            <p className="text-sm text-center mt-8">
                Don&apos;t have an account?
                <Link href="/auth/sign-up" className="text-blue-500 hover:underline ml-1">
                    Sign Up
                </Link>
            </p>
        </>
    );
}