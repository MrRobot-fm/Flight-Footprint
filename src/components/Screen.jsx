import iphone from '../assets/img/Silver.png';
import { ScreenData } from '.';

const Screen = ({ active }) => {
  return (
    <div
      className={`${
        active
          ? 'translate-x-[0px] opacity-100 ease-in-out duration-[1.5s] '
          : 'ss:translate-x-[320px] translate-x-[00px] opacity-[0.5] ease-in-out duration-1000 '
      }  flex justify-center items-center relative md:mt-0 mt-16`}
    >
      <img src={iphone} alt="ipad-screen" className="w-[18rem] "></img>
      {active ? <ScreenData /> : null}
    </div>
  );
};

export default Screen;
