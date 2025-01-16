import * as C from './styles';
import * as G from '../../GlobalStyles';
import html from '../../assets/icons/tech-icons/normal-icons/html.png';
import css from '../../assets/icons/tech-icons/normal-icons/css.png';
import javascript from '../../assets/icons/tech-icons/normal-icons/javascript.png';
import typescript from '../../assets/icons/tech-icons/normal-icons/typescript.png';
import react from '../../assets/icons/tech-icons/normal-icons/react.png';
import angular from '../../assets/icons/tech-icons/normal-icons/angular.png';

export const about = () => {
  return (
    <G.Container width='90%' justifyContent='space-between'>
      <G.Container column width='50%'>
        <G.Title>Sobre mim</G.Title>
        <G.Text margin='30px 0 0 0'>
          Olá! Sou Abraham Licá, <G.Span>desenvolvedor Web Full Stack</G.Span> com mais de 1 ano de experiência como <G.Span>freelancer.</G.Span> Trabalho com <G.Span>Java (Spring Boot)</G.Span> e{' '}
          <G.Span>Javascript (Angular/React.js).</G.Span> Com um olhar atento às necessidades do cliente, estou sempre pronto para criar <G.Span>soluções eficientes e inovadoras</G.Span> que atendam
          às suas expectativas.
        </G.Text>
        <G.Span margin='25px 0 0 0' fontSize='1.3rem'>
          Vamos transformar suas ideias em realidade!
        </G.Span>
      </G.Container>

      <G.Container width='50%' column alignItems='center'>
        <G.Title>Tecnologias</G.Title>

        <G.Container margin='30px 0 0' flexWrap>
          <G.Img src={html} width='60px' />
          <G.Img src={css} width='60px' />
          <G.Img src={javascript} width='60px' />
          <G.Img src={typescript} width='60px' />
          <G.Img src={react} width='60px' />
        </G.Container>
      </G.Container>
    </G.Container>
  );
};

export default about;
