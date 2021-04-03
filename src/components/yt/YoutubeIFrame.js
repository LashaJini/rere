import React from "react";
import styled from "styled-components";

// TODO: make background darker (blurry)
const IFrame = styled.iframe`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  border: none;
  position: absolute;
  z-index: 20;
  transition: display 3s;
`;

const YoutubeIFrame = ({ visible = false, width = "300", height = "300" }) => {
  const [display, setDisplay] = React.useState("none");

  React.useEffect(() => {
    setDisplay(visible ? "block" : "none");
  }, [visible]);

  return (
    <>
      <IFrame
        width={width}
        height={height}
        display={display}
        src="https://www.youtube.com/embed/pAgnJDJN4VA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></IFrame>
    </>
  );
};

export default YoutubeIFrame;
