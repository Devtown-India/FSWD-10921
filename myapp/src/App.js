import { useState, useEffect } from 'react'
import Calculator from './components/Calculator';

import Navbar from './layouts/Navbar'
import Info from './components/Info';
import Timer from './components/Timer';
import Tap from './components/Tap'


const App = () => {
  // const currentComp = 'calculator'
  const [currentComp, setcurrentComp] = useState('info')

  // if (currentComp === 'calculator') return <Calculator />
  // else if (currentComp === 'timer') return <Timer />
  // else if (currentComp === 'tap') return <Tap />
  // else return <Info />

  return (
    <div className="App">
      <Navbar setcurrentComp={setcurrentComp} />
      {
        currentComp === 'calculator' ? <Calculator />
          : currentComp === "timer" ? <Timer />
            : currentComp === 'tap' ? <Tap />
              : <Info />
      }
      {/* <Info />
      <Timer />
      <Calculator />
      <Tap /> */}
    </div >
  );
}

export default App;

