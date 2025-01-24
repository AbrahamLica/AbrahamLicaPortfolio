import * as C from './styles';
import * as G from '../../GlobalStyles';
import landing from '../../assets/icons/landing-pages.svg';
import erp from '../../assets/icons/erp.svg';
import api from '../../assets/icons/api.svg';
import seo from '../../assets/icons/seo.svg';
import maintence from '../../assets/icons/maintence.svg';
import blog from '../../assets/icons/blog.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ComponentProps {
  id?: string;
}

export const Services: React.FC<ComponentProps> = ({ id }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <G.Container column width='90%' margin='70px 0 0 0' id={id}>
      <G.Title margin='0 0 60px 0' data-aos='fade-down'>
        {t('services.title')}
      </G.Title>

      <C.ContainerServices data-aos='fade-up'>
        <C.ContainerService>
          <G.Img src={landing} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.landing.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.landing.description')}</C.TextServices>
        </C.ContainerService>

        <C.ContainerService>
          <G.Img src={erp} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.erp.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.erp.description')}</C.TextServices>
        </C.ContainerService>

        <C.ContainerService>
          <G.Img src={api} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.api.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.api.description')}</C.TextServices>
        </C.ContainerService>

        <C.ContainerService>
          <G.Img src={seo} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.seo.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.seo.description')}</C.TextServices>
        </C.ContainerService>

        <C.ContainerService>
          <G.Img src={maintence} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.maintenance.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.maintenance.description')}</C.TextServices>
        </C.ContainerService>

        <C.ContainerService>
          <G.Img src={blog} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>{t('services.list.blog.title')}</G.TitleSecondary>
          <C.TextServices>{t('services.list.blog.description')}</C.TextServices>
        </C.ContainerService>
      </C.ContainerServices>
    </G.Container>
  );
};
