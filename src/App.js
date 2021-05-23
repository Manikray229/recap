import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [nayoks, setNayoks] = useState([])
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])
  // const nayoks= [ {name: 'Jasim', age: 45}, {name: 'Shakib all hasan', age:45 }, {name:'Manik', age: 22}, {name: 'Baprraz', age:45}]
  return (
    <div className="App">

      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}



function MovieCounter(){
  const [ count, setCount ] = useState(0)
  // const handleIncrease = () => setCount(count +1);
  return(
    <div>
      <button onClick={() => setCount(count +1)}>Add Movies</button>
      <h3>Numbers of movies {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 2}></MovieDisplay>
      <MovieDisplay movies={count + 3}></MovieDisplay>
      <MovieDisplay movies={count + 4}></MovieDisplay>
    </div>
  )
}


function MovieDisplay(props){
  return(
    <div>
      <h3>I have movie acted: {props.movies}</h3>
    </div>
  )
}



function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok - {props.name}</h1>
      <h3>i have done 5 movies {props.age} years</h3>
    </div>
  )
}
export default App;
