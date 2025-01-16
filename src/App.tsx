import { useState } from 'react';
import Header from './components/header/header';
import * as C from './styles';
import { GlobalStyle } from './AppGlobalStyles';
import Footer from './components/footer/footer';
import Begin from './components/begin/begin';
import About from './components/about/about';
import Services from './components/services/services';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <C.mainContainer>
        <Header />

        <Begin />

        <About />

        <Services />

        <Footer />
      </C.mainContainer>
    </>
  );
}

export default App;
