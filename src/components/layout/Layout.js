import React from "react";
import styled from "styled-components";
import {
  MusicPlayer,
  Footer,
  ProjectCard,
  Logo,
  ThemeButton,
  Divider2 as Divider,
  Bell,
} from "..";
import { useEventListener } from "../../hooks";
import "./Layout.scss";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  // z-index: 1;
`;

const GridItem = styled.div`
  // border: 1px solid white;
  margin: 0;
  padding: 0;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--background-color-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${({ col }) => (col ? col : "1")};
  grid-row: ${({ row }) => (row ? row : "1")};
`;

const LogoItem = styled(GridItem)`
  position: sticky;
  top: 0;
  // z-index: -1;
`;
const NavItem = styled(GridItem)``;
const DividerItem = styled(GridItem)`
  // height: 500px;
  // position: absolute;
  // left: 0;
  background: var(--background-color-secondary);
  // z-index: 4;
`;
const ProjectsItem = styled(GridItem)`
  // margin: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`;
const ProjectItem = styled(GridItem)`
  @media (min-width: 320px) {
    grid-column: span 4;
    grid-row: ${({ nth }) => nth};
  }

  @media (min-width: 720px) {
    grid-column: ${({ nth }) => (nth % 2 === 0 ? "3/5" : "1/3")};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 2 + 1)};
  }

  @media (min-width: 1280px) {
    grid-column: ${({ nth }) => {
      switch (nth % 4) {
        case 0:
          return "4/5";
        case 1:
          return "3/4";
        case 2:
          return "2/3";
        case 3:
          return "1/2";
        default:
          return "span 4";
      }
    }};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 4 + 1)};
  }
`;
const Whoami = styled(GridItem)``;
const Into = styled(GridItem)``;
const TechGlobe = styled(GridItem)``;
const FooterItem = styled(GridItem)``;

const Div = styled.div`
  width: 100%;
  height: 1px;
  // background-color: green;
  position: fixed;
  bottom: 0;
  display: block;
`;

const CTA = styled.div``;

const Layout = () => {
  const logoElementRef = React.useRef();
  const observer = React.useRef();
  const ctas = React.useRef();
  const handleIntersectRef = React.useRef();
  // const [relativeCtaX, setRelativeCtaX] = React.useState(0);
  // const [currentCtaX, setCurrentCtaX] = React.useState(0);

  React.useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(
      handleIntersectRef.current,
      options
    );
    observer.current.observe(logoElementRef.current);
  }, []);

  React.useEffect(() => {
    // window.scroll(0, 0); // on first render (on refresh) go to the top of the window
    let cta = document.querySelector("#oioi").getBoundingClientRect().x;
    // let newRelativeCtaX = Math.floor(
    //   Math.abs((window.innerWidth - cta - 50) / 2)
    // );
    document.documentElement.style.setProperty(
      "--cta-button-location-x",
      `${-cta}px`
    );
    // setCurrentCtaX(cta);
  }, []);

  // // bad bad bad
  // let oi;
  // useEventListener(
  //   "resize",
  //   () => {
  //     clearTimeout(oi);
  //     oi = setTimeout(() => {
  //       let newRelativeCtaX = Math.floor(
  //         Math.abs((window.innerWidth - currentCtaX - 50) / 2)
  //       );
  //       document.documentElement.style.setProperty(
  //         "--cta-button-location-x",
  //         `${newRelativeCtaX}px`
  //       );
  //     }, 300);
  //   },
  //   window,
  //   [currentCtaX]
  // );

  handleIntersectRef.current = function (entries, observer) {
    if (!entries[0].isIntersecting && entries[0].intersectionRatio === 0) {
      document.querySelector("#oioi").classList.add("cta-visible");
      document.querySelector(".nav-buttons").classList.remove("visible");
    } else {
      document.querySelector("#oioi").classList.remove("cta-visible");
      document.querySelector(".nav-buttons").classList.add("visible");
      removeNavButtonVisiblity();
    }
  };

  function toggleNavButtonVisibility(event) {
    document
      .querySelector(".cta-center-button")
      .classList.toggle("display-nav-buttons");
  }

  function removeNavButtonVisiblity() {
    document
      .querySelector(".cta-center-button")
      .classList.remove("display-nav-buttons");
  }

  useEventListener("click", (event) => {
    let target = event.target;
    // because path...g...svg...
    if (target.classList && !target.classList.contains("cta-center-button")) {
      if (
        !(
          (target.classList && target.classList.contains("nav-button")) ||
          (target.parentNode.classList &&
            target.parentNode.classList.contains("nav-button")) ||
          (target.parentNode.parentNode.classList &&
            target.parentNode.parentNode.classList.contains("nav-button")) ||
          (target.parentNode.parentNode.parentNode.classList &&
            target.parentNode.parentNode.parentNode.classList.contains(
              "nav-button"
            ))
        )
      ) {
        removeNavButtonVisiblity();
      }
    }
  });

  return (
    <>
      <Grid>
        <LogoItem
          bgColor="var(--background-color-secondary)"
          col="1/8"
          ref={logoElementRef}
        >
          <Logo />
        </LogoItem>

        <NavItem bgColor="var(--background-color-secondary)" col="8/13">
          <CTA id="oioi" className="cta">
            <div
              className="cta-center-button"
              onClick={toggleNavButtonVisibility}
            ></div>
            <div className="nav-buttons" ref={ctas}>
              <div className="nav-button theme-toggler">
                <ThemeButton />
              </div>
              <div className="nav-button sound-toggler">
                <Bell />
              </div>
              <div className="nav-button music-toggler">
                <MusicPlayer
                  prevButtonIsVisible={false}
                  nextButtonIsVisible={false}
                  translateNextButton={{ x: "50%", y: "150%" }}
                  translatePrevButton={{ x: "-50%", y: "150%" }}
                />
              </div>
            </div>
          </CTA>
        </NavItem>

        <DividerItem col="span 12" row="2">
          <Divider />
        </DividerItem>

        <GridItem col="span 12" row="3">
          <h2 style={{ color: "white" }}>Whoami</h2>
        </GridItem>

        <Whoami col="span 12" row="4">
          <p>
            I am a student, a dog owner. This was the most boring thing to do in
            this project.
          </p>
        </Whoami>

        <GridItem col="span 12" row="5">
          <h2 style={{ color: "white" }}>Recent Projects</h2>
        </GridItem>

        <GridItem col="span 12" row="6">
          something like this I'm a bit of a digital product junky. Over the
          years, I've used hundreds of web and mobile apps in different
          industries and verticals. Eventually, I decided that it would be a fun
          challenge to try designing and building my own.
        </GridItem>

        <ProjectsItem col="span 12" row="7">
          <ProjectItem nth="1">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="2">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="3">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="4">
            <ProjectCard />
          </ProjectItem>
        </ProjectsItem>

        <GridItem col="span 12" row="8">
          <h2 style={{ color: "white" }}>Technologies used</h2>
        </GridItem>

        <TechGlobe col="span 12" row="9">
          Tech Rotating Globe
        </TechGlobe>

        <GridItem col="span 12" row="10">
          <h2 style={{ color: "white" }}>What I'm into?</h2>
        </GridItem>

        <Into col="span 12" row="11">
          <p>Rust, wasm, deno...</p>
        </Into>

        <FooterItem col="span 12" row="12">
          <Footer />
        </FooterItem>
      </Grid>
      <Div></Div>
    </>
  );
};

export default Layout;
