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

export default function Home() {
  return (
    <main className="">
      <section>
        <div
          className="min-h-screen w-full bg-cover bg-center overflow-hidden px-32"
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

          {/* Logo positioned at the bottom, halfway out of the div */}
          <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2">
            <Image
              src={compLogo}
              alt="Company Logo"
              width={0} // Width and height attributes set to 0 to avoid hardcoding size
              height={0}
              sizes="100vw" // Sets image width to 100% of the viewport width
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
      <section id="happy" className="flex p-32 gap-x-8 ">
        <div className="flex flex-col gap-y-6 py-6 mr-24 text-sm">
          <p className="">Our Amazing Story</p>
          <p className="font-bold text-3xl mb-6">10k+ Happy Customers</p>
          <p className="">
            There's no secret source. No wizard behind the curtain. What makes
            aerolab tick is an is an interdisciplinary team with a framework
            that fosters candid collaboration.
          </p>
          <Link href="/about">
            <p className="font-bold underline"> More know About us</p>
          </Link>
        </div>
        <div
          className="flex flex-col gap-y-28 bg-card  w-[40vw] p-6"
          style={{
            boxShadow:
              "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 40px 80px rgba(0, 0, 0, 0.15)",
          }}
        >
          <p className="italic text-xl">
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
                <p className="font-bold text-lg">James Miller</p>
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
      <section id="shopnow" className="flex p-32 gap-x-24 ">
        <div
          className="min-h-[70vh] w-full bg-cover bg-center px-32"
          style={{ backgroundImage: `url(${vape.src})` }}
          aria-label="Profile Picture"
        ></div>
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
      <section id="products" className=" px-24">
        <div className="border-t-2 mb-12"></div>
        <p className="font-bold text-3xl">Product Reviews</p>
        <ProductSection />
      </section>
    </main>
  );
}
