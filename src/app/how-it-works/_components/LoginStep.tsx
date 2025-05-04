"use client"

import { Ref, useState } from 'react';
import { AnimatedStepContent } from './AnimatedContent';
import { AnimatedStepImage } from './AnimatedImage';
import { IOnboardStepProps } from './types';

const loginSteps: IOnboardStepProps[] = [
    {
        message: "Sign up quickly with your wallet and start exploring.",
        alt: "Sign up and connect wallet image",
        header: "Join & Connect Wallet",
        ImageSrc: "./LoginSteps/LoginStep1.svg",
    },
    {
        message:
            "Choose your favorite genre, set reading goals and follow your favorite author",
        alt: "Sign up and connect wallet image",
        header: "Personalize Your Profile",
        ImageSrc: "./LoginSteps/LoginStep2.svg",
    },
    {
        message:
            "Browse trending titles, new releases, and exclusive collections curated for you",
        alt: "Sign up and connect wallet image",
        header: "Discover Content",
        ImageSrc: "./LoginSteps/LoginStep3.svg",
    },
    {
        message:
            "Read online , offline, or own a special edition NFT of your favorite book",
        alt: "Sign up and connect wallet image",
        header: "Read or Collect",
        ImageSrc: "./LoginSteps/LoginStep4.svg",
    },
    {
        message:
            "Leave reviews, earn achievements, join book clubs, and climb the reader ranks",
        alt: "Sign up and connect wallet image",
        header: "Engage & Level Up",
        ImageSrc: "./LoginSteps/LoginStep5.svg",
    },
    {
        message: "Support Authors Directly",
        alt: "Sign up and connect wallet image",
        header:
            "Every read and purchase supports the creator. Collect, recommend, and enjoy the community",
        ImageSrc: "./LoginSteps/LoginStep6.svg",
    },
];

export default function LoginStep({ readerRef }: { readerRef: Ref<HTMLDivElement> }) {
    // The first step is at 0, same with the index
    const [step, setStep] = useState(0)

    const handleClick = (index: number) => {
        if (loginSteps.length > index + 1) {
            setStep(() => index + 1)
        } else {
            setStep(() => 0)
        }
    }

    return (
        <div ref={readerRef} className="md:grid flex flex-col grid-cols-2 sm:gap-x-12  lg:gap-x-20 xl:gap-x-28">
            <div className='relative w-full h-90 md:h-full overflow-hidden'>
                {loginSteps.map(({ ImageSrc, alt }, index) => (<AnimatedStepImage className='md:-ml-14 sm:justify-start' index={index} alt={alt} handleClick={handleClick} ImageSrc={ImageSrc} step={step} length={loginSteps.length} key={index} />))}
            </div>

            <div className="overflow-hidden relative mx-auto w-full h-93 pt-40 sm:h-138 sm:pt-64">
                <div className='flex flex-col justify-start size-full items-start gap-0 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateY(-${step * 122.5}%)` }}
                >
                    {loginSteps.map(({ message, header }, index) => (<AnimatedStepContent index={index} handleClick={handleClick} header={header} length={loginSteps.length} message={message} key={index} />))}
                </div>
            </div>
        </div>
    )
}
