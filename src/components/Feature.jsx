const Feature = ({ title, text }) => {
  return (
    <div className="w-full flex justify-between items-start flex-row m-[1rem]">
      <div className=" flex-1 max-w-[180px]  mr-6">
        <div className=" w-[3.8rem] h-[4px]  bg-blue-500/90 shadow-md mb-[0.25rem]" />
        <h1 className="font-extrabold xs:text-[20px] xs:leading-[25px] text-[16px] leading-[22px] tracking-tighter ">
          {title}
        </h1>
      </div>
      <div className="flex-[2] flex max-w-[830px]">
        <p className=" text-secondary dark:text-tertiary font-medium xs:leading-[25px] xs:text-[16px] leading-[20px] text-[14px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
