import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from "axios";

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
    } catch(err) {
      setError(err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };

}
