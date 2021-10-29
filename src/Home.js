import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return ( 
    <div className="home">
      {/* If blogs is null (false) it won't get past the && and wont do the next part - if there is data in the blogs it will move to the next step after the && and output the blogs without throwing and error */}
      { blogs && <BlogList blogs={blogs} title={"All Blogs!"} /> }
    </div>
  );
}

export default Home;