import { useEffect, useState } from 'react';
import axios from "axios";

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
  }, []);

  return { data, loading, error };

}
