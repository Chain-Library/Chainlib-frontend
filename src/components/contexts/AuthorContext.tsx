"use client"

import { createContext, ReactNode, useState } from "react";

interface IAuthor {
    publishStep: number;
    updatePublishStep: (x: number) => void;
}

export const AuthorContext = createContext<IAuthor | undefined>(undefined)

export default function AuthorContextProvider({ children }: { children: ReactNode }) {
    const [publishStep, setPublishStep] = useState(0);

    const updatePublishStep = (val: number) => {
        setPublishStep(() => val)
    }

    return (
        <AuthorContext.Provider value={{ publishStep, updatePublishStep }}>{children}</AuthorContext.Provider>
    )
}
