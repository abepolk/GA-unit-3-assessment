import React from 'react';
import './App.css';
import {reverseInt, maxChar} from './algos.js';

function App() {

  //State for form data
  const [formData, setFormData] = React.useState(null);

  //handlechange function
  const handleChange = (event) => {
      setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
  };
  const [result1, setResult1] = React.useState('');
  const [result2, setResult2] = React.useState('');

  const handleSubmit1 = (event) => {
    event.preventDefault();
    setResult1(reverseInt(formData.reverse))
  }
  
  const handleSubmit2 = (event) => {
    event.preventDefault();
    setResult2(maxChar(formData.max));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit1}>
        <label htmlFor="reverse">Reverse your Int</label>
        <input type="text" onChange={handleChange} name="reverse" />
        <input type="submit" value="reverse" />
      </form>
      <p>{result1}</p>
      <form onSubmit={handleSubmit2}>
        <label htmlFor="max">Max frequency char</label>
        <input type="text" onChange={handleChange} name="max" />
        <input type="submit" value="get max" />
      </form>
      <p>{result2}</p>
    </div>
  );
}

export default App;
