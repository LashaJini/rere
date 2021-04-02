import React from "react";
import { useEventListener } from "./";

const usePrefersDarkMode = () => {
  let mql = window.matchMedia("(prefers-color-scheme: dark)");
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(false);

  const handler = (e) => {
    setPrefersDarkMode(e.matches);
  };
  useEventListener("change", handler, mql);
  return prefersDarkMode;
};

export default usePrefersDarkMode;
