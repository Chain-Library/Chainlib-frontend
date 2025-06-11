"use client";

import { Suspense } from "react";
import SignUpPage from "../_component/sign-up";


export default function SignUpClientPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpPage searchParams={searchParams} />
    </Suspense>
  );
}