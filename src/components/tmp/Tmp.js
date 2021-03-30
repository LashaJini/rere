import React from "react";
import SegmentTree from "./wtf";
import styled from "styled-components";

let arr = [1, 8, 6, 9];
let v = 1;
let tl = 0;
let tr = arr.length - 1;

let t = new SegmentTree(arr);
t.build(v, tl, tr);

// console.log(JSON.stringify(t.data, null, 2));
console.log(t.data);
t.sum(v, tl, tr, tl, tr);

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const Vertex = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tmp = () => {
  return (
    <>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      {t.data.map((sum_value, i) => (
        <Vertex key={i}>{sum_value}</Vertex>
      ))}
    </>
  );
};

export default Tmp;
