import styles from '../styled/style';
import { motion } from 'framer-motion';
import { Tooltip } from 'antd';
import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiFramer
} from 'react-icons/si';

const Footer = () => {
  return (
    <footer
      className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full text-primary dark:text-greySection`}
    >
      <div className=" h-[1px] ss:w-[80%] w-[80%] bg-tertiary " />
      <motion.div
        className="w-full flex sm:flex-row flex-col gap-y-7 justify-evenly items-center sm:pt-14 sm:py-0 py-8 "
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: 'tween', duration: 1.8 }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex-[0.3] w-full flex justify-center">
          <p className="text-center ss:text-[1rem] text-[0.7rem] ">
            ©Copyright 2022 by Federico Migliore - All Rights Reserved.
          </p>
        </div>

        <div className="flex-[0.3] flex-wrap sm:w-[60%] w-[80%] flex md:flex-row flex-col items-center justify-center gap-[0.8rem] ">
          <p className="text-center ss:text-[1rem] text-[0.7rem]">
            Created whit:{' '}
          </p>
          <div className="flex gap-[1.2rem]">
            <Tooltip
              placement="bottom"
              title={<span>React Js</span>}
              arrowPointAtCenter={true}
              mouseEnterDelay={0.4}
            >
              <SiReact className="hover:text-[#61dafb] ease-in-out duration-500 text-[1.8rem]" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={<span>React Router</span>}
              arrowPointAtCenter={true}
              mouseEnterDelay={0.4}
            >
              <SiReactrouter className="hover:text-red-400 ease-in-out duration-500 text-[1.9rem]" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={<span>Redux Toolkit</span>}
              arrowPointAtCenter={true}
              mouseEnterDelay={0.4}
            >
              <SiRedux className="hover:text-[#764abc] ease-in-out duration-500 text-[1.7rem]" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={<span>Tailwind Css</span>}
              arrowPointAtCenter={true}
              mouseEnterDelay={0.4}
            >
              <SiTailwindcss className="hover:text-[#0ea5e9] ease-in-out duration-500 text-[1.8rem]" />
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={<span>Framer Motion</span>}
              arrowPointAtCenter={true}
              mouseEnterDelay={0.4}
            >
              <SiFramer className="hover:text-[#dd22cc] ease-in-out duration-500 text-[1.6rem]" />
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
