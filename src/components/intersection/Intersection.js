import React from "react";
import { useEventListener } from "../../hooks";
import styled from "styled-components";

const Box = styled.div`
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Vertical = styled.div`
  color: white;
  font: 32px "Arial";
`;

const Extra = styled.div`
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
`;

const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

const Intersection = () => {
  useEventListener("load", (event) => {
    boxElement = document.querySelector("#box");
    console.log("LOAD: creating observer");

    createObserver();
  });

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      console.log("hmm");
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      }

      prevRatio = entry.intersectionRatio;
    });
  }

  return (
    <div
      style={{
        height: "300%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box id="box" style={{ height: "350px" }}>
        <Vertical>
          Welcome to <strong>The Box!</strong>
        </Vertical>
      </Box>
    </div>
  );
};

export default Intersection;
