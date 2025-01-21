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
}

export const CardInformations = ({ name, description, linkRepositoryFrontend, linkRepositoryBackend, linkProjectRunning }: CardInformationsProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <G.Container width='50%' column data-aos='fade-right'>
      <C.Title>{name}</C.Title>
      <C.Description>{description}</C.Description>
      <G.Container padding='7px 0' width='100%' justifyContent='space-between'>
        {linkRepositoryFrontend && (
          <G.Button>
            <G.ButtonLink href={linkRepositoryFrontend} target='_blank' rel='noopener noreferrer' className='button_top'>
              Repositório Front-end <CgLink />
            </G.ButtonLink>
          </G.Button>
        )}

        {linkRepositoryBackend && (
          <G.Button>
            <G.ButtonLink href={linkRepositoryFrontend} target='_blank' rel='noopener noreferrer' className='button_top'>
              Repositório Back-end <CgLink />
            </G.ButtonLink>
          </G.Button>
        )}
        {linkProjectRunning && (
          <G.Button>
            <G.ButtonLink href={linkProjectRunning} target='_blank' rel='noopener noreferrer' className='button_top'>
              Projeto em execução <CgLink />
            </G.ButtonLink>
          </G.Button>
        )}
      </G.Container>
    </G.Container>
  );
};

export default CardInformations;
