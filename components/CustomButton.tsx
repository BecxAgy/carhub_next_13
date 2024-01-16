import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, style, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${style}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
