"use client";

import { useState } from "react";

import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";

import MobileMenu from "./MobileMenu";
import HeaderMenu from "../HeaderMenu";
import SocialLinks from "../SocialLinks";

const MobileSideNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden size-12 p-3"
      >
        <Icon name="menu" className="size-7 link" />
      </button>
      <MobileMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <nav className="flex flex-col gap-5">
          <h2>TODO: SearchBar</h2>
          <Separator />
          <h2>TODO: Account</h2>
          <Separator />
          <HeaderMenu variant="mobile" />
          <Separator />
          <SocialLinks />
        </nav>
      </MobileMenu>
    </>
  );
};

export default MobileSideNavbar;
