import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(`something went wrong ${response.status} error`);
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setError(null);
          setData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
