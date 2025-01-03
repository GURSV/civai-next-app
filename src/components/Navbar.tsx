"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Search } from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-mono", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-l font-bold mr-8 underline">
          CivAI
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            
          </MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="About">
            
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Schemes">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">1</HoveredLink>
            <HoveredLink href="/courses">2</HoveredLink>
            <HoveredLink href="/courses">3</HoveredLink>
            <HoveredLink href="/courses">4</HoveredLink>
            <HoveredLink href="/courses">5</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            
          </MenuItem>
        </Link>
        <div className="relative m-100">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-40 pl-8 pr-4 rounded-lg bg-black border border-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;