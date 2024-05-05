import Image from "next/image";
export default function Testimonial() {
  return (
    <section className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
      <article className="flex flex-col gap-y-8 px-6 py-12 bg-[#27322F3D] backdrop-blur-md rounded-3xl">
        <span className="flex items-center justify-center p-4 rounded-full bg-[#3D544D] self-start">
          <IconQuote />
        </span>
        <p className="text-base leading-6">
          &quote;Great session! Dani was super helpful. She shared some practical
          advice on how can lorem ip we go about refining our service
          offerings.&quote;
        </p>
        <div className="flex gap-x-2 items-center">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
            alt="pokemon"
            height={48}
            width={48}
            className="rounded-full bg-white"
          />
          <div>
            <h4 className="font-medium">John Doe</h4>
            <small className="text-xs text-[#ADB2B1]">Software Engineer</small>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-y-8 px-6 py-12 bg-[#27322F3D] backdrop-blur-md rounded-3xl">
        <span className="flex items-center justify-center p-4 rounded-full bg-[#3D544D] self-start">
          <IconQuote />
        </span>
        <p className="text-base leading-6">
          &quote;Great session! Dani was super helpful. She shared some practical
          advice on how can lorem ip we go about refining our service
          offerings.&quote;
        </p>
        <div className="flex gap-x-2 items-center">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
            alt="pokemon"
            height={48}
            width={48}
            className="rounded-full bg-white"
          />
          <div>
            <h4 className="font-medium">Max Carlito</h4>
            <small className="text-xs text-[#ADB2B1]">UX/UI Designer</small>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-y-8 px-6 py-12 bg-[#27322F3D] backdrop-blur-md rounded-3xl">
        <span className="flex items-center justify-center p-4 rounded-full bg-[#3D544D] self-start">
          <IconQuote />
        </span>
        <p className="text-base leading-6">
          &quote;Its is both attractive and highly adaptable. Its exactly what I've
          been looking forefinitely wo lorem ipsum dolorth the investment.&quote;
        </p>
        <div className="flex gap-x-2 items-center">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
            alt="pokemon"
            height={48}
            width={48}
            className="rounded-full bg-white"
          />
          <div>
            <h4 className="font-medium">Kinney Macarthy</h4>
            <small className="text-xs text-[#ADB2B1]">Principle Engineer</small>
          </div>
        </div>
      </article>
    </section>
  );
}

function IconQuote() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M10.4962 4.25098C3.62469 5.58431 3 12.251 3 12.251M3 12.251V16.5029C3 17.1981 3 17.5457 3.05736 17.8348C3.2937 19.026 4.22493 19.9573 5.41618 20.1936C5.70527 20.251 6.05289 20.251 6.74812 20.251V20.251C7.44335 20.251 7.79097 20.251 8.08006 20.1936C9.2713 19.9573 10.2025 19.026 10.4389 17.8348C10.4962 17.5457 10.4962 17.1981 10.4962 16.5029V16.251C10.4962 15.321 10.4962 14.856 10.394 14.4745C10.1166 13.4392 9.30797 12.6306 8.2727 12.3532C7.8912 12.251 7.42621 12.251 6.49624 12.251H3Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M21 4.25098C14.1285 5.58431 13.5038 12.251 13.5038 12.251M13.5038 12.251V16.5029C13.5038 17.1981 13.5038 17.5457 13.5611 17.8348C13.7975 19.026 14.7287 19.9573 15.9199 20.1936C16.209 20.251 16.5567 20.251 17.2519 20.251V20.251C17.9471 20.251 18.2947 20.251 18.5838 20.1936C19.7751 19.9573 20.7063 19.026 20.9427 17.8348C21 17.5457 21 17.1981 21 16.5029V16.251C21 15.321 21 14.856 20.8978 14.4745C20.6204 13.4392 19.8117 12.6306 18.7765 12.3532C18.395 12.251 17.93 12.251 17 12.251H13.5038Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}
