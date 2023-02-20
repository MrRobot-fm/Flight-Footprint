export const useHandleSearchInputs = () => {
  const handleOnSearchAndClear = (value, setQuery, setValue, code) => {
    setQuery(value);
    setValue(code, value);
  };

  const handleOnSelect = (value, setValue, code) => {
    setValue(code, value?.substr(0, 3));
  };

  const handleChangePassenger = (value, setValue) => {
    if (value > 0) {
      setValue('passenger', ...value);
    } else {
      setValue('passenger', null);
    }
  };

  const handleChangeClass = (value, setValue) => {
    if (value) {
      setValue('flightClass', ...value);
    } else {
      setValue('flightClass', value);
    }
  };
  return {
    handleOnSearchAndClear,
    handleOnSelect,
    handleChangePassenger,
    handleChangeClass
  };
};
