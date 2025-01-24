import * as C from './styles';
import Hamburger from './hamburguer/hamburguer';
import Logo from '../logo/logo';
import { LangSwitcher } from './lang-switcher/lang-switcher';

export const Header = () => {
  return (
    <C.mainContainerHeader>
      <C.container>
        <Logo></Logo>
        <C.ContainerRight>
          <LangSwitcher></LangSwitcher>
          <Hamburger></Hamburger>
        </C.ContainerRight>
      </C.container>
    </C.mainContainerHeader>
  );
};

export default Header;
