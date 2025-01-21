import * as C from "./styles";
import * as G from "../../GlobalStyles";
import erich from "../../assets/imgs/recomendações/erich-galvao.jpeg";
import fabio from "../../assets/imgs/recomendações/fabio-lima.jpeg";
import cristina from "../../assets/imgs/recomendações/cristina-lima.jpeg";
import cristian from "../../assets/imgs/recomendações/cristian-santos.jpeg";
import saulo from "../../assets/imgs/recomendações/saulo-mesquita.jpeg";
import orindo from "../../assets/imgs/recomendações/orindo-tobias.jpeg";
import rosiely from "../../assets/imgs/recomendações/rosiely-carrera.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface ComponentProps {
  id?: string;
}

export const Recomendations: React.FC<ComponentProps> = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function backToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <G.Container width="90%" margin="0 0 30px 0" column id={id}>
      <G.Title margin="0 0 50px 0">Recomendações</G.Title>

      <G.Container width="100%" justifyContent="center" column>
        <C.ContainerRecomendation data-aos="fade-right">
          <C.Img src={erich} />
          <C.Card>
            <C.Name>Erich Galvão - Coordenador de Operações TI Vale</C.Name>
            <C.Recomendation>
              Abraham stands out for his collaborative, proactive approach and responsibilities in the activities in which he is involved. These points certainly add value to any team. I recommend him
              in the certainty that he will deliver his best.
            </C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-left">
          <C.Img src={saulo} />
          <C.Card>
            <C.Name>Saulo Mesquita - Coordenador de Informática no Atacadão (Castanhal-PA)</C.Name>
            <C.Recomendation>
              Tive o prazer de liderar a equipe em que o Abraham participava, pessoa muito fácil de lidar, extremamente focado e estudioso, não deixa serviço para depois e quer resolver tudo o mais
              breve e de maneira mais satisfatória e bem executada possível, pontual, ágil, e parceiro dos colegas sempre se preocupando com as demandas da equipe e com o aprendizado de todos,
              estudante ávido, qualquer tempo livre procura desenvolver novas habilidades e ensina-las aos que o cercam.
            </C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-right">
          <C.Img src={fabio} />
          <C.Card>
            <C.Name>Fabio Lima - Gerente comercial no Atacadão (Castanhal-PA)</C.Name>
            <C.Recomendation>Um excelente profissional que tive a honra em trabalhar, exemplo em proatividade, muito bom trabalhando e equipe e com uma perfomance acima da média.</C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-left">
          <C.Img src={cristian} />
          <C.Card>
            <C.Name>Cristian Santos - Auxiliar de Informática no Atacadão</C.Name>
            <C.Recomendation>
              Trabalhar com Abraham foi uma experiência extremamente positiva. Ele é um profissional dedicado na área de TI, sempre disposto a auxiliar a equipe e compartilhar seus conhecimentos. Com
              uma excelente habilidade de comunicação, consegue explicar conceitos técnicos de maneira clara e acessível, facilitando a compreensão e colaboração entre colegas e clientes.
            </C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-right">
          <C.Img src={rosiely} />
          <C.Card>
            <C.Name>Rosiely Carrera - Auxiliar de Informática no Atacadão</C.Name>
            <C.Recomendation>
              Tive o prazer de trabalhar com Abraham, e posso dizer que ele é um profissional com quem você sempre pode contar. Ele resolve tudo com uma rapidez impressionante, sempre toma a
              iniciativa e está atento a tudo o que precisa ser feito para o bom funcionamento da equipe
            </C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-left">
          <C.Img src={cristina} />
          <C.Card>
            <C.Name>Cristina Lima - Analista de RH</C.Name>
            <C.Recomendation>
              Ele é um profissional ímpar, honesto, está sempre disposto a aprender. Não é de fofocas, procura sempre resolver situações pra contribuir com o clima organizacional, sua garra e talento
              sempre me conquistava.
            </C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>

        <C.ContainerRecomendation data-aos="fade-right">
          <C.Img src={orindo} />
          <C.Card>
            <C.Name>Orindo Tobias Jr - Coordenador de Logística</C.Name>
            <C.Recomendation>Colaborador dedicado, com alta capacidade de atendimento e desenvolvimento técnico e de muita integridade!</C.Recomendation>
          </C.Card>
        </C.ContainerRecomendation>
      </G.Container>

      <G.Container width="100%" justifyContent="end" onClick={backToTheTop}>
        <C.ButtonBackToTheTop>
          <C.SvgIcon className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </C.SvgIcon>
        </C.ButtonBackToTheTop>
      </G.Container>
    </G.Container>
  );
};
