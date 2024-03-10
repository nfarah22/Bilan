import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'; 
import About from './About';
import Testimonials from './Testimonials';
import ContactPage from './ContactPage';
import Footer from './Footer';
import './App.css';
import './HomePage.css'

function App() {
  return (
    <div className="App">
      <HomePage />
      <About/>
      <Testimonials/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
