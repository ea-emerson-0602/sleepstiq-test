import React from "react";
import ReviewCard from "./reviews"; 

const reviews = [
  {
    text: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    name: "John Matthews",
    rating: 5,
  },
  {
    text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Eunice Oliver",
    rating: 5,
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Laura Davies",
    rating: 5,
  },
  {
    text: "Helps me relax and remember to breathe. Stress level definitely goes down",
    name: "Jane Bocks",
    rating: 5,
  },
  {
    text: "This product really works for me.",
    name: "Alex Johnson",
    rating: 5,
  },
];

function ReviewSection() {
  return (
    <div className="overflow-x-auto hide-scrollbar p-6">
      <div className="flex gap-8 ">
        {reviews.map((review, index) => (
          <div key={index} className="w-fit h-fit">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
