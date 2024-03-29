import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import "./Tooltip.scss";

const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  display: ${(props) => props.display};
  top: ${(props) => props.t};
  left: ${(props) => props.l};
  text-align: center;
  justify-content: center;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  font-size: 0.9rem;
  position: absolute;
  z-index: 10;
  padding: 0.75rem;
  transition: scale 200ms;

  white-space: nowrap;
  word-wrap: no-wrap;
`;

const Tooltip = ({
  text,
  position = "bottom",
  width = "75px",
  height = "18px",
  color = "white",
  bgColor = "var(--background-color-primary)",
  visible = false,
  style = {},
}) => {
  const [obj, setObj] = React.useState({ display: "none" });

  let l = "50%";
  let t = "35px";

  if (position === "top") {
    l = "50%";
    t = "-55px";
  }

  React.useEffect(() => {
    setObj(
      visible
        ? {
            display: "flex",
          }
        : {
            display: "none",
          }
    );
  }, [visible]);

  return (
    <CSSTransition in={visible} timeout={100} classNames="tooltip">
      {(state) => (
        <Div
          t={t}
          l={l}
          display={obj.display}
          width={width}
          height={height}
          color={color}
          bgColor={bgColor}
          style={style}
          state={state}
          className="tooltip"
        >
          {text}
        </Div>
      )}
    </CSSTransition>
  );
};

export default Tooltip;
