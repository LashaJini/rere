import React from "react";
import styled from "styled-components";
import { useEventListener } from "../../hooks";

// TODO: useEventListener
// TODO: change pointer
// TODO: responsive

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(${(props) => props.bkgImg});
`;

const Flashlight = () => {
  const [bkgImg, setBkgImg] = React.useState(
    "circle, transparent 160px, rgba(0,0,0,0.85) 200px"
  );

  function update({ transparent, rgba }) {
    return (event) => {
      setBkgImg(
        `circle at ${(event.pageX / window.innerWidth) * 100}% ${
          (event.pageY / window.innerHeight) * 100
        }%, ${transparent}, ${rgba}`
      );
    };
  }

  useEventListener(
    "mousemove",
    (event) => {
      const [, transparent, rgba] = bkgImg.split(", ");
      update({
        transparent,
        rgba,
      })(event);
    },
    window,
    bkgImg
  );

  useEventListener(
    "mousedown",
    update({ transparent: "transparent 130px", rgba: "rgba(0,0,0,0.95) 150px" })
  );
  useEventListener(
    "mouseup",
    update({ transparent: "transparent 160px", rgba: "rgba(0,0,0,0.85) 200px" })
  );

  return (
    <>
      <Div className="spotlight" bkgImg={bkgImg}></Div>
    </>
  );
};

export default Flashlight;
