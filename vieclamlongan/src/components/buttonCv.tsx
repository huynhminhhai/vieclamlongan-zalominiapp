import React from "react";

type ButtonCVProps = {
    onClick: () => void;
    label: string
}

const ButtonCV:React.FC<ButtonCVProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="text-[16px] font-medium text-white bg-[#ff7d55] px-5 py-3 rounded-lg"
    >
      {label}
    </button>
  );
};

export default ButtonCV;