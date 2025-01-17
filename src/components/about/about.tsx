import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu-2.png';

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

      <G.Img src={eu} width='300px' borderRadius='50%' />
    </G.Container>
  );
};

export default about;
