import React, { useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorChar?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  cursorChar = "_",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedText = text.slice(0, currentIndex);

  if (currentIndex < text.length) {
    setTimeout(
      () => {
        setCurrentIndex((prev) => prev + 1);
      },
      currentIndex === 0 ? delay : speed,
    );
  }

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="animate-pulse">{cursorChar}</span>
    </span>
  );
};

export default Typewriter;
