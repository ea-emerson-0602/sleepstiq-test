import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white flex flex-col justify-between pb-6 rounded-lg shadow-md w-fit h-[50vh] text-sm">
       
      <div
        className="min-h-[25vh] w-full bg-cover bg-center overflow-hidden px-32"
        style={{ backgroundImage: `url(${product.image})` }}
        aria-label="Product Image"
      ></div>
      <p className="italic mb-4 break-words px-6">{product.text}</p>
      <div className="flex flex-col px-6">
        <p className="font-bold">{product.name}</p>
        <div className="flex mt-2 text-green-600">
          {Array.from({ length: product.rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
