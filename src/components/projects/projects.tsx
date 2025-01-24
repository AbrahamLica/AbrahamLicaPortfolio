import * as C from './styles';
import * as G from '../../GlobalStyles';
import { Carrousel } from './carrousel/carrousel';
import CardInformations from './card-informations/card-informations';
import infopulse1 from '../../assets/imgs/projetos/infopulse/3.jpeg';
import infopulse2 from '../../assets/imgs/projetos/infopulse/4.jpeg';
import infopulse3 from '../../assets/imgs/projetos/infopulse/5.jpeg';
import infopulse4 from '../../assets/imgs/projetos/infopulse/6.jpeg';
import infopulse5 from '../../assets/imgs/projetos/infopulse/7.jpeg';
import infopulse6 from '../../assets/imgs/projetos/infopulse/8.jpeg';
import infopulse7 from '../../assets/imgs/projetos/infopulse/9.jpeg';
import infopulse8 from '../../assets/imgs/projetos/infopulse/10.jpeg';
import infopulse9 from '../../assets/imgs/projetos/infopulse/11.jpeg';
import siscopar1 from '../../assets/imgs/projetos/siscopar/1.png';
import siscopar2 from '../../assets/imgs/projetos/siscopar/2.png';
import siscopar3 from '../../assets/imgs/projetos/siscopar/3.png';
import siscopar4 from '../../assets/imgs/projetos/siscopar/4.png';
import siscopar5 from '../../assets/imgs/projetos/siscopar/5.png';
import siscopar6 from '../../assets/imgs/projetos/siscopar/6.png';
import siscopar7 from '../../assets/imgs/projetos/siscopar/7.png';
import sisramos1 from '../../assets/imgs/projetos/sisramos/1.jpeg';
import sisramos2 from '../../assets/imgs/projetos/sisramos/2.jpeg';
import sisramos3 from '../../assets/imgs/projetos/sisramos/3.jpeg';
import sisramos4 from '../../assets/imgs/projetos/sisramos/4.jpeg';
import bookFinder1 from '../../assets/imgs/projetos/book-finder/1.png';
import bookFinder2 from '../../assets/imgs/projetos/book-finder/2.png';
import smartWallet1 from '../../assets/imgs/projetos/smart-wallet/1.png';
import smartWallet2 from '../../assets/imgs/projetos/smart-wallet/2.png';
import marvel1 from '../../assets/imgs/projetos/marvel-database/1.png';
import marvel2 from '../../assets/imgs/projetos/marvel-database/2.png';
import marvel3 from '../../assets/imgs/projetos/marvel-database/3.png';
import movies1 from '../../assets/imgs/projetos/movies-library/1.png';
import movies2 from '../../assets/imgs/projetos/movies-library/2.png';
import movies3 from '../../assets/imgs/projetos/movies-library/3.png';
import { useTranslation } from 'react-i18next';

interface ComponentProps {
  id?: string;
}

export const Projects: React.FC<ComponentProps> = ({ id }) => {
  const { t } = useTranslation();

  const techs = {
    html: 'https://img.shields.io/badge/HTML-gray?logo=html5',
    css: 'https://img.shields.io/badge/CSS-gray?logo=css3',
    java: 'https://img.shields.io/badge/Java-gray?logo=coffeescript',
    javascript: 'https://img.shields.io/badge/JavaScript-gray?logo=JavaScript',
    angular: 'https://img.shields.io/badge/Angular-gray?logo=angular',
    typescript: 'https://img.shields.io/badge/Typescript-gray?logo=typescript',
    springboot: 'https://img.shields.io/badge/Spring&boot-gray?logo=springboot',
    jhipster: 'https://img.shields.io/badge/Jhipster-gray?logo=jhipster',
    primeng: 'https://img.shields.io/badge/PrimeNG-gray?logo=primeng',
    liquibase: 'https://img.shields.io/badge/Liquibase-gray?logo=liquibase',
    postgresql: 'https://img.shields.io/badge/PostgreSQL-gray?logo=postgresql',
    tailwindcss: 'https://img.shields.io/badge/TailwindCSS-gray?logo=tailwindcss',
    tailwind: 'https://img.shields.io/badge/TailwindCSS-gray?logo=tailwindcss',
    react: 'https://img.shields.io/badge/React.js-gray?logo=react',
    styledcomponents: 'https://img.shields.io/badge/Styled&Components-gray?logo=styledcomponents',
  };

  const Projects = [
    {
      name: t('projects.InfoPulse.name'),
      description: t('projects.InfoPulse.description'),
      images: [infopulse1, infopulse2, infopulse3, infopulse4, infopulse5, infopulse6, infopulse7, infopulse8, infopulse9],
      linkRepositoryBackend: 'https://github.com/AbrahamLica/InfoPulse_Backend',
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/InfoPulse_frontend',
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: t('projects.SisCopar.name'),
      description: t('projects.SisCopar.description'),
      images: [siscopar1, siscopar2, siscopar3, siscopar4, siscopar5, siscopar6, siscopar7],
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: t('projects.SisRamos.name'),
      description: t('projects.SisRamos.description'),
      images: [sisramos1, sisramos2, sisramos3, sisramos4],
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: t('projects.BookFinder.name'),
      description: t('projects.BookFinder.description'),
      images: [bookFinder1, bookFinder2],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/Projeto-book-finder',
      linkProjectRunning: 'https://abrahamlica.github.io/Projeto-book-finder/',
      techs: [techs.html, techs.css, techs.javascript],
    },
    {
      name: t('projects.SmartWallet.name'),
      description: t('projects.SmartWallet.description'),
      images: [smartWallet1, smartWallet2],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/smart-wallet',
      linkProjectRunning: 'https://smart-wallet-eight.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
    {
      name: t('projects.MarvelDatabase.name'),
      description: t('projects.MarvelDatabase.description'),
      images: [marvel1, marvel2, marvel3],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/marvel-database',
      linkProjectRunning: 'https://marvel-studios-sandy.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
    {
      name: t('projects.MoviesDatabase.name'),
      description: t('projects.MoviesDatabase.description'),
      images: [movies1, movies2, movies3],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/movies-database',
      linkProjectRunning: 'https://movies-database-tan.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
  ];

  return (
    <G.Container column width='90%' margin='70px 0' id={id}>
      <G.Title margin='0 0 60px 0'>{t('projects.header')}</G.Title>

      {Projects.map((project, index) => (
        <C.ContainerProjects key={index}>
          <CardInformations
            name={project.name}
            description={project.description}
            linkRepositoryFrontend={project.linkRepositoryFrontend}
            linkRepositoryBackend={project.linkRepositoryBackend}
            linkProjectRunning={project.linkProjectRunning}
            techs={project.techs}
          />
          <Carrousel images={project.images} />
        </C.ContainerProjects>
      ))}
    </G.Container>
  );
};
