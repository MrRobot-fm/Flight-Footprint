import styles from '../styled/style';
import { motion } from 'framer-motion';
import { Stat } from '../components';

const Stats = () => {
  return (
    <motion.section
      className={`${styles.flexCenter} ${styles.paddingX}  sm:flex-row flex-col flex-wrap sm:mb-16 mb-6 text-primary dark:text-greySection`}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { type: 'tween', duration: 1.5 }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Stat country="Lufthansa" stat="107g pkm" />
      <Stat country="Korean Air" stat=" 172g pkm" />
      <Stat country="Easy Jet" stat="75g pkm" />
    </motion.section>
  );
};

export default Stats;
