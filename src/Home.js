const Home = () => {

  const handleClick = (e) => {
    console.log('HELLOOOOO', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('XXXXX -', name + e.target);
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button style={{ color: "black" }} onClick={handleClick}>Click Me</button>
      {/* Use the below method to call a function with a vaiable inside it, basically putting a function inside a function */}
      <button style={{ color: "black" }} onClick={(e) => handleClickAgain('Jimmy', e)}>Click me again</button>
    </div>
  );
}

export default Home;