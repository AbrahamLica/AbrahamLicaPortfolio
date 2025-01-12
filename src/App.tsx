import { useState } from 'react';
import Header from './components/header/header';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  console.log('teste');
  

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
