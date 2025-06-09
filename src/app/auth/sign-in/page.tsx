"use client";

import { Suspense } from "react";
import SignInPage from "../_component/sign-in";


export default function SignInClientPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPage />
    </Suspense>
  );
}