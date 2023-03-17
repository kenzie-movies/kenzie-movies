import { Logo } from "../Logo";
import { StyledHeader, StyledHeaderMobile } from "./style";
import FormSearch from "./Search";
import NavHeader from "./NavHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <Logo />

        {pathname === "/admin" || pathname === "/profile" ? null : (
          <FormSearch />
        )}

        <NavHeader />
      </StyledHeader>

      <StyledHeaderMobile isOpen={isOpen}>
        <Logo />
        <button className="bars" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <FaBars size={20} /> : <HiX size={30} />}
        </button>

        <div className="menu-mobile">
          {pathname === "/admin" || pathname === "/profile" ? null : (
            <FormSearch />
          )}

          <NavHeader />
        </div>
      </StyledHeaderMobile>
    </>
  );
};

export default Header;
