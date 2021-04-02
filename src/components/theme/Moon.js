import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  width: ${(props) => (props._width ? props._width : "24px")};
  height: ${(props) => (props._height ? props._height : "24px")};
`;

const Path = styled.path`
  fill: black;
  cursor: pointer;
`;

// TODO: fill color var; better handling
const Moon = ({ width, height, onClick }) => {
  return (
    <>
      <SVG _width={width} _height={height} viewBox="0 0 62.634243 60.367088">
        <g id="layer1" transform="translate(-71.120796,-112.96216)">
          <Path
            id="path113"
            d="m 119.1208,144.32925 a 24,24 0 0 1 -24.000004,24 24,24 0 0 1 -24,-24 24,24 0 0 1 24,-24 24,24 0 0 1 24.000004,24 z"
            onClick={onClick}
          />
          <path
            id="circle115"
            style={{
              fill: "var(--background-color-primary)",
            }}
            d="m 133.75504,131.96216 a 24,24 0 0 1 -24,24 24,24 0 0 1 -23.999997,-24 24,24 0 0 1 23.999997,-24 24,24 0 0 1 24,24 z"
          />
        </g>
      </SVG>
    </>
  );
};

export default Moon;
