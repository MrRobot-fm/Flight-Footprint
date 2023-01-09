import iphone from '../assets/img/Silver.png';
import { ScreenData } from '.';
import { useSelector } from 'react-redux';

const Screen = ({ active }) => {
  const { footprint } = useSelector(store => store.footprint);

  return (
    <div
      className={`${
        active && footprint
          ? 'translate-x-[0px] opacity-100 ease-in-out duration-[1.5s] '
          : 'ss:translate-x-[320px] translate-x-[200px] opacity-[0.5] ease-in-out duration-1000 '
      }  flex justify-center items-center relative md:mt-0 mt-16`}
    >
      <img src={iphone} alt="ipad-screen" className="w-[18rem] "></img>
      {active ? <ScreenData /> : null}
    </div>
  );
};

export default Screen;
