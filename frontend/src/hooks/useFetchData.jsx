import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.log("Response:", res);
        const result = await res.json();
        // console.log("Result:", result);
        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch data");
        }
        setData(result.data);
        setError(null); // Clear any previous errors if request succeeds
      } catch (error) {
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
