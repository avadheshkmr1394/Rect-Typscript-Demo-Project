import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student'

function App() {
  console.log(this)
  return (

    
    <div className="App">
      <Student />
    </div>
  );
}

export default App;
