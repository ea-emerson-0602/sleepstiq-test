"use client";
import React, { useState, useEffect } from "react";
import vape from "../assets/vapepenshop.png";
import Image from "next/image";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import Button from "../components/button";
import ReviewSection from "../components/reviewsection";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/homebg.png";
export default function Shop() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [slider1.src, slider2.src];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const [count, setCount] = useState(2);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <div
        className="lg:h-screen h-[70vh] w-full bg-cover bg-center overflow-hidden lg:p-40 lg:px-32 transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[activeSlide]})` }}
        aria-label="Slider"
      >
        <div className="space-y-6 hidden lg:block text-xl">
          <p>We&apos;re here for you</p>
          <p className="font-bold text-6xl">Relax & Rest</p>
        </div>
        <div className="flex items-center justify-center h-[80vh] lg:hidden">
          <div className="flex flex-col  my-auto text-center">
            <p className="my-auto text-xl font-semibold">We&apos;re here to help you</p>
            <p className="font-bold text-5xl">Relax & Rest</p>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mx-8 pt-4 lg:pt-0 lg:mx-32 md:py-16 lg:py-24 border-b-[1px]">
        <div className="hidden lg:block">
          <Image
            src={vape.src}
            alt="product image"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="block lg:hidden rounded-xl h-[35vh] w-full bg-cover bg-center my-6"
          style={{ backgroundImage: `url(${vape.src})` }}
          aria-label="Profile Picture"
        ></div>
        <div className="lg:ml-48 lg:mr-24 text-sm">
          <p className="header">About Product</p>
          <p className="text-greyText">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <ul class="grid gap-1 text-italic my-4">
            <li class="grid grid-cols-[24px_1fr] items-center">
              <span>😊</span>
              <span className="italic">Promotes calm and relaxation.</span>
            </li>
            <li class="grid grid-cols-[24px_1fr] items-center">
              <span>💤</span>
              <span className="italic">
                Inhalation allows for a rapid effect.
              </span>
            </li>
            <li class="grid grid-cols-[24px_1fr] items-center">
              <span>✅</span>
              <span className="italic">
                100% drug-free, plant-based ingredients.
              </span>
            </li>
            <li class="grid grid-cols-[24px_1fr] items-center">
              <span></span>
              <span className="italic">3rd-party lab tested.</span>
            </li>
          </ul>
          <div class="grid grid-cols-2 w-fit h-fit text-black  grid-rows-2 gap-x-4">
            <div class="self-center">Price</div>
            <div class="self-center">Unit</div>
            <div class="font-bold self-center">USD 50</div>
            <div className="py-2 px-4 gap-x-4 flex items-center border-[1px] border-mainText w-fit rounded-md">
              <span className="lg:flex hidden">{count}{" "}</span>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-12 text-center border-none outline-none appearance-none flex lg:hidden"
              />
              <div className="text-mainText flex flex-col -space-y-2">
                <FaSortUp onClick={increment} className="cursor-pointer" />
                <FaSortDown onClick={decrement} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-fit my-8">
            <Button>Buy</Button>
          </div>
        </div>
      </div>
      <div className="lg:ml-32 lg:py-10">
        <ReviewSection />
      </div>
    </div>
  );
}
