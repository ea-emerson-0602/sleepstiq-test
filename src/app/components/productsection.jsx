import React from "react";
import ProductCard from "./productcard";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product2.png";
import product4 from "../assets/product1.png";
import product5 from "../assets/product1.png";

const products = [
  {
    image: product1.src,
    text: "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    name: "Rachel Dill",
    rating: 5,
  },
  {
    image: product2.src,
    text: "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Javier Mendez",
    rating: 5,
  },
  {
    image: product3.src,
    text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    name: "Naomi Nwazurike",
    rating: 5,
  },
  {
    image: product4.src,
    text: "I have been falling asleep faster and sleeping thru the night.",
    name: "Nate Jacobs",
    rating: 5,
  },
  {
    image: product5.src,
    text: "This product really works for me.",
    name: "Alex Johnson",
    rating: 5,
  },
];

function ProductSection() {
    return (
      <div className="overflow-x-auto hide-scrollbar mx-6 lg:mx-0 lg:ml-32 h-fit pt-6 pb-20 lg:pb-24">
        <div className="flex gap-10 ">
          {products.map((product, index) => (
            <div key={index} className="w-fit h-fit">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductSection;