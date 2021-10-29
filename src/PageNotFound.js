import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return ( 
    <div className="not-found">
      <h2 className="mb-5">Sorry!</h2>
      <p className="mb-5">The page you're looking for doesn't exist</p>
      <Link to='/' className='underline hover:text-red-500'>Back to the Home Page</Link>
    </div>
  );
}

export default PageNotFound;