import { useState, useCallback } from 'react';
import styles from '../styled/style';
import { motion } from 'framer-motion';
import { ScreenIpad, SearchForm } from '../components';

const SearchPage = () => {
  const [active, setActive] = useState(false);

  const handleWidth = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <motion.section
      id="footprint"
      className={`${styles.paddingX} ${styles.paddingY} xl:py-28 mb-[2rem] w-full xs:flex md:flex-row flex-col justify-between items-center gap-24  text-primary dark:text-greySection `}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: 'tween', duration: 1.5 }
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className='w-full flex-[1.2] flex flex-col justify-evenly items-start text-left sm:mr-[5rem] landscape:mr-0 mt-0 ml-0 mr-[0] md:pb-0  md:mb-0"'>
        <h1 className="font-bold text-[2.4rem] leading-[2.8rem] mt-[2rem] mb-[2rem] max-w-[600px] ">
          Calculate emissions in real-time, <br className="sm:block hidden" />
          get clear insights and make informed sustainability decisions.
        </h1>
        <SearchForm handleWidth={handleWidth} setActive={setActive} />
      </div>
      <div className="w-full flex-1 landscape:flex-[1.5] ">
        <ScreenIpad active={active} />
      </div>
    </motion.section>
  );
};

export default SearchPage;
