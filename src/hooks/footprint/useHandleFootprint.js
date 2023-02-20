import { useState } from 'react';

export const useHandleFootprint = apiFootprint => {
  const [active, setActive] = useState(false);
  const [values, setValues] = useState(null);

  const activateScreen = () => {
    setActive(true);
  };

  const handleFootprint = formValues => {
    setValues(formValues);
    apiFootprint(
      formValues.codeFrom,
      formValues.codeTo,
      formValues.passenger,
      formValues.flightClass
    );

    activateScreen();
  };

  return { values, active, handleFootprint };
};
