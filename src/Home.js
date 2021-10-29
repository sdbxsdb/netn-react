import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);


  // setTimeout function is only to simulate loading the data in because ours comes in so quickly

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw new Error('Could not fetch data for that resource');
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(error => {
          setIsLoading(false);
          setError(error.message);
        })
    }, 1000);
  }, []);

  return ( 
    <div className="home">
      { error && <div>Error - {error}</div>}
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs!"} /> }
    </div>
  );
}

export default Home;