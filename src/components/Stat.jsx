const Stat = ({ country, stat }) => {
  return (
    <div className="flex-1 flex flex-row items-center justify-center m-3">
      <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ">
        {country}
      </h4>
      <p className=" font-normal xs:text-[25px] text-[15px] xs:leading-[26px] leading-[21px]  ml-3 pt-2">
        {stat}
      </p>
    </div>
  );
};

export default Stat;
