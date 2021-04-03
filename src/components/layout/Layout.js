import React from "react";
import styled from "styled-components";
import { Logo, ThemeButton, Divider, Bell } from "..";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Border = styled.div`
  // border: 1px solid white;
  marging: 0;
  padding: 0;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--background-color-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = () => {
  return (
    <Grid>
      <Border bgColor="var(--background-color-secondary)">
        <Logo />
      </Border>
      <Border bgColor="var(--background-color-secondary)">
        <ThemeButton />
        <Bell />
      </Border>
      <Border
        style={{
          "grid-column": "1 / 4",
          "grid-row": "2",
        }}
      >
        <Divider />
      </Border>
      <Border
        style={{
          "grid-column": "1 / 4",
          "grid-row": "3",
        }}
      >
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </div>
      </Border>
    </Grid>
  );
};

export default Layout;
