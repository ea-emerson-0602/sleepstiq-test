"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";
// import { ChevronDown, ChevronRight } from 'lucide-react';

const faqData = {
  "Sleepstiq Product": {
    id: 1,
    questions: [
      {
        id: "q1",
        question: "Q1: How does it work?",
        answer:
          "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
      },
      {
        id: "q2",
        question: "Q2: Why inhale melatonin?",
        answer:
          "Inhaling melatonin provides faster absorption compared to traditional oral supplements. This method allows the melatonin to enter your bloodstream more quickly, helping you fall asleep faster.",
      },
      {
        id: "q3",
        question: "Q3: How much melatonin is there per inhale?",
        answer:
          "Each inhale delivers a precisely measured 0.5mg dose of melatonin, which is clinically proven to be effective while minimizing the risk of grogginess the next morning.",
      },
      {
        id: "q4",
        question: "Q4: Is it an e-cigarette or tobacco product?",
        answer:
          "No, Sleepstiq is not an e-cigarette or tobacco product. It's a wellness device specifically designed for melatonin delivery, containing no nicotine, tobacco, or harmful substances.",
      },
      {
        id: "q5",
        question: "Q5: What's in it?",
        answer:
          "Sleepstiq contains pharmaceutical-grade melatonin, natural lavender extract, and a proprietary blend of calming herbs. All ingredients are FDA-approved and thoroughly tested for safety.",
      },
      {
        id: "q6",
        question: "Q6: What's not in it?",
        answer:
          "Sleepstiq is free from nicotine, tobacco, diacetyl, artificial colors, and harmful chemicals. We never use propylene glycol or vitamin E acetate.",
      },
      {
        id: "q7",
        question: "Q7: How long does it last?",
        answer:
          "Each Sleepstiq device is designed to last for 30 nights of use when used as directed (1-2 inhales per night).",
      },
      {
        id: "q8",
        question: "Q8: How do I know it has run out/died?",
        answer:
          "The LED indicator will blink red 10 times when the device is near empty, and will stop producing vapor when completely empty. You can also track usage through our mobile app.",
      },
    ],
  },
  Order: {
    id: 2,
    questions: [
      {
        id: "o1",
        question: "Q1: How do I place an order?",
        answer:
          "You can place an order directly through our website by selecting your desired product and quantity. We accept all major credit cards and PayPal.",
      },
      {
        id: "o2",
        question: "Q2: What payment methods do you accept?",
        answer:
          "We accept Visa, Mastercard, American Express, Discover, and PayPal. All transactions are secured using industry-standard encryption.",
      },
      {
        id: "o3",
        question: "Q3: Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping times and rates vary by location.",
      },
      {
        id: "o4",
        question: "Q4: How long does shipping take?",
        answer:
          "Domestic orders typically arrive within 3-5 business days. International orders may take 7-14 business days depending on the destination.",
      },
    ],
  },
  Melatonin: {
    id: 3,
    questions: [
      {
        id: "m1",
        question: "Q1: What is melatonin?",
        answer:
          "Melatonin is a natural hormone produced by your body that regulates sleep-wake cycles. It helps control your natural sleep patterns and circadian rhythms.",
      },
      {
        id: "m2",
        question: "Q2: Is melatonin safe?",
        answer:
          "Yes, melatonin is generally considered safe for short-term use. It's one of the most studied sleep aids and has been used safely for decades.",
      },
      {
        id: "m3",
        question: "Q3: Are there any side effects?",
        answer:
          "Most people experience no side effects. Some may experience mild drowsiness, headache, or dizziness. We recommend not driving or operating machinery after use.",
      },
      {
        id: "m4",
        question: "Q4: Can I use this with other medications?",
        answer:
          "While melatonin is generally safe, we recommend consulting with your healthcare provider before using if you're taking other medications.",
      },
    ],
  },
};

export default function FAQ() {
  const [activeTopic, setActiveTopic] = useState("Sleepstiq Product");
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };
  return (
    <div className="flex flex-col">
      <div className=" bg-card hidden lg:block w-full py-40 px-32">
        <div className="space-y-6 text-xl">
          <p>We&apos;re here to help you</p>
          <p className="font-bold text-6xl">How can we assist?</p>
          <div className="flex items-center bg-white px-12 space-x-6 py-3 w-3/4 rounded-md">
            <FaSearch className="text-black w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs here"
              className="ml-2 text-sm bg-white w-full text-mainText focus:outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className=" bg-card px-6 lg:hidden block pb-16 pt-32 w-full ">
        <div className="space-y-6 text-center text-xl">
          {/* <p>We&apos;re here to help you</p> */}
          <p className="font-bold text-5xl">How can we assist?</p>
          <div className="flex items-center bg-white px-6 mx-auto space-x-4 py-3 w-5/6 rounded-md">
            <FaSearch className="text-black w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs here"
              className="ml-2 text-sm bg-white w-full text-mainText focus:outline-none border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 p-12 w-full mx-auto">
        {/* Topics Sidebar */}
        <ul className="hidden lg:block">
          {Object.keys(faqData).map((topic, index) => (
            <li
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`cursor-pointer mb-4 transition-colors hover:font-semibold ${
                activeTopic === topic ? "font-bold" : "font-normal"
              }`}
            >
              {index === 0
                ? topic.split(" ").map((word, wordIndex) =>
                    word === "Product" ? (
                      <span key={wordIndex} className="bg-test py-2 pl-0 pr-10">
                        {word}
                      </span>
                    ) : (
                      <span key={wordIndex}>{word} </span>
                    )
                  )
                : topic}
            </li>
          ))}
        </ul>
        <ul className="flex justify-between lg:hidden">
          {Object.keys(faqData).map((topic, index) => (
            <li
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`cursor-pointer mb-4 text-sm transition-colors hover:font-semibold ${
                activeTopic === topic ? "font-bold" : "font-normal"
              }`}
            >
              {topic}
            </li>
          ))}
        </ul>

        {/* Questions Section */}
        <div className="flex-1">
          <div className="border-y-[1px]">
            {faqData[activeTopic].questions.map(
              ({ id, question, answer }, index) => (
                <div key={id} className={index !== 0 ? "border-t-[1px]" : ""}>
                  <div
                    onClick={() => toggleQuestion(id)}
                    className={`flex items-center justify-between cursor-pointer py-4 hover:font-semibold ${
                      expandedQuestions.has(id) ? "font-semibold" : ""
                    }`}
                  >
                    <span>{question}</span>
                  </div>
                  {expandedQuestions.has(id) && (
                    <div className="pb-3 text-black">{answer}</div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
