import { IOnboardStepImageProps } from "@/types";
import Image from "next/image";

export function AnimatedStepImage({ className, ImageSrc, handleClick, alt, step, index }: IOnboardStepImageProps) {
    const isActive = step === index;

    return (
        <div onClick={() => handleClick(index)} className={`cursor-pointer absolute inset-0 object-contain size-90 p-5 transition-[transform_opacity] duration-500 ease-in-out ${className}`}
            style={{ transform: `scale(${isActive ? 1 : 0})`, opacity: `${isActive ? 100 : 0}%` }}
        >
            <Image alt={alt} src={ImageSrc} objectFit="left" fill className="xl:ml-12" />
        </div>
    )
}
