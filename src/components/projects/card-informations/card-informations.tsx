import * as C from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CgLink } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

interface CardInformationsProps {
  name: string;
  description: string;
  linkRepositoryFrontend?: string;
  linkRepositoryBackend?: string;
  linkProjectRunning?: string;
  techs?: string[] | any;
}

export const CardInformations = ({ name, description, linkRepositoryFrontend, linkRepositoryBackend, linkProjectRunning, techs }: CardInformationsProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <C.MainContainer data-aos='fade-right'>
      <C.Title>{name}</C.Title>
      <C.Description>{description}</C.Description>
      <C.ContainerTechs>
        {techs.map((tech: any) => (
          <C.ContainerTech key={tech}>
            <img src={tech} alt='Static Badge' />
          </C.ContainerTech>
        ))}
      </C.ContainerTechs>
      <C.ContainerButtons>
        {linkRepositoryFrontend && (
          <C.Button>
            <C.ButtonLink href={linkRepositoryFrontend} target='_blank' rel='noopener noreferrer' className='button_top'>
              {t('projects.cardButtons.repositoryFrontend')} <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}

        {linkRepositoryBackend && (
          <C.Button>
            <C.ButtonLink href={linkRepositoryBackend} target='_blank' rel='noopener noreferrer' className='button_top'>
              {t('projects.cardButtons.repositoryBackend')} <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}

        {linkProjectRunning && (
          <C.Button>
            <C.ButtonLink href={linkProjectRunning} target='_blank' rel='noopener noreferrer' className='button_top'>
              {t('projects.cardButtons.runningProject')} <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}
      </C.ContainerButtons>
    </C.MainContainer>
  );
};

export default CardInformations;
