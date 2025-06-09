"use client";

import GoogleIcon from "@/assets/svg/googleIcon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignUpFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    pseudonym: string;
    email: string;
  }) => void;
  defaultValues?: {
    firstName: string;
    lastName: string;
    pseudonym: string;
    email: string;
  };
}

export default function SignUpForm({
  onSubmit,
  defaultValues = { firstName: "", lastName: "", pseudonym: "", email: "" },
}: SignUpFormProps) {
  const [formData, setFormData] = useState(defaultValues);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (agreeToTerms) {
      onSubmit(formData);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-headline-small font-bold text-gray-800 mb-2">
          Sign-up as Author
        </h1>
        <p className="text-gray-600 text-body-medium">
          Curious to see what &#39;s inside? we &#39;re excited to welcome
          you!
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="text-body-medium font-medium text-gray-700"
            >
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="text-body-medium font-medium text-gray-700"
            >
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="pseudonym"
            className="text-body-medium font-medium text-gray-700"
          >
            Pseudonym (Optional)
          </label>
          <Input
            id="pseudonym"
            name="pseudonym"
            value={formData.pseudonym}
            onChange={handleChange}
            placeholder="Enter Pseudonym"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-body-medium font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full"
            required
          />
          <p className="text-xs text-gray-500">
            Enter a valid email address
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={(checked) =>
              setAgreeToTerms(checked as boolean)
            }
          />
          <label htmlFor="terms" className="text-body-medium text-gray-600">
            Agree to ChainLib{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms and Condition
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full py-6 bg-gradient-to-br from-primary-600 to-[#054199]"
          disabled={!agreeToTerms}
        >
          Continue
        </Button>

        <div className="text-center text-body-medium px-6 text-gray-500 flex gap-4 justify-center items-center">
          <span className="rounded-full w-full h-0.25 bg-neutral-100"></span>
          <span className="whitespace-nowrap">Or Continue With </span>
          <span className="rounded-full w-full h-0.25 bg-neutral-100"></span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            type="button"
            className="flex items-center justify-center space-x-2"
          >
            <GoogleIcon />
            <span>Google</span>
          </Button>

          <Button
            variant="outline"
            type="button"
            className="flex items-center justify-center space-x-2"
          >
            <GithubIcon />
            <span>Github</span>
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="text-blue-600 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </form>
    </>
  );
}
