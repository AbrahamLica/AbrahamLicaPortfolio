import * as C from './styles';
import * as G from '../../../GlobalStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CgLink } from 'react-icons/cg';

interface CardInformationsProps {
  name: string;
  description: string;
  linkRepositoryFrontend?: string;
  linkRepositoryBackend?: string;
  linkProjectRunning?: string;
  techs?: string[] | any;
}

export const CardInformations = ({ name, description, linkRepositoryFrontend, linkRepositoryBackend, linkProjectRunning, techs }: CardInformationsProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <C.MainContainer data-aos='fade-right'>
      <C.Title>{name}</C.Title>
      <C.Description>{description}</C.Description>
      <C.ContainerTechs>
        {techs.map((tech: any, index: number) => (
          <C.ContainerTech>
            <img src={tech} alt='Static Badge' />
          </C.ContainerTech>
        ))}
      </C.ContainerTechs>
      <C.ContainerButtons>
        {linkRepositoryFrontend && (
          <C.Button>
            <C.ButtonLink href={linkRepositoryFrontend} target='_blank' rel='noopener noreferrer' className='button_top'>
              Repositório Front-end <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}

        {linkRepositoryBackend && (
          <C.Button>
            <C.ButtonLink href={linkRepositoryFrontend} target='_blank' rel='noopener noreferrer' className='button_top'>
              Repositório Back-end <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}
        {linkProjectRunning && (
          <C.Button>
            <C.ButtonLink href={linkProjectRunning} target='_blank' rel='noopener noreferrer' className='button_top'>
              Projeto em execução <CgLink />
            </C.ButtonLink>
          </C.Button>
        )}
      </C.ContainerButtons>
    </C.MainContainer>
  );
};

export default CardInformations;
