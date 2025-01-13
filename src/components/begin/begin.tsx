import * as C from './styles';
import * as G from '../../GlobalStyles';
import eu from '../../assets/imgs/eu.jpg';

export const Begin = () => {
  return (
    <G.Container>
      <C.containerBegin>
        <C.nome>Abraham Licá</C.nome>
        <C.profissao>Desenvolvedor Web Full-stack</C.profissao>
      </C.containerBegin>
      <G.Img src={eu} />
    </G.Container>
  );
};

export default Begin;
