"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logowithname from "../assets/logowithname.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/faq", label: "FAQs" }
  ];

  return (
    <nav className="w-full text-mainText bg-white lg:bg-transparent py-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center pl-24 gap-x-16">
        <div className="mx-16">
          <Image src={logowithname} width={80} height={80} alt="Logo" />
        </div>
        <div className="flex gap-x-10">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md font-medium transition-all duration-300
                ${pathname === href ? "font-black" : ""}
                hover:bg-gray-100 active:scale-95`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Tablet and Mobile Navigation */}
      <div className="lg:hidden ">
        <div className="flex items-center justify-between w-screen px-6">
          <Image src={logowithname} width={60} height={60} className="mx-auto" alt="Logo" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[96px] left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 border-b-2 px-4 rounded-md font-medium transition-all duration-300
                  ${pathname === href ? "font-black" : ""}
                  hover:bg-gray-100 active:scale-95`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;