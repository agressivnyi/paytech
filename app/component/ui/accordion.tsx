"use client";
import { ReactNode, useRef, useState } from "react";

export type AccordionProps = {
  className?: string;
  open?: boolean;
  title: string;
  children?: ReactNode;
};
export default function Accordion({
  className,
  open,
  title,
  children,
}: AccordionProps) {
  const [isOpenAccordion, setOpenAccordion] = useState(open || false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <article
      className={`flex flex-col gap-y-4 border-b-[1.5px] border-[#ADB2B1] duration-150 transition-all ${
        className ? className : ""
      }`}
    >
      <div
        className="flex gap-3 items-center justify-between"
        onClick={() => setOpenAccordion((prevState) => !prevState)}
      >
        <h4 className="text-xl lg:text-2xl font-bold text-ellipsis max-w-[90%]">
          {title}
        </h4>
        <button className="bg-transparent flex text-2xl">
          {isOpenAccordion
            ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
              >
                <path d="M16 0.707031V3.79475H0V0.707031H16Z" fill="white" />
              </svg>
            )
            : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M16 9.47451H9.31765V16.251H6.65098V9.47451H0V7.05882H6.65098V0.250977H9.31765V7.05882H16V9.47451Z"
                  fill="white"
                />
              </svg>
            )}
        </button>
      </div>
      <div
        className={`duration-200 transition-all overflow-hidden`}
        style={isOpenAccordion
          ? { height: contentRef?.current?.clientHeight }
          : { height: 0 }}
      >
        <div ref={contentRef} className="pb-4">
          {children}
        </div>
      </div>
    </article>
  );
}
