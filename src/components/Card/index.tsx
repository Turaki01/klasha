import React from "react";
import "./styles.scss";

interface CardProps {
  children: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  height?: number;
  isHover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  borderColor = "#000000",
  borderWidth = 1,
  paddingX = 10,
  paddingY = 10,
  borderRadius = 8,
  height = 13,
  isHover = true
}) => {
  return (
    <div
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${borderRadius}px`,
        height: `${height}rem`
      }}
      className={`${isHover && "card-hover"}`}
    >
      {children}
    </div>
  );
};

export default Card;
