import React from "react";
import { useLocalStorage, usePrefersDarkMode } from "./";

const useDarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage(
    "rere-dark-mode"
  );
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = isDarkModeEnabled ?? prefersDarkMode;

  React.useEffect(() => {
    const body = document.body;
    if (enabled) body.setAttribute("data-theme", "dark");
    else body.setAttribute("data-theme", "light");
  }, [enabled]);

  return [enabled, setIsDarkModeEnabled];
};

export default useDarkMode;
