import React, { useRef, createRef, useState } from "react";

function _ForwardingRefs() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();
  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }
  if (!refFromCreateRef.current) {
    console.log("on each state update");
    refFromCreateRef.current = renderIndex;
  }
  return (
    <div className="App">
      Current render index: {renderIndex}
      <br />
      First render index remembered within refFromUseRef.current:
      {refFromUseRef.current}
      <br />
      First render index unsuccessfully remembered within
      refFromCreateRef.current:
      {refFromCreateRef.current}
      <br />
      <button onClick={() => setRenderIndex((prev) => prev + 1)}>
        Cause re-render
      </button>
    </div>
  );
}

const ForwardingRefs = () => {
  // const ref = React.useRef();
  const ref = React.createRef();
  console.log("render parent");

  return <FancyButton ref={ref}>click oi</FancyButton>;
};

const FancyButton = React.forwardRef((props, ref) => {
  console.log("render child");
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

export default ForwardingRefs;
