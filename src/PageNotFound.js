import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>The page you're looking for doesn't exist</p>
      <Link to='/'>Back to the Home Page</Link>
    </div>
   );
}

export default PageNotFound;