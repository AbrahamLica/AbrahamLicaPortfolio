import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu.jpg';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.svg';

export const Begin = () => {
  return (
    <G.Container margin='150px 0 50px 0' width='95%' alignItems='center' justifyContent='center'>
      <C.containerBegin>
        <C.nome>Abraham Licá</C.nome>
        <C.profissao>Desenvolvedor Web Full-stack</C.profissao>

        <G.Container width='100%' justifyContent='center' margin='30px 0'>
          <G.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank' margin='0 70px 0 0'>
            <C.ContainerSocialMedia>
              <G.Img src={linkedin} width='50px' />
              <G.Text margin='0 0 0 20px'>Linkedin</G.Text>
            </C.ContainerSocialMedia>
          </G.Link>

          <G.Link href='https://github.com/AbrahamLica' target='_blank'>
            <C.ContainerSocialMedia>
              <G.Img src={github} width='50px' />
              <G.Text margin='0 0 0 20px'>Github</G.Text>
            </C.ContainerSocialMedia>
          </G.Link>
        </G.Container>
      </C.containerBegin>
      <G.Img src={eu} width='400px' borderRadius='50%' />
    </G.Container>
  );
};

export default Begin;
