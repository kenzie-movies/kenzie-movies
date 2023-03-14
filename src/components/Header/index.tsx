import { Logo } from "../Logo";
import { StyledHeader } from "./style";
import FormSearch from "./Search";
import NavHeader from "./NavHeader";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledHeader>
      <Logo />

      {pathname === "/admin" || pathname === "/profile" ? null : <FormSearch />}

      <NavHeader />
    </StyledHeader>
  );
};

export default Header;
