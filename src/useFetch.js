import { useState, useEffect } from "react";

// This is a custom hook and all custom hooks MUST start with the word 'use'.

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();


      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw new Error('Could not fetch data for that resource');
          }
          return res.json()
        })
        // The 'data' in the then is different to the const data being set, it just has the same name
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(error => {
          if (error.name === 'AbortError') {
            console.log("Fetch Aborted")
          } else {
            setIsLoading(false);
            setError(error.message);
          }
        });

      return() => abortCont.abort();    
  }, [url]);

  return { data, isLoading, error };
  
}



export default useFetch;