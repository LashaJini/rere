import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${(props) => props.fillColor};
`;

const FrontPath = styled.path`
  fill: ${(props) => props.fillColor};
  "font-variation-settings": "normal";
  opacity: 1;
  "vector-effect": "none";
  "fill-opacity": 1;
  "stroke-width": 0.229261;
  "stroke-linecap": "butt";
  "stroke-linejoin": "miter";
  "stroke-miterlimit": 4;
  "stroke-dasharray": "none";
  "stroke-dashoffset": 0;
  "stroke-opacity": 1;
  "stop-color": "#000000";
  "stop-opacity": 1;
`;

const SVG = styled.svg`
  width: ${(props) => (props._width ? props._width : "100")};
  height: ${(props) => (props._height ? props._height : "100")};
`;

// TODO: better handling color
const Divider = ({ width, height }) => {
  return (
    <>
      <SVG _width={width} _height={height} viewBox="0 0 199 30">
        <g id="layer1" transform="translate(0,-222)">
          <Path
            id="back"
            fillColor="var(--background-color-secondary)"
            d="M 0,222 H 50.000002 100 h 50 50 v 50 H 0 Z"
          />
          <FrontPath
            id="front"
            fillColor="var(--background-color-primary)"
            d="M 0,222.32871 90.92935,241.42052 105.65892,222 172.55664,241.78237 200,222.32871 V 273 H 0 Z"
          />
        </g>
      </SVG>
    </>
  );
};

export default Divider;
