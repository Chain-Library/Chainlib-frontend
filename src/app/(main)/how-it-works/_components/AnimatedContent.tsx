import { IOnboardStepContentProps } from "./types";

export function AnimatedStepContent({ header, handleClick, message, index, length }: IOnboardStepContentProps) {

    return (
        <div onClick={() => handleClick(index)} className="cursor-pointer grid grid-cols-[2.5rem_auto] gap-6 lg:gap-10 place-content-start place-items-start max-w-md">
            <div className="flex flex-col relative justify-center items-center gap-0 w-fit mx-auto">
                <span className="rounded-full size-10 grid place-content-center bg-primary-950 font-bold text-background">{index + 1}</span>
                {index + 1 < length && <div className="w-0.75 bg-primary-900 h-54 sm:h-80"></div>}
            </div>
            <div>
                <h2 className="text-title-large font-bold text-primary-950 mb-1 sm:mb-4">
                    {header}
                </h2>
                <p className="text-body-large font-light">
                    {message}
                </p>
            </div>
        </div>
    )
}
