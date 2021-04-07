import React from "react";
import styled from "styled-components";
import "./CtaButton.scss";

const FFS = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: yellow;
`;

const Wrapper = styled.div`
  height: 3000px;
  width: 100%;
`;

const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Div = styled.div`
  width: 50px;
  height: 50px;
  background: green;
`;

const Bottom = styled.div`
  height: 100px;
  width: 100px;
  background: #c00;
  cursor: pointer;

  // bottom: 100%;

  // top: 0%;
  // left: 0%;

  // bottom: 100%;
  transition: all 1s ease;
`;

const CtaButton = () => {
  const observer = React.useRef();
  const elemRef = React.useRef();
  const ctaRef = React.useRef();

  React.useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    observer.current.observe(elemRef.current);
  }, []);

  function handleIntersect(entries, observer) {
    if (!entries[0].isIntersecting && entries[0].intersectionRatio === 0) {
      if (!ctaRef.current.classList.contains("move")) {
        let currentX = ctaRef.current.getBoundingClientRect().x;
        let newRelativeX = currentX;
        // newRelativeX = newRelativeX < 0 ? 0 : newRelativeX;

        // console.log(
        //   "window:",
        //   window.innerWidth,
        //   "currentX",
        //   currentX,
        //   "newRelativeX:",
        //   newRelativeX,
        //   "newX",
        //   currentX + newRelativeX
        // );

        ctaRef.current.classList.add("move");
        ctaRef.current.style.setProperty("--x", `${newRelativeX}px`);

        // ctaRef.current.style.setProperty(
        //   "--x",
        //   `calc(100vw - ${currentX}px - 100%)`
        // );
      }
    } else {
      ctaRef.current.classList.remove("move");
    }
  }

  // // const oiRef = React.useRef();
  // React.useEffect(() => {
  //   // clearTimeout(oiRef.current);
  //   // oiRef.current = recalculate;
  //   // window.addEventListener("resize", oiRef.current);
  //   // return () => window.removeEventListener("resize", oiRef.current);
  //   function oi(event) {
  //     let cta = ctaRef.current.getBoundingClientRect();
  //     let currentX = cta.x;
  //     let viewportX = event.target.innerWidth;
  //     let newRelativeX =
  //       currentX <= viewportX ? viewportX - currentX : currentX - viewportX;
  //     console.log("resized", event.target.innerWidth, "rect", cta);
  //     console.log(
  //       "window:",
  //       window.innerWidth,
  //       "currentX",
  //       currentX,
  //       "newRelativeX:",
  //       newRelativeX,
  //       "newX",
  //       currentX + newRelativeX
  //     );
  //     ctaRef.current.style.backgroundColor = "white";
  //     // ctaRef.current.style.transform = "translate(50%)";
  //     ctaRef.current.style.setProperty("--x", `${newRelativeX}px`);
  //   }
  //   window.addEventListener("resize", oi);
  //   return () => window.removeEventListener("resize", oi);
  // }, []);

  // function recalculate() {
  //   setTimeout(() => {
  //     if (ctaRef.current.classList.contains("move")) {
  //       let currentX = Math.floor(ctaRef.current.getBoundingClientRect().x);
  //       let newRelativeX = window.innerWidth - currentX - 100;
  //       newRelativeX = newRelativeX < 0 ? 0 : newRelativeX;
  //       console.log(
  //         "window:",
  //         window.innerWidth,
  //         "currentX",
  //         currentX,
  //         "newRelativeX:",
  //         newRelativeX,
  //         "newX",
  //         currentX + newRelativeX
  //       );
  //       ctaRef.current.style.setProperty("--x", `calc(${newRelativeX}px)`);
  //     }
  //   }, 100);
  // }

  return (
    <Wrapper>
      <HeaderMenu>
        <Div ref={elemRef}></Div>
        <Bottom ref={ctaRef}></Bottom>
      </HeaderMenu>
      <FFS></FFS>
    </Wrapper>
  );
};

export default CtaButton;
