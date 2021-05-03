import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <div
      base=""
      white="#0f1923"
      pink="#ece8e1"
      height="54px"
      transition="0.3s ease-out all"
    >
      <a href="https://google.com">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">OI OI IO</span>
        </p>
      </a>
      <a className="white" href="https://google.com">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">OI OI IO</span>
        </p>
      </a>
      <a className="transparent" href="https://google.com">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">OI OI IO</span>
        </p>
      </a>
    </div>
  );
};

export default Button;
