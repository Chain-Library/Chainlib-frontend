"use client"

import { loginSteps } from '@/data'
import { useState } from 'react'
import { AnimatedStepContent } from './AnimatedContent'
import { AnimatedStepImage } from './AnimatedImage'

export default function LoginStep() {
    // The first step is at 0
    const [step, setStep] = useState(0)

    const handleClick = (index: number) => {
        if (loginSteps.length > index + 1) {
            setStep(() => index + 1)
        } else {
            setStep(() => 0)
        }
    }

    return (
        // <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 md:gap-28 mt-25">
        //     <div className="relative p-5 md:-ml-21">
        //         <Image alt="Login up and connect wallet image" src={ImageSrc} width={360} height={360} className="" />
        //     </div>

        //     <div className="grid grid-cols-[2.5rem_auto] gap-10 place-content-start max-w-md md:pt-42">
        //         <div className="flex flex-col justify-center items-center gap-0 w-fit">
        //             <span className="rounded-full size-10 grid place-content-center bg-primary-950 font-bold text-background">{index}</span>
        //             <div className="w-0.75 bg-primary-900 h-64"></div>
        //         </div>
        //         <div>
        //             <h2 className="text-title-large font-bold text-primary-950 mb-4">
        //                 {header}
        //             </h2>
        //             <p className="text-body-large font-light">
        //                 {message}
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 md:gap-28">
            <div className='relative size-full overflow-hidden'>
                {loginSteps.map(({ ImageSrc, alt }, index) => (<AnimatedStepImage className='md:-ml-21' index={index} alt={alt} handleClick={handleClick} ImageSrc={ImageSrc} step={step} length={loginSteps.length} key={index} />))}
            </div>

            <div className="overflow-hidden relative mx-auto w-full h-116 pt-42">
                <div className='flex flex-col justify-start size-full items-start gap-0 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateY(-${step * 100}%)` }}
                >
                    {loginSteps.map(({ message, header }, index) => (<AnimatedStepContent index={index} handleClick={handleClick} header={header} length={loginSteps.length} message={message} key={index} />))}
                </div>
            </div>
        </div>
    )
}
