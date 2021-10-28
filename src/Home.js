import { useState } from "react";

const Home = () => {

  // let name = 'Jimmy'
  const [name, setName] = useState("Jimmy")
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName("Bob");
    setAge(30);
  }


  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button style={{ color: "black" }} onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;