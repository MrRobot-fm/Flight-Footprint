import { useState, useEffect } from 'react';
import iphone from '../assets/img/Silver.png';
import screen from '../assets/img/Screen2.png';
import { ScreenData } from '../components';

const ScreenIpad = ({ active }) => {
  const getOrientation = () => window.screen.orientation.type;
  const [orientation, setOrientation] = useState(getOrientation());
  console.log(orientation);
  useEffect(() => {
    const updateOrientation = event => {
      setOrientation(getOrientation());
    };
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return (
    <div
      className={`${
        active
          ? 'translate-x-[0px] opacity-100 ease-in-out duration-[1.5s] '
          : 'ss:translate-x-[320px] translate-x-[200px] opacity-[0.5] ease-in-out duration-1000 '
      }  flex justify-center items-center relative md:mt-0 mt-16`}
    >
      <img
        src={orientation === 'landscape-primary' ? iphone : screen}
        alt="ipad-screen"
        className={
          orientation === 'landscape-primary' ? ' w-[17rem] ' : 'w-[30rem] '
        }
      ></img>
      {active ? <ScreenData orientation={orientation} /> : null}
    </div>
  );
};

export default ScreenIpad;
