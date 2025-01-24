import * as C from './styles';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.svg';
import email from '../../assets/icons/email.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

interface ComponentProps {
  id?: string;
}
export const Footer: React.FC<ComponentProps> = ({ id }) => {
  return (
    <C.ContainerFooter>
      <C.ContainerLeft id={id}>
        <C.Logo>Abraham Licá</C.Logo>
        <C.Description>© 2025 Abraham Melquisedeque Pereira Licá. Todos os direitos reservados.</C.Description>
      </C.ContainerLeft>

      <C.ContainerRight>
        <C.Link href='https://github.com/AbrahamLica' target='_blank'>
          <C.Img src={github} />
        </C.Link>
        <C.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank'>
          <C.Img src={linkedin} />
        </C.Link>
        <C.Link href='https://wa.me/5591981661186' target='_blank'>
          <C.Img src={whatsapp} />
        </C.Link>
        <C.Link href='mailto:abrahamlica451@gmail.com'>
          <C.Img src={email} />
        </C.Link>
      </C.ContainerRight>
    </C.ContainerFooter>
  );
};
