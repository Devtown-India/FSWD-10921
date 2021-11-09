import { useState } from 'react';
import One from './components/One';


const App = () => {

  const [data, setdata] = useState([{ password: "abcd" }, { password: "12345" }])

  return (
    <div>
      <One data={data} />
    </div>
  );
}

export default App;