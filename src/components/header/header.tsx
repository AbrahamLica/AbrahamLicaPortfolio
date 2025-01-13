import * as C from "./styles";
import Hamburger from "./hamburguer/hamburguer";
import Logo from "../logo/logo";

export const Header = () => {
  return (
    <C.mainContainerHeader>
      <C.container>
        <Logo></Logo>
        <Hamburger></Hamburger>
      </C.container>
    </C.mainContainerHeader>
  );
};

export default Header;
