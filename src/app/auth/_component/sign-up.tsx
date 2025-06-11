
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import EmailVerification from "../_component/email-verification";
import PasswordForm from "../_component/password-form";
import SignUpForm from "../_component/signUpForm";
import SuccessModal from "../_component/success-modal";

export default function SignUpPage({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParam = searchParams;
    const [signupState, setSignupState] = useState("signup-form");
    const [allowed, setAllowed] = useState(false);
    const [localState, setLocalState] = useLocalStorageState("signup-form", "signup-state");
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        pseudonym: "",
        email: "example@gmail.com",
        password: "",
    });

    const step = Number(searchParam?.step ?? 1);

    useEffect(() => {
        if (step > 1 && !localState) {
            router.push(pathname);
            return;
        }

        setAllowed(true);
    }, [localState, pathname, router, step]);

    const updateSearchParams = useCallback((step: number) => {
        const newState = Number(step) === 2 ? "submit-password" : "verify-email";
        const params = new URLSearchParams(searchParam.toString());
        params.set("step", step.toString());
        setSignupState(() => newState);
        setLocalState(newState);
        router.push(pathname + '?' + params.toString());
    }, [searchParam, pathname, router, setLocalState]);

    const handleSignUpSubmit = (data: Partial<typeof userData>) => {
        setUserData({ ...userData, ...data });
        updateSearchParams(2);
    };

    const handlePasswordSubmit = (password: string) => {
        setUserData({ ...userData, password });
        updateSearchParams(3);
    };

    const handleVerificationSubmit = () => {
        setSignupState(() => "success");
        setLocalState("success");
        setTimeout(() => {
            router.push("/author/id");
        }, 3000);
    };

    if (!allowed) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 1, 0.24, 0] }}
            >
                {signupState === "signup-form" && (
                    <SignUpForm onSubmit={handleSignUpSubmit} defaultValues={userData} />
                )}
                {signupState === "submit-password" && (
                    <PasswordForm onSubmit={handlePasswordSubmit} />
                )}
                {signupState === "verify-email" && (
                    <EmailVerification
                        email={userData.email}
                        onSubmit={handleVerificationSubmit}
                    />
                )}
                {signupState === "success" && <SuccessModal />}
            </motion.div>
        </AnimatePresence>
    );
}