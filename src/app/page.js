import Image from "next/image";
import homebg from "./assets/homebg.png";
import jamesmiller from "./assets/jamesmiller.png";
import compLogo from "./assets/google&cologo.png";
import vape from "./assets/vapepen.png";
import mission from "./assets/mission.png";
import Link from "next/link";
import Button from "./components/button";
import ReviewSection from "./components/reviewsection";
import ProductSection from "./components/productsection";
import { FaCaretRight } from "react-icons/fa";
import Navbar from "./components/Navbar";
import googleLogo from "./assets/googlelogo.png";
import forbesLogo from "./assets/forbeslogo.png";
import bloombergLogo from "./assets/bloomberglogo.png";
import sleepReviewLogo from "./assets/sleepreviewlogo.png";
import influenciveLogo from "./assets/influencivelogo.png";

export default function Home() {
  return (
    <main className="">
      <section className="mb-20 relative">
        <nav className="absolute">
          <Navbar />
        </nav>
        <div
          className="min-h-screen w-full bg-cover bg-center overflow-hidden p-32"
          style={{ backgroundImage: `url(${homebg.src})` }}
          aria-label="Profile Picture"
        >
          <div className="flex flex-col gap-y-8 text-xl w-[40vw]">
            <p className="">We're here to help you</p>
            <p className="font-bold text-7xl">Relax & Rest</p>
            <p className="">
              With the aid of our Melatonin SleepStiq, we can assure you that
              you can get quality sleep.
            </p>
            <Link href="/shop">
              <Button>Visit Shop</Button>
            </Link>
          </div>

          <div className="absolute bottom-0 z-50 left-0 w-[90.5%] shadow-[20px_60px_50px_rgba(0,0,0,0.13)] ml-32 bg-white flex items-center space-x-8 transform translate-y-1/2  pl-16 py-6 ">
            <Image
              src={googleLogo}
              alt="Google Logo"
              width={150}
              height={0}
              className="object-contain"
            />
            <Image
              src={forbesLogo}
              alt="Forbes Logo"
              width={150}
              height={10}
              className="object-contain"
            />
            <Image
              src={bloombergLogo}
              alt="Bloomberg Logo"
              width={220}
              height={0}
              className="object-contain "
            />
            <Image
              src={sleepReviewLogo}
              alt="Sleep Review Logo"
              width={220}
              height={0}
              className="object-contain"
            />
            <Image
              src={influenciveLogo}
              alt="Influencive Logo"
              width={220}
              height={0}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section id="happy" className="flex p-32 gap-x-8 ">
        <div className="flex flex-col gap-y-6 py-6 mr-24 text-sm">
          <p className="">Our Amazing Story</p>
          <p className="font-bold text-3xl mb-6">
            10k+ Happ<span className="bg-test pt-0 pr-2 pb-4">y Customers</span>
          </p>
          <p className="">
            There's no secret source. No wizard behind the curtain. What makes
            aerolab tick is an is an interdisciplinary team with a framework
            that fosters candid collaboration.
          </p>
          <Link href="/about">
            <p className="font-bold flex items-center">
              <FaCaretRight />{" "}
              <span className="underline">More know About us</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-28 bg-card  w-[40vw] p-6 shadow-[0px_60px_40px_7px_rgba(0,0,0,0.1)]">
          <p className="italic text-xl text-[#4D533C]">
            I'm a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-8">
              <Image
                src={jamesmiller}
                alt="Techbias CEO profile picture"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="">
                <p className="font-bold text-lg text-[#4D533C]">James Miller</p>
                <p className="text-sm">CEO, techbias</p>
              </div>
            </div>
            <div className="flex mx-auto gap-x-2">
              <div className="h-2 w-2 rounded-full bg-[#C4C4C4]"></div>
              <div className="h-2 w-2 rounded-full bg-[#C4C4C4]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <ReviewSection />
      </section>
      <section
        id="shopnow"
        className="flex m-32 mt-8  pt-12 border-t-2 gap-x-24 "
      >
        <div
          className="min-h-[75vh] relative w-full bg-cover bg-center px-32"
          style={{ backgroundImage: `url(${vape.src})` }}
          aria-label="Profile Picture"
        >
          <ul class="grid gap-1 text-italic absolute bottom-0 -right-8 my-4 shadow-[30px_30px_40px_rgba(0,0,0,0.12)] bg-white text-sm rounded-lg p-6 pr-20">
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
        </div>
        <div className="flex flex-col text-justify my-auto gap-y-8">
          <p className="font-bold text-3xl mb-3">Shop Now</p>
          <p className="text-sm ">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Link href="/shop">
            <Button>Visit Shop</Button>
          </Link>
        </div>
      </section>
      <section className="flex  pl-32 gap-x-32 " id="mission">
        <div className="flex flex-col my-auto gap-y-8 w-4/5">
          <p className="font-bold text-3xl">Our Mission</p>
          <p className="text-sm text-justify">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
          <ul className="list-none text-sm gap-y-4">
            <li className="">✓ Promote Calm</li>
            <li className="">✓ Support Sleep</li>
            <li className="">✓ Reduce Stress</li>
            <li className="">✓ Aid Relaxation</li>
          </ul>
        </div>
        <div
          className="min-h-[70vh] w-full bg-cover bg-center px-32"
          style={{ backgroundImage: `url(${mission.src})` }}
          aria-label="Profile Picture"
        ></div>
      </section>
      <section className="flex text-sm gap-y-8 flex-col p-24 items-center  justify-center text-center">
        <p className="font-bold text-3xl">Visit Our Shop</p>
        <p className="w-3/5">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Link href="/shop">
          <Button>Visit Shop</Button>
        </Link>
      </section>
      <section id="products" className="text-[#4D533C] mb-24">
        <div className="border-t-2 mb-12 mx-32 "></div>
        <p className="font-bold text-3xl px-32">Product Reviews</p>
        <ProductSection />
      </section>
    </main>
  );
}
