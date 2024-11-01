import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white flex flex-col justify-between pb-6 rounded-lg w-[22vw] h-[60vh] text-sm shadow-[15px_25px_50px_rgba(0,0,0,0.12)] text-[#4D533C] ">
      <div
        className="min-h-[30vh] w-full bg-cover bg-center overflow-hidden px-32"
        style={{ backgroundImage: `url(${product.image})` }}
        aria-label="Product Image"
      ></div>
      <p className="italic mb-4 break-words px-6">{product.text}</p>
      <div className="flex flex-col px-6">
        <p className="font-bold">{product.name}</p>
        <div className="flex mt-2 text-rating">
          {Array.from({ length: product.rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
