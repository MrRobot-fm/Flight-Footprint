import styles from '../styled/style';
import { Feature } from '../components';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <motion.section
      id="features"
      className={`${styles.paddingX} ${styles.paddingY} xl:py-44 w-full flex sm:flex-row flex-col justify-between  text-primary dark:text-greySection `}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,

        transition: { type: 'tween', duration: 1.5 }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex-1 flex flex-col justify-start items-start text-left sm:mr-[5rem] mt-0 ml-0 mb-[2rem] mr-[0]">
        <h1 className="font-bold text-[2.4rem] leading-[2.8rem] mt-[2rem]">
          The climate crisis is the defining issue of our time. Tomorrow will be
          too late — we need to act today.
        </h1>
        <p className="font-medium text-[1.3rem] leading-[2rem] mt-[1.5rem]">
          Let's take a look at some data
        </p>
      </div>
      <div className="flex-[1.3] flex justify-start items-center flex-col">
        <Feature
          title={'Worldwide air traffic report'}
          text={
            'According to the first global air traffic report by Airports Council International (ACI) in 2018, passenger traffic worldwide would be up 6 percent over the previous year: 8.8 billion people.'
          }
        />
        <Feature
          title={'Air Transport Action Group data'}
          text={
            'The sector would now produce about 2% of CO2 emissions from human activity globally (3% of Europes). According to data from the European Environment Agency, 13 percent of CO2 emissions due to the transport sector in 2016. '
          }
        />
        <Feature
          title={'Comparison of transportation means'}
          text={
            'Airplanes are the most polluting means of transportation. Flying produces 285 grams of CO2 per passenger (an average of 88 people per flight) per kilometer traveled. A car produces 42 per passenger per kilometer.'
          }
        />
        <Feature
          title={'A step toward so called "compensation"'}
          text={
            'To offset the CO2 footprint of a round-trip flight from London to Malaga would take about 4 pounds, for one from London and Cape Town it would take about 20 pounds, but unfortunately, few airlines offer passengers the opportunity to offset the carbon dioxide produced by their flights by paying a little more for their ticket so that the airline can fund environmental projects.'
          }
        />
      </div>
    </motion.section>
  );
};

export default Features;
