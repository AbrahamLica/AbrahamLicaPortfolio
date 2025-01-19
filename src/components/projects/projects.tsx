import * as C from "./styles";
import * as G from "../../GlobalStyles";
import { useEffect, useState } from "react";
import Carrousel from "./carrousel/carrousel";
import CardInformations from "./card-informations/card-informations";
import teste from "../../assets/imgs/projetos/infopulse/1.jpeg";

export const Projects = () => {
  interface Project {
    name: string;
    description: string;
    images: string[];
    linkRepositoryFrontend?: string;
    linkRepositoryBackend?: string;
    linkProjectRunning?: string;
    techs: string[];
  }

  var Projects: Project[] = [
    {
      name: "InfoPulse",
      description: "Sistema de Notícias Web que permite aos usuários criar, ler, atualizar e excluir artigos de notícias (CRUD), gerenciar categorias e acessar recursos adicionais.",
      images: [
        "/src/assets/imgs/projetos/infopulse/3.jpeg",
        "/src/assets/imgs/projetos/infopulse/4.jpeg",
        "/src/assets/imgs/projetos/infopulse/5.jpeg",
        "/src/assets/imgs/projetos/infopulse/6.jpeg",
        "/src/assets/imgs/projetos/infopulse/7.jpeg",
        "/src/assets/imgs/projetos/infopulse/8.jpeg",
        "/src/assets/imgs/projetos/infopulse/9.jpeg",
        "/src/assets/imgs/projetos/infopulse/10.jpeg",
        "/src/assets/imgs/projetos/infopulse/11.jpeg",
      ],
      linkRepositoryBackend: "https://github.com/AbrahamLica/InfoPulse_Backend",
      linkRepositoryFrontend: "https://github.com/AbrahamLica/InfoPulse_frontend",
      techs: ["Java", "Spring boot", "Javascript", "Typescript", "Angular", "PrimeNG", "PrimeFlex", "Liquibase", "PostgreSQL", "TailwindCss"],
    },
    {
      name: "SisCopar",
      description:
        "Este é um sistema ERP interno feito para uma clínica odontológica chamada Copar Odontologia. O sistema conta com módulos de controle de estoque, cadastro de clientes e fornecedores, orçamentos, geração de relatórios, movimentação de documentos, registro de produção por dentista, controle financeiro, emissão de notas fiscais, entre outros.",
      images: [
        "/src/assets/imgs/projetos/siscopar/1.png",
        "/src/assets/imgs/projetos/siscopar/2.png",
        "/src/assets/imgs/projetos/siscopar/3.png",
        "/src/assets/imgs/projetos/siscopar/4.png",
        "/src/assets/imgs/projetos/siscopar/5.png",
        "/src/assets/imgs/projetos/siscopar/6.png",
        "/src/assets/imgs/projetos/siscopar/7.png",
      ],
      techs: ["Java", "Spring boot", "Jhipster", "Javascript", "Typescript", "Angular", "PrimeNG", "Liquibase", "PostgreSQL"],
    },
    {
      name: "SisRamos",
      description:
        "Este é um sistema ERP interno desenvolvido para a empresa de soluções ambientais Ramos Engenharia. Tive o privilégio de criar o front-end de alguns módulos, incluindo listagem, cadastro e edição de serviços prestados (CRUD), além de funcionalidades de listagem, cadastro e edição de orçamentos, entre outras telas.",
      images: [
        "/src/assets/imgs/projetos/sisramos/1.jpeg",
        "/src/assets/imgs/projetos/sisramos/2.jpeg",
        "/src/assets/imgs/projetos/sisramos/3.jpeg",
        "/src/assets/imgs/projetos/sisramos/4.jpeg",
        "/src/assets/imgs/projetos/sisramos/5.jpeg",
      ],
      techs: ["Java", "Spring boot", "Jhipster", "Javascript", "Typescript", "Angular", "PrimeNG", "Liquibase", "PostgreSQL"],
    },
    {
      name: "Book Finder",
      description:
        "Um buscador de livros que utiliza a API do Google Books API para realizar a requisição e retornar os livros desejados. Procurei criar o site com uma interface bem clean e elegante ao mesmo tempo.",
      images: ["/src/assets/imgs/projetos/book-finder/1.png", "/src/assets/imgs/projetos/book-finder/2.png"],
      linkRepositoryFrontend: "https://github.com/AbrahamLica/Projeto-book-finder",
      linkProjectRunning: "https://abrahamlica.github.io/Projeto-book-finder/",
      techs: ["Html", "Css", "Javascript"],
    },
    {
      name: "Smart Wallet",
      description: "Smart Wallet é um sistema de finanças que visa facilitar o controle das dívidas/salários ao decorrer dos meses do ano.",
      images: ["/src/assets/imgs/projetos/smart-wallet/1.png", "/src/assets/imgs/projetos/smart-wallet/2.png"],
      linkRepositoryFrontend: "https://github.com/AbrahamLica/smart-wallet",
      linkProjectRunning: "https://smart-wallet-eight.vercel.app/",
      techs: ["React", "Typescript", "Styled Components"],
    },
    {
      name: "Marvel Database",
      description: "Site criado usando a API da Marvel. Conheça mais dos seus personagens favoritos, quadrinhos e series.",
      images: ["/src/assets/imgs/projetos/marvel-database/1.png", "/src/assets/imgs/projetos/marvel-database/2.png", "/src/assets/imgs/projetos/marvel-database/3.png"],
      linkRepositoryFrontend: "https://github.com/AbrahamLica/marvel-database",
      linkProjectRunning: "https://marvel-studios-sandy.vercel.app/",
      techs: ["React", "Typescript", "Styled Components"],
    },
    {
      name: "Movies Database",
      description: "Um site de filmes, que utiliza a API do TMDB (The movie db) para listar os filmes com vários filtros diferentes.",
      images: ["/src/assets/imgs/projetos/movies-library/1.png", "/src/assets/imgs/projetos/movies-library/2.png", "/src/assets/imgs/projetos/movies-library/3.png"],
      linkRepositoryFrontend: "https://github.com/AbrahamLica/movies-database",
      linkProjectRunning: "https://movies-database-tan.vercel.app/",
      techs: ["React", "Typescript", "Styled Components"],
    },
  ];

  return (
    <G.Container column width="90%" margin="70px 0">
      <G.Title margin="0 0 60px 0">Projetos</G.Title>

      {Projects.map((project, index) => (
        <C.ContainerProjects key={index} >
          
            <CardInformations
              name={project.name}
              description={project.description}
              linkRepositoryFrontend={project.linkRepositoryFrontend}
              linkRepositoryBackend={project.linkRepositoryBackend}
              linkProjectRunning={project.linkProjectRunning}
            />
          
          
            <Carrousel images={project.images} />
          
        </C.ContainerProjects>
      ))}
    </G.Container>
  );
};

export default Projects;
