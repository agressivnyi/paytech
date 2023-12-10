import { ReactNode, useState } from "react";

export default function MenuButton({ onClick }: { onClick: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="border-2 border-green-500 p-2 cursor-pointer z-20 lg:hidden"
      onClick={() => {
        onClick && onClick();
        setOpen((prevOpen) => !prevOpen);
      }}
    >
      {!open
        ? (
          <Svg>
            <path
              fill="currentColor"
              d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
            />
          </Svg>
        )
        : (
          <Svg>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6L6 18M6 6l12 12"
            />
          </Svg>
        )}
    </button>
  );
}

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}
