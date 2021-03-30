import React from "react";
import styled, { keyframes } from "styled-components";
import { UnstyledButton } from "../";

import { BREAKPOINTS } from "../../constants";

const wiggle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-13deg);
  }
  75% {
    transform: rotate(12deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Path = styled.path`
  stroke: red;
  width: 100px;

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 100ms;
  }
`;
const FilledPath = styled(Path)`
  fill: red;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${(p) => (p.shouldWiggle ? wiggle : null)} 350ms;
  }
`;
const IconWrapper = styled((props) => <UnstyledButton {...props} />)`
  opacity: 0.7;

  @media ${BREAKPOINTS.mdMin} {
    &:hover {
      opacity: 1;
    }
  }
`;

const SoundButton = ({ size = 22 }) => {
  const [triggerWiggle, setTriggerWiggle] = React.useState(false);

  return (
    <IconWrapper
      onClick={(ev) => {
        ev.preventDefault();

        setTriggerWiggle((prev) => !prev);
      }}
    >
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
        <FilledPath
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          stroke-linecap="round"
          stroke-linejoin="round"
          shouldWiggle={triggerWiggle}
        />
        <Path
          d={`
            M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
          `}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            opacity: triggerWiggle ? 1 : 0,
            transitionDelay: triggerWiggle ? "150ms" : "0ms",
          }}
        />
        <Path
          d={`
            M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475
          `}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            opacity: triggerWiggle ? 1 : 0,
            transitionDelay: triggerWiggle ? "0ms" : "150ms",
          }}
        />
      </svg>
    </IconWrapper>
  );
};

export default SoundButton;
