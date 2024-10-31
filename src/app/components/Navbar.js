import Link from "next/link";

import Image from "next/image";
import logowithname from "../assets/logowithname.png";

const Navbar = () => {
  return (
    <nav className="bg-white w-full text-mainText py-6 pl-24">
          <div className="flex items-center gap-x-16">
            <div className="mx-16">
              <Image
                src={logowithname}
                width={80}
                height={80}
                alt="Logo"
              />
            </div>
            <div className="flex">
            <Link href="/" className=" px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className=" px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/shop" className=" px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
                <Link href="/faq" className=" px-3 py-2 rounded-md text-sm font-medium">FAQs</Link>
              
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
