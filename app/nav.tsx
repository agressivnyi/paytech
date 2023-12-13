"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/banki.png";
import MenuButton from "./component/ui/menu-button";
import Button from "./component/ui/button";

export default function AppNavigation() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggleMenu = () => setIsShowMenu((prevShow) => !prevShow);

  return (
    <nav className="app_nav w-full sticky py-2 px-6 mt-4 top-0 bg-white/10 backdrop-blur-sm z-50">
      <div className="flex max-w-[1240px] m-auto justify-between items-center">
        <article className="col-span-4 flex gap-3">
          <Image src={logo} alt="website logo" height={18} width={18} />
          <span className="text-xl font-bold">
            Banki
          </span>
        </article>
        <article
          className={isShowMenu
            ? "mobile__menu"
            : "h-0 overflow-hidden lg:h-auto lg:block"}
        >
          <div
            className={`flex flex-col gap-8 lg:flex-row ${
              isShowMenu ? "text-center" : ""
            }`}
          >
            <Link href="#why-us">Why Us</Link>
            <Link href="#services">Service</Link>
            <Link href="#process">Our Process</Link>
            <Link href="#payment">Payments</Link>
            <Link href="#faqs">FAQs</Link>
            <Button variant="outline" className="lg:hidden">
               Contact  
            </Button>
          </div>
        </article>
        <Button variant="outline" className="hidden lg:block">Contact</Button>
        <MenuButton onClick={handleToggleMenu} />
      </div>
    </nav>
  );
}
