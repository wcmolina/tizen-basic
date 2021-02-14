import Axios from "axios";

const HttpClient = Axios.create({
  baseURL: process.env.API_URL,
});

HttpClient.interceptors.request.use((config) => {
  const apiKeyParam = { api_key: process.env.API_KEY };
  config.params = config.params
    ? { ...config.params, ...apiKeyParam }
    : apiKeyParam;
  return config;
});

export default HttpClient;
