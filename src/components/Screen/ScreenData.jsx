import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Spinner from '../../atoms/Spinner/Spinner';

const ScreenData = ({ values, footprint, isLoading, isError }) => {
  return (
    <div className="w-full h-[75%] flex flex-col absolute xs:top-16 top-12">
      {footprint && !isLoading && !isError && (
        <motion.div
          className="h-full flex flex-col justify-evenly items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1.5 }}
        >
          <div className="flex flex-col w-full font-semibold items-center">
            <h5 className="text-[1.5rem] text-primary">Flight:</h5>
            <div className="text-[2rem] text-secondary  flex items-center w-[65%] justify-center gap-2 ">
              <span>{values?.codeFrom?.substr(0, 3)} </span>
              <HiOutlineArrowNarrowRight />
              <span> {values?.codeTo?.substr(0, 3)}</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.5rem] text-primary">Total CO2:</h5>

            <span className="text-[2rem] text-secondary">
              {footprint?.co2e.toFixed(1)} {footprint?.co2e_unit}
            </span>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <h5 className="text-[1.5rem] text-primary">CO2/passenger:</h5>

            <span className="text-[2rem] text-secondary ">
              {(footprint?.co2e / values.passenger).toFixed(1)}{' '}
              {footprint?.co2e_unit}
            </span>
          </div>
        </motion.div>
      )}
      {isLoading && (
        <div className="h-full flex flex-col items-center justify-center text-black">
          <h2 className="text-[1.5rem] font-medium mb-2">Loading...</h2>
          <Spinner
            borderWidth="8px"
            borderColor="#f3f3f3"
            borderTopWidth="8px"
            borderTopColor="#3498db"
            width="2.5rem"
            height="2.5rem"
          />
        </div>
      )}
      {isError && (
        <div className="h-full flex flex-col items-center justify-center text-black ">
          <h2 className="text-[1.5rem] font-medium">Error⛔</h2>
          <h2 className="text-[1.5rem] font-medium">Failed to get data!!!</h2>
        </div>
      )}
    </div>
  );
};

export default ScreenData;
