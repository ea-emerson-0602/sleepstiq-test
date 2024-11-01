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
      <section className="lg:mb-20 md:mb-12  relative">
        <nav className="absolute">
          <Navbar />
        </nav>
        <div
          className="h-[70vh] lg:h-screen w-screen border-4 lg:w-full bg-cover bg-center overflow-hidden py-8 px-4  lg:px-6 lg:p-32"
          style={{ backgroundImage: `url(${homebg.src})` }}
          aria-label="Profile Picture"
        >
          <div className="lg:flex hidden lg:flex-col  gap-y-5 lg:gap-y-8 text-xl w-full lg:w-[40vw]">
            <p className="my-auto">We&apos;re here to help you</p>
            <p className="font-bold text-5xl lg:text-7xl">Relax & Rest</p>
            <p className="">
              With the aid of our Melatonin SleepStiq, we can assure you that
              you can get quality sleep.
            </p>
            <Link href="/shop">
              <Button>Visit Shop</Button>
            </Link>
          </div>
          <div className="flex items-center justify-center h-[70vh] lg:hidden">
            <div className="flex flex-col gap-y-4 my-auto text-center">
              <p className="my-auto font-semibold text-lg">
                We&apos;re here to help you
              </p>
              <p className="font-bold text-5xl lg:text-7xl">Relax & Rest</p>
              <p className="font-semibold text-lg">
                With the aid of our Melatonin SleepStiq, we can assure you that
                you can get quality sleep.
              </p>
              <Link href="/shop">
                <Button>Visit Shop</Button>
              </Link>
            </div>
          </div>

          <div className="absolute hidden lg:flex bottom-0 z-50 left-0 w-[90.5%] shadow-[20px_60px_50px_rgba(0,0,0,0.13)] ml-32 bg-white items-center space-x-8 transform translate-y-1/2  pl-16 py-6 ">
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
      <section
        id="happy"
        className="flex flex-col lg:flex-row md:p-16 p-8 lg:p-32 gap-x-8 "
      >
        <div className="flex flex-col gap-y-3 lg:gap-y-6 py-6 lg:mr-24 text-sm">
          <p className="">Our Amazing Story</p>
          <p className="font-bold text-3xl my-3 lg:mb-6">
            10k+ Happ<span className="bg-test pt-0 pr-2 pb-4">y Customers</span>
          </p>
          <p className="">
            There&apos;s no secret source. No wizard behind the curtain. What
            makes aerolab tick is an is an interdisciplinary team with a
            framework that fosters candid collaboration.
          </p>
          <Link href="/about">
            <p className="font-bold flex items-center">
              <FaCaretRight />{" "}
              <span className="underline">More know About us</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col md:gap-y-20 gap-y-12 lg:gap-y-28 bg-card w-full lg:w-[40vw] p-6 shadow-[0px_60px_40px_7px_rgba(0,0,0,0.1)]">
          <p className="italic lg:text-xl text-[#4D533C]">
            I&apos;m a very anxious person but use this and feel so relaxed and
            sleep way better now with the aid of sleepstiq.
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
        className="lg:flex-row flex flex-col lg:m-32 lg:mt-8 m-6 pt-6 lg:pt-12 border-t-2 gap-x-24 "
      >
        <div
          className="lg:h-[75vh] h-[35vh] lg:relative w-full bg-cover bg-center px-32"
          style={{ backgroundImage: `url(${vape.src})` }}
          aria-label="Profile Picture"
        >
          <ul class="lg:grid gap-1 text-italic hidden lg:absolute bottom-0 lg:-right-8 my-4 shadow-[30px_30px_40px_rgba(0,0,0,0.12)] bg-white text-sm  rounded-lg p-6 lg:pr-20">
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
        <ul class="grid lg:hidden gap-1 text-italic my-4 shadow-[30px_30px_40px_rgba(0,0,0,0.12)] bg-white text-sm rounded-lg p-6 ">
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

        <div className="flex flex-col text-justify lg:my-auto my-6 gap-y-8">
          <p className="font-bold text-3xl mb-3 text-center lg:text-left">
            Shop Now
          </p>
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
      <section
        className="flex flex-col lg:flex-row p-6 lg:p-0 lg:pl-32 gap-x-32 "
        id="mission"
      >
        <div className="flex flex-col my-auto gap-y-5 lg:gap-y-8 lg:w-4/5">
          <p className="font-bold text-3xl text-center lg:text-left">
            Our Mission
          </p>
          <p className="text-sm text-justify">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That is why we created products that aim to -
          </p>
          <ul className="list-none text-sm gap-y-4">
            <li className="">✓ Promote Calm</li>
            <li className="">✓ Support Sleep</li>
            <li className="">✓ Reduce Stress</li>
            <li className="">✓ Aid Relaxation</li>
          </ul>
        </div>
        <div
          className="lg:h-[70vh] h-[35vh] w-full bg-cover bg-center my-6 lg:px-32"
          style={{ backgroundImage: `url(${mission.src})` }}
          aria-label="Profile Picture"
        ></div>
      </section>
      <section className="flex text-sm gap-y-8 flex-col p-6 lg:p-24 mb-8 lg:mb-0 items-center  justify-center text-center">
        <p className="font-bold text-3xl text-center lg:text-left">
          Visit Our Shop
        </p>
        <p className="lg:w-3/5 w-full">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Link href="/shop">
          <Button>Visit Shop</Button>
        </Link>
      </section>
      <section id="products" className="text-[#4D533C] md:mb-16 lg:mb-24">
        <div className="border-t-2 py-4 lg:py-0 md:mb-8 mb-4 lg:mb-12 lg:mx-32 md:mx-12 mx-6 "></div>
        <p className="font-bold text-3xl text-center lg:text-left lg:px-32">
          Product Reviews
        </p>
        <ProductSection />
      </section>
    </main>
  );
}
