import Logo from '../logo/logo';
import * as C from './styles';
import * as G from '../../GlobalStyles';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import email from '../../assets/icons/email.png';

export const Footer = () => {
  return (
    <C.ContainerFooter>
      <G.Container padding='15px' column width='50%'>
        <Logo></Logo>
        <p>© 2025 Abraham Melquisedeque Pereira Licá. Todos os direitos reservados.</p>
      </G.Container>

      <G.Container width='15%' justifyContent='space-between' padding='10px'>
        <G.Link href='https://github.com/AbrahamLica' target='_blank'>
          <C.Img src={github} />
        </G.Link>
        <G.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank'>
          <C.Img src={linkedin} />
        </G.Link>
        <G.Link href='mailto:abrahamlica451@gmail.com'>
          <C.Img src={email} />
        </G.Link>
      </G.Container>
    </C.ContainerFooter>
  );
};

export default Footer;
