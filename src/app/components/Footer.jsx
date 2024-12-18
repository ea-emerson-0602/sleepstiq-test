"use client";
import React, { useState } from "react";
import logo from "../assets/footerlogo.png";
import Image from "next/image";
import footerbg from "../assets/footerbg.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <footer
        style={{ backgroundImage: `url(${footerbg.src})` }}
        className="bg-mainText hidden lg:block text-sm text-white py-12  bg-cover bg-center bg-blend-multiply px-12"
      >
        <div className="mx-auto mb-8">
          <Image
            className="mx-auto"
            src={logo.src}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-8 h-[30vh]">
          <div class="col-span-1">
            <h3 class="font-bold mb-4">COMPANY</h3>
            <ul class="space-y-2 text-greyText">
              <li>
                <Link href="/" class="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-span-2">
            <h3 class="font-bold mb-4">CONTACT</h3>
            <div class="space-y-2">
              <p className="text-greyText">Phone:</p>
              <p>+234 708 507 3128</p>
              <p className="text-greyText">Address</p>
              <p>16, Ogindipe Close, Upston Close</p>
            </div>
          </div>

          <div class="col-span-3 mr-8">
            <h3 class="font-bold mb-4">CONSUMER ADVISORY</h3>
            <p>
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>
            <p class="mt-4">
              By using our website or product, you agree to follow our
              <br />
              <Link href="/" className="text-secondaryBlue">
                terms of service.
              </Link>
            </p>
          </div>

          <div className="relative col-span-2 h-full flex flex-col justify-between px-12">
            {/* Pseudo-element for a shorter left border */}
            <div
              className="absolute left-0 top-0 h-3/4 border-l-[1px] border-[#5D6544]"
              style={{ height: "75%" }}
            ></div>

            <div className="">
              <h3 className="font-bold mb-4">GET IN TOUCH</h3>
              <p className="mb-4 text-greyText">
                Feel free to get in touch with us via email.
              </p>
              <Link
                href="mailto:hello@sleepstig.com"
                className="font-bold text-2xl"
              >
                hello@sleepstig.com
              </Link>
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex space-x-4 mt-4 text-mainText">
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaGooglePlusG />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaLinkedinIn className="bg-none" />
                </Link>
              </div>
              <p className="text-greyText text-xs justify-end align-bottom">
                &copy; 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </footer>
      <footer
        className="block lg:hidden h-fit bg-mainText  text-sm text-white py-12  bg-cover bg-center bg-blend-multiply px-12"
        style={{ backgroundImage: `url(${footerbg.src})` }}
      >
        <div className="mx-auto mb-8">
          <Image
            className="mx-auto"
            src={logo.src}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div class="container mx-auto grid grid-cols-2  h-fit">
          <div class="col-span-1">
            <h3 class="font-bold mb-4">COMPANY</h3>
            <ul class="space-y-2 text-greyText">
              <li>
                <Link href="/" class="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" class="hover:text-blue-400">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-span-1">
            <h3 class="font-bold mb-4">CONTACT</h3>
            <div class="space-y-2">
              <p className="text-greyText">Phone:</p>
              <p>+234 708 507 3128</p>
              <p className="text-greyText">Address</p>
              <p>16, Ogindipe Close, Upston Close</p>
            </div>
          </div>

          <div className="col-span-2 mt-6">
            <h3
              className="font-bold mb-4 flex items-center cursor-pointer"
              onClick={toggleParagraph}
            >
              CONSUMER ADVISORY
              <span className="ml-4">
                {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
              </span>
            </h3>

            {/* Conditionally rendered paragraph */}
            {isExpanded && (
              <p className="text-justify">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
            )}

            <p className="mt-4">
              By using our website or product, you agree to follow our
              <br />
              <Link href="/" className="text-secondaryBlue">
                terms of service.
              </Link>
            </p>
          </div>

          <div className="col-span-2 h-full flex flex-col space-y-2 justify-between py-8">
            <h3 className="font-bold">GET IN TOUCH</h3>
            <p className="text-greyText">
              Feel free to get in touch with us via email.
            </p>
            <Link
              href="mailto:hello@sleepstig.com"
              className="font-bold text-2xl"
            >
              hello@sleepstig.com
            </Link>

            <div className="flex flex-col gap-y-8">
              <div className="flex space-x-4 mt-4 text-mainText">
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaGooglePlusG />
                </Link>
                <Link
                  href="/"
                  className="rounded-full p-2 bg-secondaryBlue hover:text-blue-500"
                >
                  <FaLinkedinIn className="bg-none" />
                </Link>
                /{" "}
              </div>
              <p className="text-greyText text-xs justify-end align-bottom">
                &copy; 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
