import React from 'react';
import Footer from './components/Footer';
import MainApp from './components/MainApp';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainApp/>
      <Footer/>
    </div>
  );
};


export default App;