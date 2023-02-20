import axios from 'axios';
import { useState } from 'react';

export const useFetchFootprint = () => {
  const [footprint, setFootprint] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiFootprint = async (codeFrom, codeTo, passenger, flightClasses) => {
    setIsLoading(true);
    try {
      const resp = await axios({
        method: 'post',
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
      });

      setFootprint(resp.data);
      setIsLoading(false);
      setIsError(false);

      return resp.data;
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return {
    apiFootprint,
    footprint,
    isLoading,
    isError
  };
};
