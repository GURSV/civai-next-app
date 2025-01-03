"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-20">अनुशंसित योजनाएँ</h1>
      <div className="font-mono flex justify-center items-center gap-8 p-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="p-[0.5] bg-slate-400 max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/placeholder-2.jpg"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Scheme Name
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Government Scheme
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quaerat nisi fugiat veniam qui ducimus animi recusandae nostrum modi debitis voluptatum, cum excepturi laboriosam dolor eveniet laborum quam repellendus! Accusantium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;