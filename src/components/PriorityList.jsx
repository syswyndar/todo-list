import React from "react";

const PriorityList = ({ color, value, openDropdown }) => {
  const renderStyle = () => {
    let result;
    if (color === "red") {
      result = `w-[12px] h-[12px] rounded-full bg-red`;
    } else if (color === "yellow") {
      result = `w-[12px] h-[12px] rounded-full bg-yellow`;
    } else if (color === "green") {
      result = `w-[12px] h-[12px] rounded-full bg-green`;
    } else if (color === "primary") {
      result = `w-[12px] h-[12px] rounded-full bg-primary`;
    } else if (color === "purple") {
      result = `w-[12px] h-[12px] rounded-full bg-purple`;
    }
    return result;
  };
  return (
    <>
      <button
        className="w-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
        onClick={openDropdown}
      >
        <div className={renderStyle()}></div>
        <p>{value}</p>
      </button>
    </>
  );
};

export default PriorityList;
