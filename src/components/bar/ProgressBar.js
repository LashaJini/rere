import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "9px")};
  background-color: black;
  padding: 0.25rem;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25),
    inset 0 1px rgba(255, 255, 255, 0.1);
`;

const Bar = styled.div`
  width: ${(props) => (props.barWidth ? props.barWidth : "100%")};
  height: 100%;
  background-color: ${(props) => (props.barColor ? props.barColor : "#ff0000")};
  border-radius: 4px;
  transition: background-color 1s ease, width 1s ease;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
`;

const ProgressBar = ({ width, height, barWidth, barColor }) => {
  return (
    <>
      <Parent width={width} height={height}>
        <Bar barWidth={barWidth} barColor={barColor}></Bar>
      </Parent>
    </>
  );
};

export default ProgressBar;
