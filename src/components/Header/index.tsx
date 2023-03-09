import { Logo } from "../Logo";
import { HeaderStyle } from "./style";
import FormSearch from "./Search";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />

      <FormSearch />

      <NavHeader />
    </HeaderStyle>
  );
};

export default Header;
