// api.js
import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('/data');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
