import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu.jpg';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

interface BeginProps {
  id?: string; // Tornamos `id` opcional
}

const Begin: React.FC<BeginProps> = ({ id }) => {
  return (
    <G.Container margin='150px 0 50px 0' width='90%' alignItems='center' justifyContent='space-between' id={id}>
      <C.containerBegin>
        <C.textoDigitando>
          <span>Abraham Licá</span>
          <span>Desenvolvedor Web Full-stack</span>
        </C.textoDigitando>

        <G.Container width='100%' justifyContent='space-between' alignItems='center' margin='30px 0'>
          <G.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank'>
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

          <G.Link href='https://wa.me/5591981661186' target='_blank'>
            <C.ContainerSocialMedia>
              <G.Img src={whatsapp} width='50px' />
              <G.Text margin='0 0 0 20px'>Whatsapp</G.Text>
            </C.ContainerSocialMedia>
          </G.Link>
        </G.Container>
      </C.containerBegin>
      <G.Img src={eu} width='300px' height='307px' borderRadius='50%' />
    </G.Container>
  );
};

export default Begin;
