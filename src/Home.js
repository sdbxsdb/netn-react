
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  // date: blogs below = this means grab the data and call it blogs, this can be used to reuse the useFetch and we can call the data whatever we want then rather than always calling it data
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return ( 
    <div className="home">
      { error && <div>Error - {error}</div>}
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs"} /> }
    </div>
  );

}

export default Home;