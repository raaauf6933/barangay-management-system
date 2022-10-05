import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      const typedError = err;
      setError(typedError);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // execute once only

  return { response, error, loading };
};

export default useAxios;
