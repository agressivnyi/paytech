import Image from "next/image";
import logo from "../public/banki.png";
export default function Footer() {
  return (
    <footer className="px-6 pt-32 pb-20 bg-[#2834308D] backdrop-blur-md">
      <div className="flex flex-col gap-y-20 max-w-[1240px] m-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-2.5 md:col-span-4">
            <div className="flex gap-3 items-center">
              <Image src={logo} alt="banki logo" height={18} width={18} />
              <span className="text-xl font-medium">Banki</span>
            </div>
            <span className="text-base text-[#ADB2B1] max-w-[90%]">
              Were trying to loot you by charging 120% interest loan
            </span>
          </div>

          <div className="grid grid-cols-1 gap-y-6 md:col-span-8 md:grid-cols-6 lg:grid-cols-8">
            <div className="footer__link__group">
              <span className="group__title">About us</span>
              <ul>
                <li className="link">Investors</li>
                <li>Features</li>
                <li>Book a demo</li>
                <li>Security</li>
              </ul>
            </div>

            <div className="footer__link__group">
              <span className="group__title">Products</span>
              <ul>
                <li>Credits Cards</li>
                <li>Gift Cards</li>
                <li>Saving accounts</li>
                <li>NFT</li>
              </ul>
            </div>

            <div className="footer__link__group">
              <span className="group__title">Usefull links</span>
              <ul>
                <li>Free rewards</li>
                <li>Documentation</li>
                <li>Affiliate program</li>
              </ul>
            </div>

            <div className="footer__link__group">
              <span className="group__title">Socials</span>
              <ul>
                <li>Changelog</li>
                <li>License</li>
                <li>Site Maps</li>
                <li>News</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-2 md:flex-row">
          <span className="text-xs text-[#ADB2B1]">
            copyright 2024 DoraDesign All Rights Reserved
          </span>
          <span className="text-xs text-[#ADB2B1]">
            This page uses cookies. See cookies details here
          </span>
        </div>
      </div>
    </footer>
  );
}
