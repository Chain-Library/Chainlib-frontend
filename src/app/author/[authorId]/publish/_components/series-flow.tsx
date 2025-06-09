"use client"

import { useState } from 'react';
import BookContentStep from './BookContentStep';
import BookDetailsStep from './BookDetailsStep';
import PricingStep from './PricingStep';

interface SeriesBookCreationFlowProps {
    handleNext: () => void;
    handleBack: () => void;
    step: number;
}

interface IData {
    bookTitle: string;
    subtitle: string;
    language: string;
    isbn: string;
    authorName: string;
    genres: string[],
    seriesType: string,
    tags: string[],
    description: string;
    pricingOption: string
    price: string
    stark: string
    contributors: Array<{ name: string; type: string; email?: string }>,
}

export default function SeriesBookCreationFlow({ step, handleBack, handleNext }: SeriesBookCreationFlowProps) {

    const [formData, setFormData] = useState({
        bookTitle: "",
        subtitle: "",
        language: "",
        isbn: "",
        seriesType: "",
        authorName: "Joe Yanum",
        genres: [] as string[],
        tags: [] as string[],
        description: "",
        pricingOption: "one-time",
        price: "9.89",
        stark: "82.22",
        contributors: [] as Array<{ name: string; type: string; email?: string }>,
    });

    const updateForm = (data: object) => {
        setFormData((prevData: IData) => { return { ...prevData, ...data } })
    }
    return <>
        {step === 1 ? (
            <BookContentStep
                formData={formData}
                bookType='Series'
                setFormData={updateForm}
                onNext={handleNext}
            />
        ) :
            step === 2 ? (
                <BookDetailsStep
                    formData={formData}
                    setFormData={updateForm}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            ) :

                step === 3 ? (
                    <PricingStep
                        formData={formData}
                        bookType='Series'
                        setFormData={updateForm}
                        onBack={handleBack}
                    />
                ) : null
        }
    </>
}
