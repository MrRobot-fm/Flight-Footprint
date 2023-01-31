import axios from 'axios';

export const apiFootprint = async (options, setFootprint, setIsLoading) => {
  try {
    setIsLoading(true);
    const resp = await axios.request(options);
    setIsLoading(false);
    setFootprint(resp.data);
    return resp.data;
  } catch (error) {
    throw new error(error);
  }
};
