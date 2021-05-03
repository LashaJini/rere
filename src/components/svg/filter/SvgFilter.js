import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 50px;
  height: 50px;
  background: green;
  filter: url("#filter1");
`;

const Image = styled.img`
  filter: url("#green");
`;

const SvgFilter = () => {
  return (
    <>
      <Div></Div>
      <Image
        src="https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/11/adventure-time.jpg?offset-y=0"
        alt="at"
      ></Image>
      <svg width="600" height="450" viewBox="0 0 600 450">
        <defs>
          <filter id="filter1">
            <feColorMatrix
              mode="matrix"
              values="1 1 0 0 0
                      0 1 1 1 1
                      0 0 1 0 0
                      0 0 0 18 -7"
            />
          </filter>
          <filter id="green">
            <feColorMatrix
              type="matrix"
              value="0 0 0 0 0
                     0 1 0 0 0
                     0 0 0 0 0
                     0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default SvgFilter;
