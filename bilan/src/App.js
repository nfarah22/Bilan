import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'; 
import About from './About';
import './App.css';
import './HomePage.css'

function App() {
  return (
    <div className="App">
      <HomePage />
      <About/>
    </div>
  );
}

export default App;
