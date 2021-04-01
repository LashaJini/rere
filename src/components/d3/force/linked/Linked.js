import React from "react";
// import "./Linked.scss";
import init, { Comp } from "./_each_and_call";

const Linked = () => {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Comp />
    </>
  );
};

export default Linked;
