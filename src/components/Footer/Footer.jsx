import styles from '../../styled/style';
import { motion } from 'framer-motion';
import FooterIconList from './FooterIconList';

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
        <div className="flex-[0.3] w-full flex justify-center flex-wrap">
          <p className="text-center ss:text-[1rem] text-[0.9rem] ">
            ©Copyright 2023 by Federico Migliore - All Rights Reserved.
          </p>
        </div>

        <FooterIconList />
      </motion.div>
    </footer>
  );
};

export default Footer;
