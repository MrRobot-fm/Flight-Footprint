import { useEffect, useState } from 'react';

export const useHandleAirportCode = (
  apiAirportCodeFrom,
  apiAirportCodeTo,
  dataFrom,
  dataTo
) => {
  const [flightCodeFrom, setFlightCodeFrom] = useState([]);
  const [flightCodeTo, setFlightCodeTo] = useState([]);
  const [queryFrom, setQueryFrom] = useState('');
  const [queryTo, setQueryTo] = useState('');

  useEffect(() => {
    const regExp = /[a-zA-Z]/g;

    if (regExp.test(queryFrom) && queryFrom) {
      apiAirportCodeFrom(queryFrom);
      setFlightCodeFrom(dataFrom);
    }

    if (regExp.test(queryTo) && queryTo) {
      apiAirportCodeTo(queryTo);
      setFlightCodeTo(dataTo);
    }
    if (!queryFrom || queryFrom === '') {
      setFlightCodeFrom([]);
    }
    if (!queryTo || queryTo === '') {
      setFlightCodeTo([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryFrom, queryTo]);

  return {
    flightCodeFrom,
    flightCodeTo,
    setQueryFrom,
    setQueryTo,
    queryTo,
    queryFrom
  };
};
