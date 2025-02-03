import { useState, useEffect, useMemo } from "react";

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