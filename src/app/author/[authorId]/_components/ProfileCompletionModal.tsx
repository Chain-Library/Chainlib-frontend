"use client";

import CustomLink from '@/app/_components/CustomLink';
import { MessageSquareText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

interface ProfileCompletionModalProps {
    isOpen: boolean;
    onClose: () => void;
    redirectTo?: string;
}

export default function ProfileCompletionModal({
    isOpen,
    onClose,
}: ProfileCompletionModalProps) {
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        onClose();
        setIsVisible(false);
    };

    // When modal is open, prevent body scrolling
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-[100] p-4 overflow-y-auto">
            <div
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                >
                    <FiX size={20} />
                </button>

                <div className="flex flex-col items-center mb-6 pt-4">
                    <div className="bg-primary-200 p-8 rounded-full mb-4">
                        <MessageSquareText className="size-18 md:size-10 text-primary-600" />
                    </div>
                    <h3 className="text-headline-small font-bold text-primary-950">Unlock Your Full Potential</h3>
                    <p className="text-center  font-medium text-body-large text-neutral-900 mt-2">
                        You&apos;re almost there! Complete your profile so we can tailor your
                        experience and connect you with the right opportunities.
                    </p>
                </div>

                <div className="flex flex-col text-label-large md:flex-row justify-center items-center gap-3">
                    <button
                        className="w-full py-4 px-8 bg-primary-200 hover:bg-primary-50 text-primary-950 rounded-base transition-colors"
                        onClick={handleClose}
                    >
                        I&apos;ll do it later
                    </button>
                    <CustomLink
                        classname="w-full py-4 px-8 bg-primary-700 hover:bg-primary-600 text-background rounded-base transition-colors"
                        route="/profile"
                    >
                        Complete Profile
                    </CustomLink>
                </div>
            </div>
        </div>
    );
} 