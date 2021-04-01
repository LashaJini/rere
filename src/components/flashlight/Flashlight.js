import React from "react";
import styled from "styled-components";

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

  React.useEffect(() => {
    const [, transparent, rgba] = bkgImg.split(", ");
    const _update = update({ transparent, rgba });
    window.addEventListener("mousemove", _update);
    return () => window.removeEventListener("mousemove", _update);
  }, [bkgImg]);

  React.useEffect(() => {
    const transparent = "transparent 130px";
    const rgba = "rgba(0,0,0,0.95) 150px";
    const _update = update({ transparent, rgba });
    window.addEventListener("mousedown", _update);
    return () => window.removeEventListener("mousemove", _update);
  }, []);

  React.useEffect(() => {
    const transparent = "transparent 160px";
    const rgba = "rgba(0,0,0,0.85) 200px";
    const _update = update({ transparent, rgba });
    window.addEventListener("mouseup", _update);
    return () => window.removeEventListener("mousemove", _update);
  }, []);

  return (
    <>
      <Div className="spotlight" bkgImg={bkgImg}></Div>
    </>
  );
};

export default Flashlight;
