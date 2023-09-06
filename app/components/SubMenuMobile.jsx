"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "../../public/Menu.svg";
import CloseLogo from "../../public/Close.svg";
import FiberIcon from "../../public/Fiber_Icon.svg";
import GradieIcon from "../../public/Gradie_Icon.svg";
import SpenseIcon from "../../public/Spense_Icon.svg";

export default function SubMenuMobile() {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="xl:hidden">
        <Image
          src={menuOpen ? Menu : CloseLogo}
          className="-z-10"
          onClick={handleMenu}
          alt="Menu Icon"
        />
        {/* Submenu */}
        <div
          className={`absolute bg-white right-0 top-[5px] p-8 -z-10 rounded-xl transition-all text-[#6c6c6c] ${
            menuOpen ? "hidden" : ""
          }`}
        >
          <h3 className="pb-8 font-bold text-lg">Products</h3>
          <div className="flex flex-col px-4 gap-6">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 font-bold">
                <Image src={SpenseIcon} alt="Spense's Icon" />
                <h4 className="text-black">Spense</h4>
              </div>
              <p>
                Spense is a landing page for writers. Great for practicing
                absolute positioning and flex layouts.
              </p>
            </div>
            <div>
              <div className="flex gap-2 font-bold">
                <Image src={FiberIcon} alt="Fiber's Icon" />
                <h4 className="text-black">Fiber Landing Page</h4>
              </div>
              <p>
                An online portfolio generator. Great to practice flex/grid
                layouts, and absolute positioning.
              </p>
            </div>
            <div>
              <div className="flex gap-2 font-bold">
                <Image src={GradieIcon} alt="Gradie's Icon" />
                <h4 className="text-black">Gradie Sign Up Page</h4>
              </div>
              <p>
                Gradie is a simple sign up page, great to practice centering
                layouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
