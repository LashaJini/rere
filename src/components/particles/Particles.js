import React from "react";
import Particle from "./Particle";
import styled from "styled-components";

const Canvas = styled.canvas`
  background: black;
`;

let adjustX = 200;
let adjustY = 100;

const Particles = () => {
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();
  const particleArrayRef = React.useRef();
  const mouseRef = React.useRef();
  const textCoordinatesRef = React.useRef();

  const init = React.useRef();
  const animate = React.useRef();

  init.current = () => {
    let tmpArray = [];
    for (let y = 0, y2 = textCoordinatesRef.current.height; y < y2; y += 4) {
      for (let x = 0, x2 = textCoordinatesRef.current.width; x < x2; x += 4) {
        if (
          textCoordinatesRef.current.data[
            y * textCoordinatesRef.current.width + x
          ] > 128
        ) {
          // when opacity > 50%
          let positionX = x + adjustX;
          let positionY = y + adjustY;
          // multiplication by 10 is necessary to handle small text
          tmpArray.push(
            new Particle(
              positionX * 3,
              positionY * 3,
              ctxRef.current,
              mouseRef.current
            )
          );
        }
      }
    }
    particleArrayRef.current = tmpArray;
  };

  animate.current = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    ); // erase the pixels by setting them to transparent black
    particleArrayRef.current.forEach((particle) => {
      particle.draw();
      particle.update();

      window.requestAnimationFrame(animate.current);
    });
  };

  React.useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    ctxRef.current = canvasRef.current.getContext("2d");
    ctxRef.current.fillStyle = "white";
    ctxRef.current.font = "25px Verdana";
    ctxRef.current.fillText("J I N I", 0, 40);

    particleArrayRef.current = [];

    textCoordinatesRef.current = ctxRef.current.getImageData(0, 0, 400, 400);

    mouseRef.current = { x: null, y: null, radius: 150 };
  }, []);

  React.useEffect(() => {
    function updateMouseCoordinates(e) {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    }
    let canvas = canvasRef.current;
    canvas.addEventListener("mousemove", updateMouseCoordinates);
    return () =>
      canvas.removeEventListener("mousemove", updateMouseCoordinates);
  }, []);

  const gradientCube = (val) => {
    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        ctxRef.current.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)},
          ${Math.floor(255 - 42.5 * j)},
          0)`;
        ctxRef.current.fillRect(j * 25 + 200, i * 25 + 200, 25, 25);
      }
    }
  };

  React.useEffect(() => {
    // gradientCube(10);

    init.current();
    animate.current();
  }, []);

  console.log("render");
  return (
    <>
      <Canvas id="canvas1" ref={canvasRef}></Canvas>
    </>
  );
};

export default Particles;
