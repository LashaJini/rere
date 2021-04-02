import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setValue = (value) => {
    console.log(value);
    try {
      value = typeof value === "function" ? value(state) : value;
      setState(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
