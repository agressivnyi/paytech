import Image from "next/image";
import imgPlaystore from "../../public/playstore.png";
import imgAppstore from "../../public/appstore.png";
import imgMockup from "../../public/mockup-app.png";
export default function CTA() {
  return (
    <section className="grid grid-cols-1 gap-y-16 items-center overflow-hidden md:grid-cols-2">
      <article className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-5xl font-bold">
            Easy Way to manage your finances
          </h2>
          <p>Easy to use mobile app that support on android and ios.</p>
        </div>
        <div className="flex gap-x-6">
          <span className="bg-[#3D544D] block p-4 rounded-[1rem]" role="button">
            <Image src={imgPlaystore} alt="playstore" />
          </span>
          <span className="bg-[#3D544D] block p-4 rounded-[1rem]" role="button">
            <Image src={imgAppstore} alt="appstore" />
          </span>
        </div>
      </article>
      <div className="relative block min-h-[456px]">
        <Image src={imgMockup} alt="app mockup" objectFit="cover" className="absolute top-0"/>
      </div>
    </section>
  );
}
