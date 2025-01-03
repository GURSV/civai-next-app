"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="mt-20 mb-14 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-center font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        विवरण के लिए प्रपत्र
      </h2>
      <hr className="h-[0.5]"/>
      <form className="my-8 font-mono" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">पहला नाम</Label>
            <Input id="firstname" placeholder="Ram" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">उपनाम</Label>
            <Input id="lastname" placeholder="Sharma" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="place">जगह</Label>
          <Input id="place" placeholder="Delhi" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="category">वर्ग</Label>
          <Input id="category" placeholder="General/EWS/OBC/SC/ST/PwD" type="text" />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="state">राज्य</Label>
            <Input id="state" placeholder="Punjab" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="city">शहर</Label>
            <Input id="city" placeholder="Amritsar" type="text" />
          </LabelInputContainer>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          जमा करना &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;