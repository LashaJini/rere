import React from "react";
import * as d3 from "d3";
import "./chart.scss";

const names = [
  "Andy",
  "Beth",
  "Craig",
  "Diane",
  "Evelyn",
  "Fred",
  "Georgia",
  "Harry",
  "Isabel",
  "John",
];
let myData = [];
const barWidth = 400;
const barScale = d3.scaleLinear().domain([0, 100]).range([0, barWidth]);

function randomInteger(n) {
  return Math.floor(10 * Math.random());
}

function initialiseData() {
  myData = [
    {
      name: "Andy",
      score: 37,
    },
    {
      name: "Beth",
      score: 39,
    },
    {
      name: "Craig",
      score: 31,
    },
    {
      name: "Diane",
      score: 35,
    },
    {
      name: "Evelyn",
      score: 38,
    },
  ];
}

function updateBars(data) {
  const u = d3
    .select("#wrapper")
    .selectAll(".person")
    .data(data, function (d) {
      return d.name;
    });

  const entering = u.enter().append("div").classed("person", true);

  entering
    .append("div")
    .classed("label", true)
    .text(function (d) {
      return d.name;
    });
  entering.append("div").classed("bar", true);
  entering
    .merge(u)
    .select(".bar")
    .transition()
    .style("width", function (d) {
      return barScale(d.score) + "px";
    });
  u.exit().remove();
}

function addPerson() {
  if (myData.length === 10) return;

  myData.push({
    name: names[myData.length],
    score: 30 + randomInteger(70),
  });

  update();
}

function removePerson() {
  if (myData.length === 0) return;

  myData.pop();

  update();
}

function updateScores() {
  for (let i = 0; i < myData.length; i++) {
    myData[i].score = 30 + randomInteger(70);
  }

  update();
}

function updateDataView() {
  d3.select(".data-view").text("Array: " + JSON.stringify(myData));
}

function update() {
  updateBars(myData);
  updateDataView();
}

const Chart = () => {
  React.useEffect(() => {
    initialiseData();
    update();
  }, []);

  return (
    <>
      <div id="wrapper"></div>
      <div className="menu">
        <button onClick={updateScores}>Update scores</button>
        <button onClick={addPerson}>Add person</button>
        <button onClick={removePerson}>Remove person</button>
      </div>
      <div className="data-view"></div>
    </>
  );
};

export default Chart;
