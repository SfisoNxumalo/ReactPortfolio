import { useState, useEffect } from "react";

/**
 * Custom hook that uses the fetch API to make http calls
 * @param url url that a http request will be made to.
 * @returns The response body from the request in JSON format
 */
const useFetch = (url:string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(error => console.error(error));
  }, [url]);

  return [data];
};

export default useFetch;