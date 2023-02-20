import { TfiWorld } from 'react-icons/tfi';
import { Tooltip } from 'antd';
import './translate.css';
import { useHandleTranslate } from '../../hooks/translate/useHandleTranslate';

const Translate = ({ toggle }) => {
  // eslint-disable-next-line no-unused-vars
  const { googleTranslateElementInit } = useHandleTranslate();

  return (
    <div
      className={
        toggle
          ? 'invisible flex flex-row justify-center md:mt-0 mt-3 md:mr-0 ml-4'
          : 'visible flex flex-row justify-center md:mt-0 mt-3 md:mr-0 ml-4'
      }
    >
      <Tooltip
        placement="bottom"
        title={<span>Translate</span>}
        arrowPointAtCenter={true}
        mouseEnterDelay={0.4}
        color="bg-white"
      >
        <TfiWorld
          className="mr-2 md:text-[1.7rem] text-[1.9rem] "
          strokeWidth="0.2px"
        />
      </Tooltip>
      <div
        id="google_translate_element"
        className="w-[1.8rem] h-[1.6rem]"
      ></div>
    </div>
  );
};

export default Translate;
