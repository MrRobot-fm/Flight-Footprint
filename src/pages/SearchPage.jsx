import { useState } from 'react';
import styles from '../styled/style';
import { motion } from 'framer-motion';
import { Screen, SearchForm } from '../components';
import { apiFootprint } from '../utils/apiFootprint';
import { apiFootOptions } from '../utils/apiFootOptions';
import { useForm } from 'react-hook-form';

const SearchPage = () => {
  const [active, setActive] = useState(false);
  const [values, setValues] = useState(null);
  const [footprint, setFootprint] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const activateScreen = () => {
    setActive(true);
  };

  const handleFootprint = formValues => {
    setValues(formValues);
    apiFootprint(
      apiFootOptions(
        formValues.codeFrom,
        formValues.codeTo,
        formValues.passenger,
        formValues.flightClass
      ),
      setFootprint,
      setIsLoading
    );
    activateScreen();
  };

  return (
    <motion.section
      id="footprint"
      className={`${styles.paddingX} ${styles.paddingY} xl:py-24 mb-[2rem] w-full xs:flex md:flex-row flex-col justify-between items-center gap-24  text-primary dark:text-greySection `}
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
        <SearchForm
          handleFootprint={handleFootprint}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          errors={errors}
        />
      </div>
      <div className="flex-1 landscape:flex-[1.5]">
        <Screen
          active={active}
          values={values}
          footprint={footprint}
          isLoading={isLoading}
        />
      </div>
    </motion.section>
  );
};

export default SearchPage;
