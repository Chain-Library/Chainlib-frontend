"use client"

import { Dispatch, SetStateAction, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const faqItems = [
    {
        question: "How to create an account on ChaineLib",
        answer: "Get a unique NFT-powered author profile with your bio, genres, and publishing rights.\n\nGet a unique NFT-powered author profile with your bio, genres, and publishing rights."
    },
    {
        question: "How to create an account on ChaineLib",
        answer: "Get a unique NFT-powered author profile with your bio, genres, and publishing rights.\n\nGet a unique NFT-powered author profile with your bio, genres, and publishing rights."
    },
    {
        question: "How to create an account on ChaineLib",
        answer: "Get a unique NFT-powered author profile with your bio, genres, and publishing rights.\n\nGet a unique NFT-powered author profile with your bio, genres, and publishing rights."
    },
    {
        question: "How to create an account on ChaineLib",
        answer: "Get a unique NFT-powered author profile with your bio, genres, and publishing rights.\n\nGet a unique NFT-powered author profile with your bio, genres, and publishing rights."
    },
    {
        question: "How to create an account on ChaineLib",
        answer: "Get a unique NFT-powered author profile with your bio, genres, and publishing rights.\n\nGet a unique NFT-powered author profile with your bio, genres, and publishing rights."
    },
];

export default function FaqSection() {
    const [clicked, setClicked] = useState(1);

    return (
        <div className="sm:w-[65vw] lg:w-3xl xl:w-4xl mx-auto">
            <h2 className="text-primary-950 text-center font-bold text-headline-large md:text-headline-xl-large">
                You Got Questions?
            </h2>

            <div className="flex flex-col mt-20 justify-center items-center">
                {faqItems.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        index={index}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                ))}
            </div>
        </div >
    )
}


function FaqItem({ question, answer, index, setClicked, clicked }: { question: string, answer: string, index: number, setClicked: Dispatch<SetStateAction<number>>, clicked: number }) {
    function handleClick() {
        if (index === clicked) { setClicked(0) }
        else { setClicked(index) }
    }

    return (
        <div className="border-b-[0.5px] border-neutral-200 text-neutral-600 py-5 px-4 flex flex-col justify-center items-start font-light w-full relative overflow-hidden">
            <h3 onClick={handleClick} className="flex cursor-pointer justify-between items-center w-full gap-3">
                <span className="text-title-medium md:text-title-large text-neutral-900">
                    {question}
                </span>
                <span className="text-neutral-200 text-2xl">
                    {clicked === index ? <BiMinusCircle size={24} /> : <BiPlusCircle size={24} />}
                </span>
            </h3>
            <p className={`text-body-medium md:text-body-18px-large max-w-[46rem] overflow-hidden transition-all duration-300 ease-in-out ${clicked === index ? "h-auto mt-8" : "h-0 max-h-0"}`}>
                {answer}
            </p>
        </div >
    )
}
