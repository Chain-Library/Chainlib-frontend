import React, { ReactNode } from 'react';
import BackButton from '../_components/backButton';
import Slide from './_component/slide';

export default function AuthLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {

    return (
        <div className="flex flex-col gap-15 md:flex-row min-h-screen p-6 md:py-10 md:px-15">
            {/* Left side - Blue gradient background */}
            <div
                className="w-full min-h-170 hidden md:basis-1/2 px-15 pt-15 pb-6 md:flex flex-col items-center justify-center text-background relative rounded-md bg-gradient-to-br from-primary-600 to-[#054199]"

            >
                {/* slider */}
                <Slide />

                <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#EDF7FF_2px,transparent_2px),linear-gradient(to_bottom,#EDF7FF_2px,transparent_2px)] bg-[size:96px_96px]" />

            </div>

            {/* Right side - Auth form */}
            <div className="w-full max-w-140 md:pr-29 md:basis-1/2 text-neutral-600">
                <BackButton type='auth' />

                {children}
            </div>
        </div>
    )
}
