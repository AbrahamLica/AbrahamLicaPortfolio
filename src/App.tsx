import { useState } from "react";
import Header from "./components/header/header";
import * as C from "./styles";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { GlobalStyle } from "./AppGlobalStyles";
import Title from "./components/title/title";
import Footer from "./components/footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <C.mainContainer>
        <Header></Header>




        <Title></Title>





        <Footer></Footer>
      </C.mainContainer>
    </>
  );
}

export default App;
