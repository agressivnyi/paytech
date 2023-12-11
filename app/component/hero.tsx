import CreditCard from "./credit-card";
import Button from "./ui/button";

export default function Hero() {
  return (
    <header className="grid grid-cols-1 gap-y-24 md:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">
          Discover the Perfect Credit Card for You
        </h1>
        <p className="text-base text-[#ADB2B1] md:max-w-[90%]">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
        <Button
          className="w-fit"
          trailingIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
            >
              <path
                d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75"
                stroke="#EFF8F0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Get Started
        </Button>
      </div>
      <div className="relative h-fill flex justify-end">
        <CreditCard className="absolute min-w-[280px] left-0 md:min-w-56 lg:w-[550px] bg-gradient-gray rotate-6 backdrop-blur-2xl z-10" />
        <div className="relative h-72 w-72 bg-skin bottom-0 -right-[40%] lg:w-[492px] lg:h-[492px] md:-right-[33%] rounded-full z-0" />
      </div>
    </header>
  );
}
