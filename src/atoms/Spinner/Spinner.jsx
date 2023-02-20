import React from 'react';

const Spinner = ({
  borderWidth,
  borderColor,
  borderTopWidth,
  borderTopColor,
  width,
  height
}) => {
  console.log(borderTopColor);
  return (
    <>
      <div
        className={`border-[${borderWidth}] border-[${borderColor}] border-t-[${borderTopWidth}] border-t-[${borderTopColor}] rounded-[50%] w-[${width}] h-[${height}] animate-spin`}
      ></div>
    </>
  );
};

export default Spinner;
