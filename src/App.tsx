import Header from './components/header/header';
import * as C from './styles';
import { GlobalStyle } from './AppGlobalStyles';
import { Footer } from './components/footer/footer';
import Begin from './components/begin/begin';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Skills } from './components/skills/skills';
import { Recomendations } from './components/recomendations/recomendations';
import { Projects } from './components/projects/projects';

function App() {
  return (
    <>
      <GlobalStyle />
      <C.mainContainer>
        <Header />
        <Begin id='begin' />
        <About id='about' />
        <Skills id='skills' />
        <Services id='services' />
        <Projects id='projects' />
        <Recomendations id='recommendations' />
        <Footer id='footer' />
      </C.mainContainer>
    </>
  );
}

export default App;
