import React from "react";

interface CardProps {
  children: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  borderColor = "#000000",
  borderWidth = 1,
  paddingX = 10,
  paddingY = 10,
  borderRadius = 8,
  height = 13
}) => {
  return (
    <div
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${borderRadius}px`,
        height: `${height}rem`
      }}
      className=" hover:bg-[#000000]"
    >
      {children}
    </div>
  );
};

export default Card;
