"use client"

import { createContext, ReactNode } from "react"

export const AuthContext = createContext({})


export default function AuthContextProvider({ children }: { children: ReactNode }) {

  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}
