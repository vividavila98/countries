import { useState, useEffect } from "react";
import axios from "axios";

interface Response {
  data: any[];
  loading: boolean;
}

// everytime you type in the search field, this gets re-rendered
// that's fine, what I don't want recalculated everytime is the filter function
// wait no i do want that recalculated when region and search change
// but i want the calculation saved if ive done it before
// if the region is africa, then i change it to europe, then go back to africa,
// i dont want the africa calculation done all over again.
// if usememo doesnt apply i can try normal memoization
// im assuming the filter function to be a really slow calculation

// maybe i can use usecallback here so usefetch isnt called whenever i type? not sure
// i can focus on this later

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
