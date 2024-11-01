import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg w-[45vw] h-[45vh] lg:w-[22vw] lg:h-[60vh] shadow-[15px_25px_50px_rgba(0,0,0,0.12)] text-[#4D533C]">
      {/* Image Container with Fixed Height */}
      <div
        className="lg:h-[30vh] h-[20vh] w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${product.image})` }}
        aria-label="Product Image"
      ></div>

      <div className="flex flex-col flex-grow justify-between p-4 lg:p-6">
        {/* Product review */}
        <p className="italic mb-2 break-words flex-grow">{product.text}</p>

        {/* Product Name and Rating */}
        <div>
          <p className="font-bold mb-2">{product.name}</p>
          <div className="flex text-rating">
            {Array.from({ length: product.rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
