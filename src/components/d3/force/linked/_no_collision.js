import * as d3 from "d3";

const width = 600;
const height = 600;

const numNode = 100;
let nodes = d3.range(numNode).map(function (d) {
  return { radius: Math.random() * 15 };
});

let simulation = d3
  .forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(5))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force(
    "collision",
    d3.forceCollide().radius(function (d) {
      return d.radius;
    })
  )
  .on("tick", ticked);

export function Comp() {
  return <svg width={width} height={height}></svg>;
}

let u;
function ticked() {
  u = d3.select("svg").selectAll("circle").data(nodes);

  u.enter()
    .append("circle")
    .attr("r", function (d) {
      return d.radius;
    })
    .style("stroke", "#555")
    .merge(u)
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });

  u.exit().remove();
}

export default ticked;
