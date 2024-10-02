import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo className="logo" />

      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
