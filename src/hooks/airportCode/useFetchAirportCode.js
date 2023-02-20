import { useState } from 'react';
import axios from 'axios';
import { ToastError } from './../../components/Toast/ToastError';

export const useFetchAirportCode = () => {
  const [airportData, setAirportData] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiAirportCode = async query => {
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&term=${query}`
      );

      const data = resp.data.map(item => {
        return {
          label: `${item.code} - ${item.name} ( ${item.country_code} ) `,
          value: `${item.code} - ${item.name} ( ${item.country_code} ) `
        };
      });
      if (query) {
        setAirportData(data);
      }
      setLoading(false);

      return data;
    } catch (error) {
      ToastError(error.message);
      setLoading(false);
    }
  };

  return { apiAirportCode, airportData, loading };
};
