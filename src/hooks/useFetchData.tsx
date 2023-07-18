import { useState, useEffect } from "react";

interface FetchDataResponse<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

export function useFetchData<Data>(fetchDataFn: () => Promise<Data>): FetchDataResponse<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetchDataFn();
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  return { data, loading, error };
}
