import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import { useDarkMode } from "../../hooks";

const ThemeButton = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

  return (
    <>
      <Sun onClick={() => setDarkModeEnabled(true)} />
      <Moon onClick={() => setDarkModeEnabled(false)} />
    </>
  );
};

export default ThemeButton;
