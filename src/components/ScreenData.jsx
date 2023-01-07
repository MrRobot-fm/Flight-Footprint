import { useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ScreenData = ({ orientation }) => {
  const { queryCodeFrom, queryCodeTo, passenger, footprint } = useSelector(
    store => store.footprint
  );
  return (
    <div className="w-full h-[70%] absolute flex flex-col items-center justify-around xs:top-16 top-12">
      {queryCodeFrom && queryCodeTo && passenger && footprint ? (
        <>
          <div className={`flex flex-col w-full font-semibold items-center `}>
            <h5
              className={`${
                orientation === 'landscape-primary'
                  ? 'text-[1.3rem] text-primary'
                  : 'xs:text-[2.2rem] text-[1.5rem] text-primary'
              }`}
            >
              Flight:
            </h5>
            <div
              className={`${
                orientation === 'landscape-primary'
                  ? 'text-[1.8rem] text-secondary'
                  : 'xs:text-[2.8rem] text-[2rem] text-secondary'
              }  flex items-center w-[65%] justify-center gap-2 `}
            >
              <span>{queryCodeFrom.substr(0, 3)} </span>
              <HiOutlineArrowNarrowRight />
              <span> {queryCodeTo.substr(0, 3)}</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5
              className={`${
                orientation === 'landscape-primary'
                  ? 'text-[1.3rem] text-primary'
                  : 'xs:text-[2.2rem] text-[1.4rem] text-primary'
              }`}
            >
              Total CO2:
            </h5>

            <span
              className={` ${
                orientation === 'landscape-primary'
                  ? 'text-[2rem]'
                  : 'xs:text-[2.7rem] text-[2rem]'
              } text-secondary `}
            >
              {footprint.co2e.toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5
              className={`${
                orientation === 'landscape-primary'
                  ? 'text-[1.3rem] text-primary'
                  : 'xs:text-[2.2rem] text-[1.4rem] text-primary'
              }`}
            >
              CO2/passenger:
            </h5>
            <span
              className={` ${
                orientation === 'landscape-primary'
                  ? 'text-[2rem]'
                  : 'xs:text-[2.7rem] text-[2rem]'
              } text-secondary `}
            >
              {(footprint.co2e / passenger).toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ScreenData;
