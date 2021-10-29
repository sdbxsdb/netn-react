import { useParams } from "react-router";
<<<<<<< HEAD
import useFetch from './useFetch';
=======
import useFetch from './useFetch'
>>>>>>> dec03ee6231939b338b61ba3de164dcf35fa1b66

const BlogDetails = () => {

  const { id } = useParams()
<<<<<<< HEAD
  const { data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);

  return ( 
    <div className="blog-details">
      { isLoading && <div>Loading...</div>}
      { error && <div>Error - { error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p> { blog.author}</p>
=======
  const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
  
  return ( 
    <div className="blog-details">
      { isLoading && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>{ blog.author }</p>
>>>>>>> dec03ee6231939b338b61ba3de164dcf35fa1b66
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;