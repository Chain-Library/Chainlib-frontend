"use client"

import { loginSteps } from '@/data'
import { Ref, useState } from 'react'
import { AnimatedStepContent } from './AnimatedContent'
import { AnimatedStepImage } from './AnimatedImage'

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
