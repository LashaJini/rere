import React from "react";
import "./Blockquote.scss";

const Blockquote = () => {
  return (
    <>
      <div class="blockquote-wrapper">
        <div class="blockquote">
          <h1>
            Intuitive design happens when{" "}
            <span style={{ color: "#ffffff" }}>current knowledge</span> is the
            same as the{" "}
            <span style={{ color: "#ffffff" }}>target knowledge.</span>
          </h1>
          <h4>
            - Jared Spool
            <br />
            <em>Web Site Usability: A Designer's Guide</em>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Blockquote;
