import iphone from '../../assets/img/Silver.png';
import { ScreenData } from '..';

const Screen = ({ active, values, footprint, isLoading, isError }) => {
  return (
    <div
      className={`${
        active
          ? 'translate-x-[0px] opacity-100 ease-in-out duration-[1.5s] '
          : 'ss:translate-x-[320px] translate-x-0 opacity-[0.5] ease-in-out duration-1000 '
      }  flex justify-center items-center relative md:mt-0 mt-16`}
    >
      <img src={iphone} alt="ipad-screen" className="w-[18rem] "></img>
      {active ? (
        <ScreenData
          values={values}
          footprint={footprint}
          isLoading={isLoading}
          isError={isError}
        />
      ) : null}
    </div>
  );
};

export default Screen;
