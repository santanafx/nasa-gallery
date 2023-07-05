import axios from "axios";

export const useApiRequests = () => {
  const API_KEY = "Zfjg6ED20OFifnZj7HH9VtaMDnwVc4rgF6Gja5BC";

  const getRequestApod = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?count=20&api_key=${API_KEY}`
    );
    return response.data;
  };

  const getRequestMars = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&api_key=${API_KEY}`
    );
    return response.data;
  };

  return { getRequestApod, getRequestMars };
};
