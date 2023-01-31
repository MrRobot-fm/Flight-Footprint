import axios from 'axios';

export const apiAirportCode = async (query, setCode) => {
  try {
    const resp = await axios.get(
      `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&term=${query}`
    );
    setCode(
      resp.data.map(item => {
        return {
          label: `${item.code} - ${item.name} ( ${item.country_code} ) `,
          value: `${item.code} - ${item.name} ( ${item.country_code} ) `
        };
      })
    );
    return resp.data;
  } catch (error) {
    throw new Error(error);
  }
};
