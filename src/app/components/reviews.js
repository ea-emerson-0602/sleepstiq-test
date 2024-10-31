import React from "react";
function ReviewCard({ review }) {
  return (
    <div className="bg-[#f7f4ed] flex flex-col justify-between rounded-lg p-6 shadow-md w-[20vw] h-[25vh] text-sm">
      <p className="italic mb-4 break-words">{review.text}</p>
      <div className="flex flex-col">
        <p className="font-bold">{review.name}</p>
        <div className="flex mt-2 text-green-600">
          {Array.from({ length: review.rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
