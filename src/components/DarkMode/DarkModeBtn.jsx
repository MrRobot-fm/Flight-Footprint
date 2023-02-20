import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'antd';
import './darkMode.css';
import { useHandleDarkMode } from '../../hooks/darkMode/useHandleDarkMode';

const DarkModeBtn = ({ toggle }) => {
  const { toggleDarkMode, darkMode } = useHandleDarkMode();

  return (
    <div
      className={
        toggle
          ? 'fixed sm:top-7 top-5 flex items-center mt-3 md:mt-0 z-[2000] md:mr-0 mr-3'
          : 'flex items-center mt-3 md:mt-0 z-[2000] md:mr-0 mr-3'
      }
    >
      <Tooltip
        placement="bottom"
        title={<span>Dark Mode</span>}
        arrowPointAtCenter={true}
        mouseEnterDelay={0.4}
      >
        <label
          className={
            darkMode
              ? 'text-yellow-500 hover:text-yellow-500/80 ease-in-out duration-300 mr-4 md:text-[1.3rem] text-[1.6rem]  flex'
              : 'mr-4 md:text-[1.3rem]  text-[1.6rem] flex hover:text-tertiary ease-in-out duration-300'
          }
        >
          <FontAwesomeIcon
            icon={faMoon}
            size="lg"
            className={`${darkMode && 'fa-bounce'}`}
            style={{
              animationDuration: '2s',
              animationIterationCount: '2'
            }}
          />
        </label>
      </Tooltip>

      <Switch
        className={`${
          !darkMode ? 'bg-gray-300/60' : 'bg-blue-500/90'
        } relative inline-flex  items-center rounded-full transition-colors focus:outline-none w-[3.7rem] h-[1.8rem] `}
        onClick={toggleDarkMode}
        checked={darkMode}
        size="large"
      />

      <Tooltip
        placement="bottom"
        title={<span>Light Mode</span>}
        arrowPointAtCenter={true}
        mouseEnterDelay={0.4}
      >
        <label
          className={
            darkMode
              ? 'ml-5 md:text-[1.2rem] text-[1.4rem]  flex hover:text-white/60 ease-in-out duration-300'
              : 'ml-5 md:text-[1.2rem] text-[1.4rem]  flex hover:text-tertiary ease-in-out duration-300'
          }
        >
          <FontAwesomeIcon
            icon={faSun}
            size="lg"
            className={`${!darkMode && 'fa-bounce'}`}
            style={{
              animationDuration: '2s',
              animationIterationCount: '2'
            }}
          />
        </label>
      </Tooltip>
    </div>
  );
};

export default DarkModeBtn;
