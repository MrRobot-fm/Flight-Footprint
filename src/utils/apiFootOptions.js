export const apiFootOptions = (
  queryCodeFrom,
  queryCodeTo,
  passenger,
  flightClass
) => {
  const options = {
    method: 'POST',
    url: 'https://beta3.api.climatiq.io/travel/flights',

    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    data: {
      legs: [
        {
          from: `${queryCodeFrom.substr(0, 3)}`,
          to: `${queryCodeTo.substr(0, 3)}`,
          passengers: passenger,
          class: flightClass
        }
      ]
    }
  };

  return options;
};
