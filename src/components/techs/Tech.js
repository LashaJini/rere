import React from "react";

const techs = {
  github: React.lazy(() => import("./Github")),
  typescript: React.lazy(() => import("./Typescript")),
  javascript: React.lazy(() => import("./Javascript")),
  reactjs: React.lazy(() => import("./Reactjs")),
  nodejs: React.lazy(() => import("./Nodejs")),
};

const Tech = ({ name }) => {
  let TechLogo = <></>;

  if (techs.hasOwnProperty(name)) {
    TechLogo = techs[name];
  }

  return (
    <React.Suspense fallback={<div>OI</div>}>
      <TechLogo />
    </React.Suspense>
  );
};

export default Tech;
