import React from 'react';

const BubblesComponents = ({ times }) => {
  const bubbles = [];

  for (let i = 0; i < times; i++) {
    const className = `x${i + 1}`;
    bubbles.push(
      <div
        key={i}
        className={`absolute w-[5px] h-[5px] rounded-full bg-blue-500 ${className}`}
      ></div>
    );
  }

  return <>{bubbles}</>;
};

export default BubblesComponents;
