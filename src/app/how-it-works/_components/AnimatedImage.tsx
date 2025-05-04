import Image from "next/image";
import { IOnboardStepImageProps } from "./types";

export function AnimatedStepImage({ className = "", ImageSrc, handleClick, alt, step, index }: IOnboardStepImageProps) {
    const isActive = step === index;

    return (
        <div onClick={() => handleClick(index)} className={`cursor-pointer ${className} absolute inset-0 flex items-center justify-center sm:justify-end transition-[transform_opacity] duration-1000 ease-in-out`}
            style={{ transform: `rotate(${isActive ? 0 : 45}deg) scale(${isActive ? 1 : 0})`, opacity: `${isActive ? 100 : 0}%` }}
        >
            <div className="relative size-80">
                <Image alt={alt} src={ImageSrc} fill className="object-contain"
                />
            </div>
        </div>

    )
}
