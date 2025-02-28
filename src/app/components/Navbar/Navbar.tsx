'use client'
import { LogoIcon, MenuIcon } from "../Icons"
import { NavbarData } from "../Content"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
interface INavbarProps {
    onPresentMobileMenu: () => void
    onDismissMobileMenu: () => void
    visible: boolean
}

const Navbar = ({ onPresentMobileMenu, onDismissMobileMenu, visible }: INavbarProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // Add effect when scrolled beyond 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="fixed mt-6 w-full z-[9999]">
        <div className="container">
          <div
            className={cn(
              "flex items-center justify-between w-full transition-all duration-500 rounded-[80px]",
              scrolled
                ? "bg-[#ffffff3d] md:px-4 md:py-3 px-3 py-2 backdrop-blur-[20px] "
                : ""
            )}
          >
            <LogoIcon />
            <div className=" gap-x-2 items-center hidden md:flex">
              {NavbarData.map((item, index) => (
                <a
                  href={item.id}
                  key={`${index}${item.id}`}
                  target={
                    index + 1 === NavbarData.length ? "_blank" : undefined
                  }
                  className="w-[90px] text-center no-underline text-white text-16"
                >
                  {item?.name}
                </a>
              ))}
            </div>
            <button className="py-[14px] px-11 bg-[#ffffff3d]  border-[1px] border-[#FFFFFF3D] text-white text-16 font-bold text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D] hidden md:block ">
              Dextools
            </button>
            <div
              className="flex items-center justify-center md:hidden"
              onClick={() =>
                visible ? onDismissMobileMenu() : onPresentMobileMenu()
              }
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar