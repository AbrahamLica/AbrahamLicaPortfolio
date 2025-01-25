import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu-2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaRegFile } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import resumePT from '../../assets/curriculo_abraham.pdf';
import resumeEN from '../../assets/curriculo_abraham_en.pdf'
import { useTranslation } from 'react-i18next';

interface ComponentProps {
  id?: string;
}

export const About: React.FC<ComponentProps> = ({ id }) => {
  const { t, i18n } = useTranslation();

  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <C.MainContainer data-aos='fade-up' id={id}>
      <C.IntroductionContainer>
        <G.Title>{t('about.title')}</G.Title>
        <G.Text margin='30px 0 0 0' lineHeight='2.5rem'>
          {t('about.introduction.greeting')} <G.Span>{t('about.introduction.text1')}</G.Span> {t('about.introduction.text2')} <G.Span>{t('about.introduction.text3')}</G.Span>{' '}
          {t('about.introduction.text4')} <G.Span>{t('about.introduction.text5')}</G.Span> {t('about.introduction.text6')} <G.Span>{t('about.introduction.text7')}</G.Span>{' '}
          {t('about.introduction.text8')} <G.Span>{t('about.introduction.text9')}</G.Span> {t('about.introduction.text10')}
        </G.Text>

        <G.Container>
          <G.Button margin='20px 0' fontSize='1.3rem'>
            <G.ButtonLink href={i18n.language === 'en' ? resumeEN : resumePT} download className='button_top'>
              {t('about.button')}
              <IconContext.Provider value={{ style: { marginLeft: '8px', verticalAlign: 'middle' } }}>
                <FaRegFile />
              </IconContext.Provider>
            </G.ButtonLink>
          </G.Button>
        </G.Container>
      </C.IntroductionContainer>

      <C.ImgContainer>
        <C.Img src={eu} />
      </C.ImgContainer>
    </C.MainContainer>
  );
};
