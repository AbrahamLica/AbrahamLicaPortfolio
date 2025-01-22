import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu-2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaRegFile } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import resume from '../../assets/curriculo_abraham.pdf';

interface ComponentProps {
  id?: string;
}

export const About: React.FC<ComponentProps> = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <G.Container width='90%' justifyContent='space-between' data-aos='fade-up' id={id} backgroundColor='red'>
      <G.Container column width='50%' backgroundColor='purple'>
        <G.Title>Sobre mim</G.Title>
        <G.Text margin='30px 0 0 0' lineHeight='2.5rem'>
          Olá! Sou Abraham Licá, <G.Span>desenvolvedor Web Full Stack</G.Span> com mais de 1 ano de experiência como <G.Span>freelancer.</G.Span> Trabalho com <G.Span>Java (Spring Boot)</G.Span> e{' '}
          <G.Span>Javascript (Angular/React.js).</G.Span> Com um olhar atento às necessidades do cliente, estou sempre pronto para criar <G.Span>soluções eficientes e inovadoras</G.Span> que atendam
          às suas expectativas.
        </G.Text>
        <G.Container>
          <G.Button margin='20px 0' fontSize='1.3rem'>
            <G.ButtonLink href={resume} download className='button_top'>
              Baixar CV
              <IconContext.Provider value={{ style: { marginLeft: '8px', verticalAlign: 'middle' } }}>
                <FaRegFile />
              </IconContext.Provider>
            </G.ButtonLink>
          </G.Button>
        </G.Container>
      </G.Container>

      <C.Img src={eu} />
    </G.Container>
  );
};
