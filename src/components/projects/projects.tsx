import * as C from './styles';
import * as G from '../../GlobalStyles';
import { Carrousel } from './carrousel/carrousel';
import CardInformations from './card-informations/card-informations';
import infopulse1 from '../../assets/imgs/projetos/infopulse/3.jpeg';

interface ComponentProps {
  id?: string;
}

export const Projects: React.FC<ComponentProps> = ({ id }) => {
  interface Project {
    name: string;
    description: string;
    images: string[];
    linkRepositoryFrontend?: string;
    linkRepositoryBackend?: string;
    linkProjectRunning?: string;
    techs: any[];
  }

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

  var Projects: Project[] = [
    {
      name: 'InfoPulse',
      description: 'Sistema de Notícias Web que permite aos usuários criar, ler, atualizar e excluir artigos de notícias (CRUD), gerenciar categorias e acessar recursos adicionais.',
      images: [
        infopulse1,
        '/src/assets/imgs/projetos/infopulse/4.jpeg',
        '/src/assets/imgs/projetos/infopulse/5.jpeg',
        '/src/assets/imgs/projetos/infopulse/6.jpeg',
        '/src/assets/imgs/projetos/infopulse/7.jpeg',
        '/src/assets/imgs/projetos/infopulse/8.jpeg',
        '/src/assets/imgs/projetos/infopulse/9.jpeg',
        '/src/assets/imgs/projetos/infopulse/10.jpeg',
        '/src/assets/imgs/projetos/infopulse/11.jpeg',
      ],
      linkRepositoryBackend: 'https://github.com/AbrahamLica/InfoPulse_Backend',
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/InfoPulse_frontend',
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: 'SisCopar',
      description:
        'Este é um sistema ERP interno feito para uma clínica odontológica chamada Copar Odontologia. O sistema conta com módulos de controle de estoque, cadastro de clientes e fornecedores, orçamentos, geração de relatórios, movimentação de documentos, registro de produção por dentista, controle financeiro, emissão de notas fiscais, entre outros.',
      images: [
        '/src/assets/imgs/projetos/siscopar/1.png',
        '/src/assets/imgs/projetos/siscopar/2.png',
        '/src/assets/imgs/projetos/siscopar/3.png',
        '/src/assets/imgs/projetos/siscopar/4.png',
        '/src/assets/imgs/projetos/siscopar/5.png',
        '/src/assets/imgs/projetos/siscopar/6.png',
        '/src/assets/imgs/projetos/siscopar/7.png',
      ],
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: 'SisRamos',
      description:
        'Este é um sistema ERP interno desenvolvido para a empresa de soluções ambientais Ramos Engenharia. Tive o privilégio de criar o front-end de alguns módulos, incluindo listagem, cadastro e edição de serviços prestados (CRUD), além de funcionalidades de listagem, cadastro e edição de orçamentos, entre outras telas.',
      images: ['/src/assets/imgs/projetos/sisramos/1.jpeg', '/src/assets/imgs/projetos/sisramos/2.jpeg', '/src/assets/imgs/projetos/sisramos/3.jpeg', '/src/assets/imgs/projetos/sisramos/4.jpeg'],
      techs: [techs.java, techs.springboot, techs.jhipster, techs.liquibase, techs.postgresql, techs.javascript, techs.typescript, techs.angular, techs.primeng, techs.tailwind],
    },
    {
      name: 'Book Finder',
      description:
        'Um buscador de livros que utiliza a API do Google Books API para realizar a requisição e retornar os livros desejados. Procurei criar o site com uma interface bem clean e elegante ao mesmo tempo.',
      images: ['/src/assets/imgs/projetos/book-finder/1.png', '/src/assets/imgs/projetos/book-finder/2.png'],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/Projeto-book-finder',
      linkProjectRunning: 'https://abrahamlica.github.io/Projeto-book-finder/',
      techs: [techs.html, techs.css, techs.javascript],
    },
    {
      name: 'Smart Wallet',
      description: 'Smart Wallet é um sistema de finanças que visa facilitar o controle das dívidas/salários ao decorrer dos meses do ano.',
      images: ['/src/assets/imgs/projetos/smart-wallet/1.png', '/src/assets/imgs/projetos/smart-wallet/2.png'],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/smart-wallet',
      linkProjectRunning: 'https://smart-wallet-eight.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
    {
      name: 'Marvel Database',
      description: 'Site criado usando a API da Marvel. Conheça mais dos seus personagens favoritos, quadrinhos e series.',
      images: ['/src/assets/imgs/projetos/marvel-database/1.png', '/src/assets/imgs/projetos/marvel-database/2.png', '/src/assets/imgs/projetos/marvel-database/3.png'],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/marvel-database',
      linkProjectRunning: 'https://marvel-studios-sandy.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
    {
      name: 'Movies Database',
      description: 'Um site de filmes, que utiliza a API do TMDB (The movie db) para listar os filmes com vários filtros diferentes.',
      images: ['/src/assets/imgs/projetos/movies-library/1.png', '/src/assets/imgs/projetos/movies-library/2.png', '/src/assets/imgs/projetos/movies-library/3.png'],
      linkRepositoryFrontend: 'https://github.com/AbrahamLica/movies-database',
      linkProjectRunning: 'https://movies-database-tan.vercel.app/',
      techs: [techs.react, techs.typescript, techs.styledcomponents],
    },
  ];

  return (
    <G.Container column width='90%' margin='70px 0' id={id}>
      <G.Title margin='0 0 60px 0'>Projetos</G.Title>

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
