import Image from "next/image";
import upwork from "../../public/brand/upwork.png";
import nyt from "../../public/brand/nyt.png";
import dell from "../../public/brand/dell.png";
import vice from "../../public/brand/vice.png";
import rakuten from "../../public/brand/rakuten.png";
import petal from "../../public/brand/petal.png";

export default function Brands() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-y-8">
      <Image src={upwork} alt="upwork" />
      <Image src={petal} alt="upwork" />
      <Image src={rakuten} alt="upwork" />
      <Image src={nyt} alt="upwork" />
      <Image src={vice} alt="upwork" />
      <Image src={dell} alt="upwork" />
    </section>
  );
}
