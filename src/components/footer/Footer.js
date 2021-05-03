import React from "react";
import { Logo } from "../";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 300px;
  background: var(--background-color-secondary);
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  div {
    margin-bottom: 2rem;
  }
`;

const Footer = ({ logo: { width, height } }) => {
  return (
    <>
      <Div>
        <div>
          <Logo width={width} height={height} />
        </div>

        <div>Help me overcome boredom.</div>

        <div>CONTACT BUTTONS</div>

        <div>© 2021-present 109149. All Rights Reserved.</div>
      </Div>
    </>
  );
};

export default Footer;
