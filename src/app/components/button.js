import React from 'react';

export default function Button({ children }) {
  return (
    <button className="text-white bg-mainButton rounded-md py-3 px-20 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 active:bg-opacity-90">
      {children}
    </button>
  );
}
