import styles from '../../styled/style';
import mac from '../../assets/img/Device - Macbook Pro-co2.png';
import { motion } from 'framer-motion';
import Button from '../../atoms/buttons/Button';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className={`flex md:flex-row flex-col pb-14 xl:py-20 xl:pb-[8rem] `}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: 'tween' }}
    >
      <div
        className={`flex-1 flex flex-col justify-center items-start xl:px-0 sm:px-16 px-6 sm:pb-16`}
      >
        <div className="flex w-full">
          <h1 className=" font-semibold  ss:text-[75px] text-[44px] text-primary dark:text-greySection ss:leading-[92px] leading-[75px]">
            Build
            <br className="sm:block hidden" /> for a Green{' '}
            <br className="xl:block hidden" /> Tomorrow, Today.
          </h1>
        </div>
        <div className="flex flex-col items-start max-w-[450px]">
          <p className={`${styles.paragraph}  mt-3`}>
            With Climatiq's API, we can calculate the CO2 footprint of an
            airplane flight and realize how much pollution is produced to meet
            our needs.
          </p>
          <div className="mt-5">
            <Button text="Get your footprint &rarr;" link="#footprint" />
          </div>
        </div>
      </div>
      <div className={`flex-1 flex justify-end items-center md:my-0 my-10 `}>
        <img
          src={mac}
          alt="mac-book"
          className="md:w-[38rem] sm:w-[32rem] xxs:w-[23rem] "
        />
      </div>
    </motion.section>
  );
};

export default Hero;
