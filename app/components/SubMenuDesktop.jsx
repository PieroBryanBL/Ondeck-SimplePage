"use client";

import { useState } from "react";

import Image from "next/image";
import LogoOndeck from "../../public/Logo.svg";
import FiberIcon from "../../public/Fiber_Icon.svg";
import GradieIcon from "../../public/Gradie_Icon.svg";
import SpenseIcon from "../../public/Spense_Icon.svg";

export default function SubMenuDesktop() {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const handleMouseEnter = () => {
    setActiveMenu(true);
  };
  const handleMouseLeave = () => {
    setActiveMenu(false);
  };
  const handleSubMenuMouseEnter = () => {
    setActiveMenu(true);
  };
  return (
    <>
      {/* Submenu Desktop */}
      <div className="flex justify-between">
        <Image src={LogoOndeck} className="-z-10" alt="Ondeck Logo" />

        {/* Navegación */}
        <div className="hidden xl:flex">
          <nav className="flex justify-center items-center ">
            <ul className="text-[#6c6c6c] flex gap-3 text-lg">
              <li
                className="relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Products
                {/* Inicio de Submenu */}
                <div
                  className={`absolute bg-white top-[28px] -left-36 w-96 p-8 rounded-xl text-[#6c6c6c] z-50 ${
                    isActiveMenu ? "" : "hidden"
                  }`}
                  onMouseEnter={handleSubMenuMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col px-4 gap-6">
                    <div className="flex gap-2 flex-col">
                      <div className="flex gap-2 font-bold">
                        <Image src={SpenseIcon} alt="Spense's Icon" />
                        <h4 className="text-black">Spense</h4>
                      </div>
                      <p>
                        Spense is a landing page for writers. Great for
                        practicing absolute positioning and flex layouts.
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-2 font-bold">
                        <Image src={FiberIcon} alt="Fiber's Icon" />
                        <h4 className="text-black">Fiber Landing Page</h4>
                      </div>
                      <p>
                        An online portfolio generator. Great to practice
                        flex/grid layouts, and absolute positioning.
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-2 font-bold">
                        <Image src={GradieIcon} alt="Gradie's Icon" />
                        <h4 className="text-black">Gradie Sign Up Page</h4>
                      </div>
                      <p>
                        Gradie is a simple sign up page, great to practice
                        centering layouts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Fin de Submenu */}
              </li>
              <li className="cursor-pointer">Challengues</li>
              <li className="cursor-pointer">Resources</li>
              <li className="cursor-pointer">Other Links</li>
            </ul>
          </nav>
        </div>

        {/* Para ingresar */}
        <div className="hidden xl:flex gap-3 text-[#6c6c6c]">
          <button className="py-5 px-8 text-lg">Sign Up</button>
          <button className="py-5 px-8 text-xl text-white bg-[#133416] font-bold rounded-md">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
}
