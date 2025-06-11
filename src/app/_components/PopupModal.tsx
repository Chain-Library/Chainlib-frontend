"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function PopupModal({ isVisible, setIsVisible }: { isVisible: boolean; setIsVisible: (x: boolean) => void }) {
    const handleClose = () => {
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
            if (isVisible) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-[100] p-4 overflow-y-auto">
            <div
                className={cn("bg-background grid place-items-center rounded-base p-6 max-w-2xl w-full relative transition-all duration-1500 ease-out opacity-0 scale-80", isVisible && "opacity-100 scale-100")}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                >
                    <FiX size={32} />
                </button>

                <div className="text-primary-950 pt-4 my-8 w-full md:w-4/5 text-center">
                    <h3 className="text-headline-large mb-4 leading-none font-bold">How Would you Like to Sign Up</h3>
                    <p className="text-center font-medium text-body-large mt-2">
                        Choose your role to get started
                    </p>

                    <div className="flex items-center w-full gap-6  justify-center md:justify-between mt-15">
                        <Link href="/auth/sign-up" className='rounded-base bg-neutral-50 cursor-pointer space-y-5 p-2 transition-shadow hover:shadow-small border border-neutral-100 grid place-content-center'>
                            <div className='relative grid place-items-center bg-primary-100 rounded-small md:h-36 md:w-50 h-24 w-32'>
                                <Image className='size-12 md:size-24' width={100} height={100} src="/create1.svg" alt='Signup as a reader' />
                            </div>
                            <span className='text-body-18px-large mb-4 font-medium text-center'>As Reader</span>
                        </Link>
                        <Link href="/auth/sign-up" className='rounded-base bg-neutral-50 space-y-5 p-2 cursor-pointer transition-shadow hover:shadow-small border border-neutral-100 grid place-content-center'>
                            <div className='relative grid place-items-center bg-primary-100 rounded-small md:h-36 md:w-50 h-24 w-32'>
                                <Image className='size-12 md:size-24' width={100} height={100} src="/create1.svg" alt='Signup as a reader' />
                            </div>
                            <span className='text-body-18px-large mb-4 font-medium text-center'>As Writer</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 