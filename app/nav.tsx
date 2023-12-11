"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/banki.png";
import MenuButton from "./component/ui/menu-button";
import Button from "./component/ui/button";

export default function AppNavigation() {
  const [showMenu, setShowMenu] = useState(false);
  const className =
    "block fixed w-full h-full top-0 left-0 bg-blue/30 backdrop-blur-sm p-6 z-10 lg:hidden";
  return (
    <nav className="app_nav w-full max-w-[1240px] m-auto flex sticky justify-between items-center top-2 bg-white/20 backdrop-blur-2xl z-20">
      <article className="col-span-4 flex gap-3">
        <Image src={logo} alt="website logo" height={18} width={18} />
        <span className="text-xl font-bold">
          Banki
        </span>
      </article>
      <article className={showMenu ? className : "hidden lg:block"}>
        <div className={`flex flex-col gap-8 lg:flex-row`}>
          <Link href="#why-us">Why Us</Link>
          <Link href="#services">Service</Link>
          <Link href="#process">Our Process</Link>
          <Link href="#payment">Payments</Link>
          <Link href="#faqs">FAQs</Link>
          <button className="lg:hidden">Conact</button>
        </div>
      </article>
      <Button variant="outline" className="hidden lg:block">Contact</Button>
      <MenuButton onClick={() => setShowMenu((prevState) => !prevState)} />
    </nav>
  );
}
