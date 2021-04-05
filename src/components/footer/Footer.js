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

const Footer = () => {
  return (
    <>
      <Div>
        <div>
          <Logo />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </div>
        <div>© 2021-present 109149. All Rights Reserved.</div>
      </Div>
    </>
  );
};

export default Footer;
