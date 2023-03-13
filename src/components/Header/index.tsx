import { Logo } from "../Logo";
import { StyledHeader } from "./style";
import FormSearch from "./Search";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <FormSearch />

      <NavHeader />
    </StyledHeader>
  );
};

export default Header;
