import { useTranslation } from 'react-i18next';
import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu.jpg';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

interface BeginProps {
  id?: string;
}

const Begin: React.FC<BeginProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <C.ContainerMain id={id}>
      <C.containerBegin>
        <C.textoDigitando>
          <span>{t('begin.name')}</span>
          <span>{t('begin.role')}</span>
        </C.textoDigitando>

        <C.ContainerSocialMedias>
          <G.Link href='https://www.linkedin.com/in/abraham-lica' target='_blank'>
            <C.ContainerSocialMedia>
              <C.Icon src={linkedin} />
              <C.TextSocialMedia>{t('begin.socialMedias.linkedin')}</C.TextSocialMedia>
            </C.ContainerSocialMedia>
          </G.Link>

          <G.Link href='https://github.com/AbrahamLica' target='_blank'>
            <C.ContainerSocialMedia>
              <C.Icon src={github} />
              <C.TextSocialMedia>{t('begin.socialMedias.github')}</C.TextSocialMedia>
            </C.ContainerSocialMedia>
          </G.Link>

          <G.Link href='https://wa.me/5591981661186' target='_blank'>
            <C.ContainerSocialMedia>
              <C.Icon src={whatsapp} />
              <C.TextSocialMedia>{t('begin.socialMedias.whatsapp')}</C.TextSocialMedia>
            </C.ContainerSocialMedia>
          </G.Link>
        </C.ContainerSocialMedias>
      </C.containerBegin>

      <C.Img src={eu} />
    </C.ContainerMain>
  );
};

export default Begin;
