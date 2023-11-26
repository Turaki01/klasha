import colors from "config/colors";
import React, { FormEventHandler } from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  label: string;
  bgColor?: string;
  borderColor?: string;
  color?: string;
  height?: number;
  paddingX?: number;
  paddingY?: number;
  disabled?: boolean;
  border?: number;
  isLoading?: boolean;
  isLabelBold?: boolean;
  onClick?: FormEventHandler | (() => void);
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  type = "submit",
  label,
  color = "#ffffff",
  isLabelBold = false,
  borderColor = colors.pri,
  bgColor = colors.pri,
  height = 50,
  border = 8,
  disabled,
  isLoading,
  paddingX = 2,
  paddingY = 0,
  icon,
  iconHeight = 24,
  iconWidth = 24,
  fontSize = 18,
  onClick
}) => {
  return (
    <button
      style={{
        height: `${height}px`,
        color: `${color}`,
        borderRadius: `${border}px`,
        border: `1px solid ${borderColor}`,
        padding: `${paddingY}rem ${paddingX}rem`,
        fontWeight: isLabelBold ? "600" : "500",
        backgroundColor: bgColor,
        fontSize: fontSize
      }}
      className={`${disabled && "opacity-60"}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <span className="flex justify-center items-center">
          {icon && (
            <img
              src={icon}
              className="mr-2"
              style={{ width: iconWidth, height: iconHeight }}
              alt="Icon"
            />
          )}
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
