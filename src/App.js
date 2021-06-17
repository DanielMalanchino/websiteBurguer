import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
