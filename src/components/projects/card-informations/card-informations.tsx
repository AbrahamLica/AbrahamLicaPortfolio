import * as C from "./styles";
import * as G from "../../../GlobalStyles";

interface CardInformationsProps {
  name: string;
  description: string;
  linkRepositoryFrontend?: string;
  linkRepositoryBackend?: string;
  linkProjectRunning?: string;
}

export const CardInformations = ({ name, description, linkRepositoryFrontend, linkRepositoryBackend, linkProjectRunning }: CardInformationsProps) => {
  return (
    <G.Container width="40%" column>
      <C.Title>{name}</C.Title>
      <C.Description>{description}</C.Description>
      <G.Container>
        {linkRepositoryFrontend && (
          <C.Link href={linkRepositoryFrontend} target="_blank">
            Repositório Frontend
          </C.Link>
        )}
        {linkRepositoryBackend && (
          <C.Link href={linkRepositoryBackend} target="_blank">
            Repositório Backend
          </C.Link>
        )}
        {linkProjectRunning && (
          <C.Link href={linkProjectRunning} target="_blank">
            Projeto em Execução
          </C.Link>
        )}
      </G.Container>
    </G.Container>
  );
};

export default CardInformations;
