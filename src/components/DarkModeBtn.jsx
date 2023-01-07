import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'antd';

const DarkModeBtn = ({ toggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  const activateDarkMode = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setDarkMode(true);

    return;
  };

  const deactivateDarkMode = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setDarkMode(false);
    return;
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
    }
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode(false);
    }
  }, []);

  return (
    <Switch.Group>
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
          <Switch.Label
            className={
              darkMode
                ? 'text-yellow-500 hover:text-yellow-500/80 ease-in-out duration-300 mr-4 md:text-[1.3rem] text-[1.6rem] cursor-pointer flex'
                : 'mr-4 md:text-[1.3rem]  text-[1.6rem] cursor-pointer flex hover:text-tertiary ease-in-out duration-300'
            }
            onClick={activateDarkMode}
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
          </Switch.Label>
        </Tooltip>

        <Switch
          checked={darkMode}
          className={`${
            !darkMode ? 'bg-gray-300/60' : 'bg-blue-500/90'
          } relative inline-flex md:h-7 md:w-14 h-7 w-14 items-center rounded-full transition-colors focus:outline-none   `}
        >
          <span
            className={`${
              darkMode ? 'translate-x-1' : 'translate-x-8'
            } inline-block md:h-5 md:w-5 h-5 w-5 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Tooltip
          placement="bottom"
          title={<span>Light Mode</span>}
          arrowPointAtCenter={true}
          mouseEnterDelay={0.4}
        >
          <Switch.Label
            className={
              darkMode
                ? 'ml-5 md:text-[1.1rem] text-[1.4rem] cursor-pointer flex hover:text-white/60 ease-in-out duration-300'
                : 'ml-5 md:text-[1.1rem] text-[1.4rem] cursor-pointer flex hover:text-tertiary ease-in-out duration-300'
            }
            onClick={deactivateDarkMode}
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
          </Switch.Label>
        </Tooltip>
      </div>
    </Switch.Group>
  );
};

export default DarkModeBtn;
