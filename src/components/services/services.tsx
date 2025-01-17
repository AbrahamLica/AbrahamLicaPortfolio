import * as C from './styles';
import * as G from '../../GlobalStyles';
import landing from '../../assets/icons/landing-pages.svg';
import erp from '../../assets/icons/erp.svg';
import api from '../../assets/icons/api.svg';
import seo from '../../assets/icons/seo.svg';
import maintence from '../../assets/icons/maintence.svg';
import blog from '../../assets/icons/blog.svg';

export const Services = () => {
  return (
    <G.Container column width='90%' margin='70px 0 0 0'>
      <G.Title margin='0 0 60px 0'>Serviços contratáveis</G.Title>

      <G.Container alignItems='start' justifyContent='space-between' flexWrap width='100%'>
        <C.ContainerServices>
          <G.Img src={landing} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>Desenvolvimento de Sites e Landing Pages</G.TitleSecondary>
          <C.TextServices>Criação de sites e landing pages modernos, responsivos e focados em resultados para destacar sua marca.</C.TextServices>
        </C.ContainerServices>

        <C.ContainerServices>
          <G.Img src={erp} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>Soluções ERP Personalizadas</G.TitleSecondary>
          <C.TextServices>Desenvolvimento de sistemas ERP sob medida para integrar setores e otimizar processos empresariais.</C.TextServices>
        </C.ContainerServices>

        <C.ContainerServices>
          <G.Img src={api} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>APIs Poderosas e Integração de Terceiros</G.TitleSecondary>
          <C.TextServices>
            Criação e integração de APIs com Java (Spring Boot) para conectar sistemas com desempenho e segurança, incluindo integração com APIs populares como Stripe, PayPal e redes sociais.
          </C.TextServices>
        </C.ContainerServices>

        <C.ContainerServices>
          <G.Img src={seo} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>Otimização de Performance de Sistemas</G.TitleSecondary>
          <C.TextServices>Análise e melhorias em aplicações web para garantir alta performance, reduzindo tempo de carregamento e aumentando a eficiência.</C.TextServices>
        </C.ContainerServices>

        <C.ContainerServices>
          <G.Img src={maintence} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>Manutenção de Sistemas Legados</G.TitleSecondary>
          <C.TextServices>Atualização, correção de bugs e modernização de sistemas já existentes, mantendo sua funcionalidade e otimizando a experiência do usuário.</C.TextServices>
        </C.ContainerServices>

        <C.ContainerServices>
          <G.Img src={blog} width='50px' margin='0 0 10px 0' />
          <G.TitleSecondary>Desenvolvimento de Blogs/Portais</G.TitleSecondary>
          <C.TextServices>Criação de sites focados em publicação de artigos, notícias ou conteúdo multimídia, otimizados para SEO e experiência do usuário.</C.TextServices>
        </C.ContainerServices>
      </G.Container>
    </G.Container>
  );
};

export default Services;
