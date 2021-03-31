import * as d3 from "d3";

export function Comp() {
  return (
    <svg width="760" height="140">
      <g transform="translate(70, 70)">
        <g className="item" transform="translate(0, 0)"></g>
        <g className="item" transform="translate(120, 0)"></g>
        <g className="item" transform="translate(240, 0)"></g>
      </g>
    </svg>
  );
}

function addNumberedCircle(d, i) {
  d3.select(this).append("circle").attr("r", 40);

  d3.select(this)
    .append("text")
    .text(i + 1)
    .attr("y", 50)
    .attr("x", 30);
}

function init() {
  d3.selectAll("g.item").each(addNumberedCircle);
}

export default init;
