import * as C from "./styles";
import * as G from "../../GlobalStyles";

export const Projects = () => {
  return (
    <G.Container column width="90%" margin="70px 0">
      <G.Title margin='0 0 60px 0'>Projetos</G.Title>

      <C.ContainerProject>
        <G.Container column width="30%">
          <C.Title>InfoPulse</C.Title>
          <C.Description>
            Sistema de Notícias Web que permite aos usuários criar, ler, atualizar e excluir artigos de notícias (CRUD), gerenciar categorias e acessar recursos adicionais.
          </C.Description>
          <C.Link href="https://github.com/AbrahamLica/InfoPulse_frontend" target="_blank">Repositório Front-end</C.Link>
          <C.Link href="https://github.com/AbrahamLica/InfoPulse_Backend" target="_blank">Repositório Back-end</C.Link>
        </G.Container>

        <G.Container column width="30%">
        //aqui vai o slider com as imagens

        </G.Container>
      </C.ContainerProject>
    </G.Container>
  );
};

export default Projects;
