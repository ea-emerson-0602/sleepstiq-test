import React from 'react';

export default function Button({ children }) {
  return (
    <button className="text-white bg-mainButton rounded-lg py-4 px-24">
      {children}
    </button>
  );
}
