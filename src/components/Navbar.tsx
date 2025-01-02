"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-mono", className)}
    >
      <Menu setActive={setActive}>
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
      </Menu>
    </div>
  );
}

export default Navbar;
