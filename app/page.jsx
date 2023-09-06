import Image from "next/image";
import HeroImage from "../public/Hero Image.png";
import AlternativeToLogo from "../public/AlternativeTo Logo.svg";
import CapterraLogo from "../public/Capterra Logo.svg";
import NetflixLogo from "../public/Netflix Logo.svg";
import ShopifyLogo from "../public/Shopify Logo.svg";
import SpotifyLogo from "../public/Spotify Logo.svg";
import WalmartLogo from "../public/Walmart Logo.svg";
import SubMenuMobile from "./components/SubMenuMobile";
import SubMenuDesktop from "./components/SubMenuDesktop";

export default function Ondeck() {
  return (
    <>
      {/* Header */}
      <header className="p-8 my-6 flex justify-between xl:block">
        {/* Desktop */}
        <SubMenuDesktop />
        {/* Mobile */}
        <SubMenuMobile />
      </header>

      {/* Main */}
      <main>
        <div className="p-8 flex flex-col justify-center items-center xl:grid 2xl:grid-cols-[65%_35%] gap-6 my-16 ">
          {/* Container Text */}
          <div className="flex flex-col gap-4 xl:mr-12 justify-center">
            <div className="flex flex-col gap-2 -z-20">
              <h1 className="font-bold text-5xl md:text-7xl">
                Ondeck is your remote{" "}
                <span className="text-[#f7b401]">
                  conference tool calling tool
                </span>
              </h1>
              <p className="text-[#6c6c6c] text-lg">
                Ondeck is a service that allows you to create beautiful, online,
                and encrypted video calls for you and your remote team
              </p>
            </div>
            <div>
              <button className="py-5 px-8 text-xl text-white bg-[#133416] font-bold rounded-md">
                Try for free
              </button>
            </div>

            <div className="flex gap-2 my-8 text-[#6c6c6c] text-lg">
              <p>5.0 Rating based on reviews from:</p>
              <Image
                src={CapterraLogo}
                alt="Reviewer Capterra"
                className="w-auto h-auto"
              />
              <Image
                src={AlternativeToLogo}
                alt="Reviewer AlternativeTo"
                className="w-auto h-auto"
              />
            </div>
          </div>
          {/* Hero Image */}
          <div className="hidden 2xl:flex">
            <Image
              src={HeroImage}
              alt="Image of Ondeck's Hero"
              className="object-cover"
            />
          </div>
        </div>
        {/* Trusted Companies */}
        <div className="flex flex-col justify-center items-center gap-5 my-8 px-8">
          <p className="text-[#6c6c6c] text-center">
            Trusted by 3+ million people at companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 ">
            <Image src={NetflixLogo} alt="Netlify Logo in Ondeck" />
            <Image src={ShopifyLogo} alt="Shopify Logo in Ondeck" />
            <Image src={SpotifyLogo} alt="Spotify Logo in Ondeck" />
            <Image src={WalmartLogo} alt="Walmart Logo in Ondeck" />
          </div>
        </div>
      </main>
    </>
  );
  Ondeck.displayName = "Ondeck Home";
}
