import * as C from './styles';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.svg';
import email from '../../assets/icons/email.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import { useTranslation } from 'react-i18next';

interface ComponentProps {
  id?: string;
}

export const Footer: React.FC<ComponentProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <C.ContainerFooter>
      <C.ContainerLeft id={id}>
        <C.Logo>{t('footer.logo')}</C.Logo>
        <C.Description>{t('footer.description')}</C.Description>
      </C.ContainerLeft>

      <C.ContainerRight>
        <C.Link href='https://github.com/AbrahamLica' target='_blank'>
          <C.Img src={github} alt={t('footer.links.github')} />
        </C.Link>
        <C.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank'>
          <C.Img src={linkedin} alt={t('footer.links.linkedin')} />
        </C.Link>
        <C.Link href='https://wa.me/5591981661186' target='_blank'>
          <C.Img src={whatsapp} alt={t('footer.links.whatsapp')} />
        </C.Link>
        <C.Link href='mailto:abrahamlica451@gmail.com'>
          <C.Img src={email} alt={t('footer.links.email')} />
        </C.Link>
      </C.ContainerRight>
    </C.ContainerFooter>
  );
};
