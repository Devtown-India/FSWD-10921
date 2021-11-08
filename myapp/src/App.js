import { useState } from 'react'
import Calculator from './components/Calculator';

import Navbar from './layouts/Navbar'
import Info from './components/Info';
import Timer from './components/Timer';
import Tap from './components/Tap'



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Timer />
      <Calculator />
      <Tap />
    </div >
  );
}



export default App;

