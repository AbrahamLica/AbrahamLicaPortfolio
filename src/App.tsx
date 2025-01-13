import { useState } from 'react';
import Header from './components/header/header';
import * as C from './styles';
import { GlobalStyle } from './AppGlobalStyles';
import Footer from './components/footer/footer';
import Begin from './components/begin/begin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <C.mainContainer>
        <Header></Header>

        <Begin></Begin>

        <Footer></Footer>
      </C.mainContainer>
    </>
  );
}

export default App;
