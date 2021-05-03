import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  width: ${(props) => (props._width ? props._width : "100%")};
  height: ${(props) => (props._height ? props._height : "100%")};
  // fill: var(--background-color-secondary);
  display: block; /* for the empty line... */
`;

const Path = styled.path`
  fill: ${({ fillColor }) => fillColor};
`;

/* width="208.25891mm" */
/* height="81.797447mm" */
const Divider2 = ({
  width,
  height,
  fill = "var(--background-color-primary)",
}) => {
  return (
    <>
      <SVG width={width} height={height} viewBox="0 0 208.25891 81.797447">
        <g id="layer1" transform="translate(-1.2696685,-214.9214)">
          <Path
            id="rect10"
            fillColor={"black"}
            d="m 1.2696685,214.9214 c 9.0459305,9.41604 19.0712905,11.65401 33.2953305,18.52069 48.70436,23.51209 44.29139,-21.37051 80.596071,-18.1118 18.50107,1.66066 33.10224,23.98309 51.20858,8.70187 16.02347,-13.52334 25.31655,-6.89649 43.15893,-9.11076 v 81.79745 H 1.2696685 Z"
          />
        </g>
      </SVG>
    </>
  );
};

function M(width, height) {
  return (
    <SVG width={width} height={height} viewBox="0 0 208.25891 81.797447">
      <g id="layer1" transform="translate(-1.2696685,-214.9214)">
        <Path
          id="rect10"
          fillColor={"black"}
          d="m 1.2696685,214.9214 c 9.0459305,9.41604 19.0712905,11.65401 33.2953305,18.52069 48.70436,23.51209 44.29139,-21.37051 80.596071,-18.1118 18.50107,1.66066 33.10224,23.98309 51.20858,8.70187 16.02347,-13.52334 25.31655,-6.89649 43.15893,-9.11076 v 81.79745 H 1.2696685 Z"
        />
      </g>
    </SVG>
  );
}

function NO(width, height) {
  <svg width={width} height={height} viewBox="0 0 1008 291">
    <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
  </svg>;
}

export default Divider2;
