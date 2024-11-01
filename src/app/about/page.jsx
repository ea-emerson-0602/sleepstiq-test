import React from "react";
import Button from "../components/button";
import Link from "next/link";
export default function About() {
  return (
    <div className="w-full mx-auto py-24 lg:py-40 px-8 lg:px-32 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Our Story</h1>
      <p className="text-lg text-gray-600">
        At SleepStiq, we are dedicated to helping you find peace, relaxation,
        and rejuvenation in your everyday life. Here is how it all started.
      </p>

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-gray-700">Our Mission</h2>
        <p className="text-gray-600">
          We believe that true well-being starts with quality rest and
          relaxation. Our mission is to bring you products that promote a
          balanced lifestyle, allowing you to unwind and recharge effortlessly.
          Each product is crafted with care, keeping your comfort and health as
          our top priority.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-gray-700">Our Values</h2>
        <ul className="list-disc list-inside space-y-3 text-justify text-gray-600">
          <li>
            <strong>Quality:</strong> Every product we offer is held to the
            highest standards, ensuring you get nothing but the best.
          </li>
          <li>
            <strong>Transparency:</strong> We are open about our ingredients,
            sources, and processes, so you can feel confident in your choices.
          </li>
          <li>
            <strong>Care:</strong> Your well-being is our top concern, which is
            why we are constantly innovating to meet your needs.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-gray-700">Our Journey</h2>
        <p className="text-gray-600">
          Since our inception, we have been on a journey to create products that
          genuinely make a difference in people&apos;s lives. What began as a
          simple idea has now blossomed into a collection of wellness solutions
          trusted by thousands. We are constantly growing and improving, thanks
          to the support and feedback from our valued community.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700">
          Join Us on This Journey
        </h3>
        <p className="text-gray-600">
          Discover what sets us apart and become part of our community. Let us
          work together to make well-being a part of everyone&apos;s life.
        </p>
        <Link href="/shop">
          <Button>Visit Our Shop</Button>
        </Link>
      </div>
    </div>
  );
}
