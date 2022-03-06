import { useState, useEffect } from "react";
import axios from "axios";

interface Response {
  data: any[];
  loading: boolean;
}

const useFetch = (url: string) => {
  const [resp, setResp] = useState<Response>({ data: [], loading: true });

  // Call the API once when the component mounts
  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setResp({ data: response.data, loading: false });
        }
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [url]);
  return { resp };
};

export default useFetch;
