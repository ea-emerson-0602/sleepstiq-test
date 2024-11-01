"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logowithname from "../assets/logowithname.png";

const Navbar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/faq", label: "FAQs" }
  ];

  return (
    <nav className="w-full text-mainText py-6 pl-24">
      <div className="flex items-center gap-x-16">
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
    </nav>
  );
};

export default Navbar;