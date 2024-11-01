import React from 'react';

export default function Button({ children }) {
  return (
    <button className="text-white bg-mainButton rounded-md py-3 px-20">
      {children}
    </button>
  );
}
