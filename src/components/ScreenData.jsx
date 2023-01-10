import { useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ScreenData = () => {
  const { queryCodeFrom, queryCodeTo, passenger, footprint, isLoading } =
    useSelector(store => store.footprint);

  return (
    <div className="w-full h-[75%] flex flex-col absolute xs:top-16 top-12">
      {queryCodeFrom && queryCodeTo && passenger && footprint && !isLoading ? (
        <motion.div
          className="h-full flex flex-col justify-evenly items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1.5 }}
        >
          <div className="flex flex-col w-full font-semibold items-center">
            <h5 className="text-[1.5rem] text-primary">Flight:</h5>
            <div className="text-[2rem] text-secondary  flex items-center w-[65%] justify-center gap-2 ">
              <span>{queryCodeFrom.substr(0, 3)} </span>
              <HiOutlineArrowNarrowRight />
              <span> {queryCodeTo.substr(0, 3)}</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.5rem] text-primary">Total CO2:</h5>

            <span className="text-[2rem] text-secondary">
              {footprint.co2e.toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.5rem] text-primary">CO2/passenger:</h5>

            <span className="text-[2rem] text-secondary ">
              {(footprint.co2e / passenger).toFixed(1)} {footprint.co2e_unit}
            </span>
          </div>
        </motion.div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center">
          <h2 className="text-[1.5rem]">Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default ScreenData;
