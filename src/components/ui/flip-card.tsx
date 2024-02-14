import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
// import { useState } from "react"

const FlipCard = ({
  frontSideText,
  backSideText,
  onClick,
  isRotated,
}: {
  frontSideText: string;
  backSideText: string;
  onClick: () => void;
  isRotated: boolean;
}) => {
  const [prevFrontSide, setFrontBackSide] = useState(backSideText);
  const [prevBackSide, setPrevBackSide] = useState(backSideText);

  useEffect(() => {
    if (isRotated) {
      setTimeout(() => setFrontBackSide(frontSideText), 150);
      setTimeout(() => setPrevBackSide(backSideText), 150);
    }
    console.log(prevBackSide, "prevBackSide");
    console.log(isRotated, "isRotated");
  }, [isRotated]);

  // implement space press
  // const handleKeyPress = () => {

  // }

  return (
    <div
      className="max-w-[428px] mx-auto w-full h-[200px] perspective-1000 mb-5"
      onClick={onClick}
    >
      <div
        className={cn(
          "hover:cursor-default select-none relative transform-style-3d transition-transform transform shadow-2xl border-2 dark:border-gray-700 duration-700 w-full h-full bg-muted rounded",
          isRotated ? "rotate-y-180" : "rotate-y-0"
        )}
      >
        <div className="absolute w-full h-full backface-hidden flex justify-center items-center text-2xl">
          <span className="absolute top-5 right-5 text-base">1</span>
          <p className="text-center">{frontSideText}</p>
        </div>
        <div className="absolute transform rotate-y-180 backface-hidden w-full h-full flex flex-col justify-center items-center text-2xl">
          <span className="absolute top-5 right-5 text-base">2</span>
          <span className={cn("absolute top-5 left-5 text-base")}>
            {prevFrontSide}
          </span>
          <p className={cn("text-center")}>{prevBackSide}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
