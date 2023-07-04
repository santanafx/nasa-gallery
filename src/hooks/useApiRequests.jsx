import axios from "axios";

export const useApiRequests = () => {
  const API_KEY = "Zfjg6ED20OFifnZj7HH9VtaMDnwVc4rgF6Gja5BC";

  const getRequest = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?count=20&api_key=${API_KEY}`
    );
    return response.data;
  };

  return { getRequest };
};
