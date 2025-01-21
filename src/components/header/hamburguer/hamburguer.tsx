import * as C from './styles';

export const Hamburger = () => {
  return (
    <C.HamburgerLabel>
      <C.HamburgerInput type='checkbox' />
      <C.HamburgerSVG viewBox='0 0 32 32'>
        <C.Line className='line line-top-bottom' d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22' />
        <C.Line className='line' d='M7 16 27 16' />
      </C.HamburgerSVG>
      <C.DropdownMenu>
        <C.MenuItem href='#begin'>Início</C.MenuItem>
        <C.MenuItem href='#about'>Sobre</C.MenuItem>
        <C.MenuItem href='#skills'>Tecnologias</C.MenuItem>
        <C.MenuItem href='#services'>Serviços</C.MenuItem>
        <C.MenuItem href='#projects'>Projetos</C.MenuItem>
        <C.MenuItem href='#recomendations'>Recomendações</C.MenuItem>
      </C.DropdownMenu>
    </C.HamburgerLabel>
  );
};

export default Hamburger;
