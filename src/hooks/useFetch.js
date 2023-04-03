import { useEffect, useState } from "react"

export const useFetch = (fetchResource, parameters) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetchResource(parameters);
      setData(response);
      setLoading(false);
    } catch (error) {
      setError('Error API');
      setLoading(false);
    }

  }

  useEffect(() => {
    setError(null);
    setLoading(true);
    getData();
  }, []);


  return {
    data,
    error,
    loading,
  }
}
