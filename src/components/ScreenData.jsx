import { useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ScreenData = () => {
  const { queryCodeFrom, queryCodeTo, passenger, footprint } = useSelector(
    store => store.footprint
  );
  return (
    <div className="w-full h-[65%] absolute flex flex-col items-center justify-around xs:top-16 top-12">
      {queryCodeFrom && queryCodeTo && passenger && footprint ? (
        <>
          <div className="flex flex-col w-full font-semibold items-center sm:text-[2.2rem] text-[1.6rem]">
            <h5 className="text-[1.3rem] text-primary">Flight:</h5>
            <div className="flex items-center w-[40%] justify-evenly text-secondary">
              <span>{queryCodeFrom.substr(0, 3)} </span>
              <HiOutlineArrowNarrowRight />
              <span> {queryCodeTo.substr(0, 3)}</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.3rem] text-primary">Total CO2:</h5>

            <span className="sm:text-[2.2rem] text-[1.6rem] text-secondary">
              {footprint.co2e.toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.3rem] text-primary">CO2/passenger:</h5>
            <span className="sm:text-[2.2rem] text-[1.6rem] text-secondary">
              {(footprint.co2e / passenger).toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ScreenData;
