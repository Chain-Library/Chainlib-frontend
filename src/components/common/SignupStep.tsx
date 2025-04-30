"use client"

import { signupSteps } from '@/data';
import { Ref, useState } from 'react';
import { AnimatedStepContent } from './AnimatedContent';
import { AnimatedStepImage } from './AnimatedImage';

export default function SignupStep({ writerRef }: { writerRef: Ref<HTMLDivElement> }) {
    // The first step is at 0, same with the index
    const [step, setStep] = useState(0)

    const handleClick = (index: number) => {
        if (signupSteps.length > index + 1) {
            setStep(() => index + 1)
        } else {
            setStep(() => 0)
        }
    }

    return (
        <div ref={writerRef} className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 sm:gap-12 lg:gap-20 xl:gap-28 -mt-15 lg:mb-20">
            <div className="overflow-hidden relative mx-auto w-full h-98 pt-46 sm:h-138 sm:pt-64">
                <div className='flex flex-col justify-start size-full items-start gap-0 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateY(-${step * 122.5}%)` }}
                >
                    {signupSteps.map(({ message, header }, index) => (<AnimatedStepContent index={index} handleClick={handleClick} header={header} length={signupSteps.length} message={message} key={index} />))}
                </div>
            </div>

            <div className='relative size-full overflow-hidden'>
                {signupSteps.map(({ ImageSrc, alt }, index) => (<AnimatedStepImage index={index} alt={alt} handleClick={handleClick} ImageSrc={ImageSrc} step={step} length={signupSteps.length} key={index} />))}
            </div>
        </div>
    )
}




