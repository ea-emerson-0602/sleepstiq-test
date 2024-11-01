"use client";
import React, { useState, useEffect } from "react";
import vape from "../assets/vapepenshop.png";
import Image from "next/image";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import Button from "../components/button";
import ReviewSection from "../components/reviewsection";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
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
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div
        className="min-h-screen w-full bg-cover bg-center overflow-hidden p-40 px-32 transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[activeSlide]})` }}
        aria-label="Slider"
      >
        <div className="space-y-6 text-xl">
          <p>We&apos;re here for you</p>
          <p className="font-bold text-6xl">Relax & Rest</p>
        </div>
      </div>
      <div className="flex justify-between mx-32 py-24 border-b-[1px]">
        <div>
          <Image
            src={vape.src}
            alt="product image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="ml-48 mr-24 text-sm">
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
            <div class="py-2 px-4 gap-x-4 flex items-center border-[1px] border-mainText w-fit rounded-md">
              {count}{" "}
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
      <div className="ml-32 py-10">
        <ReviewSection />
      </div>
    </div>
  );
}
