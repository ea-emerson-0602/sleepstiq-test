import React from "react";
function ReviewCard({ review }) {
  return (
    <div className="bg-[#f7f4ed] text-[#4D533C] flex flex-col justify-between rounded-lg p-6 w-[40vw] lg:w-[22vw] lg:h-[25vh] h-[35vh] text-sm">
      <p className="italic mb-4 break-words">{review.text}</p>
      <div className="flex flex-col">
        <p className="font-bold">{review.name}</p>
        <div className="flex mt-2 text-rating">
          {Array.from({ length: review.rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
