export const apiFootOptions = (codeFrom, codeTo, passenger, flightClasses) => {
  const options = {
    method: 'POST',
    url: 'https://beta3.api.climatiq.io/travel/flights',

    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    data: {
      legs: [
        {
          from: `${codeFrom}`,
          to: `${codeTo}`,
          passengers: passenger,
          class: flightClasses
        }
      ]
    }
  };

  return options;
};
