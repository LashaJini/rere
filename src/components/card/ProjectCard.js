import React from "react";
import styled from "styled-components";
import data from "./data.json";
import ACDC from "./acdc.jpg";
import { ProgressBar, Tooltip } from "../";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  min-width: 320px;
  // background-color: #222831;
  height: 38rem;
  border-radius: 5px;
  padding: 1rem 0.75rem;
  margin: 0.5rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  color: white;

  &:hover {
    img {
      box-shadow: 0 5px 30px rgba(235, 25, 110, 1);
    }

    img:hover {
      box-shadow: 0 15px 50px rgba(235, 25, 110, 1);
    }
  }
`;

const Img = styled.img`
  grid-column: span 8;
  grid-row: 1;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  margin-top: 20px;
  transition: box-shadow 3s ease;
`;

const Yt = styled.div`
  grid-column: 4/6;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 320px) {
    grid-row: 2;
  }
`;

const Header = styled.div`
  grid-column: 3 / 7;
  grid-row: 3;
  position: relative;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
    transition: color 1s;
    font-weight: bold;
    font-size: 1.125rem;

    &:hover {
      color: #ccc;
    }
  }

  @media (max-width: 320px) {
    grid-column: 2/8;
  }
`;

const DiffBar = styled.div`
  grid-column: 3/7;
  grid-row: 4;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const TechDiv = styled.div`
  grid-column: 3/7;
  grid-row: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    padding: 0;

    li {
      diplay: inline-block;
      margin: 0.15em;
      position: relative;
      font-size: 1em;
    }
  }

  @media (max-width: 320px) {
    grid-column: 2/8;
  }
`;

const ShareDiv = styled.div`
  grid-column: 2;
  grid-row: 6;
  width: 100%;
  height: 100%;
`;

const DescriptionDiv = styled.div`
  grid-column: 2/8;
  grid-row: 7;
  padding: 1px;
`;

const diff = [
  {
    barWidth: "10%",
    barColor: "#00ff00",
  },
  {
    barWidth: "25%",
    barColor: "#d4ff00",
  },
  {
    barWidth: "50%",
    barColor: "#ffbb00",
  },
  {
    barWidth: "75%",
    barColor: "#ff4000",
  },
  {
    barWidth: "100%",
    barColor: "#ff0000",
  },
];

const ProjectCard = ({ cardWidth }) => {
  const [tooltips, setTooltips] = React.useState({
    progressBarIsVisible: false,
    headerIsVisible: false,
  });

  return (
    <>
      <Card className="project-card" width={cardWidth}>
        <Img className="project-image" src={ACDC} alt="repository" />

        <Header
          className="project-header"
          onMouseEnter={() =>
            setTooltips((prev) => ({ ...prev, headerIsVisible: true }))
          }
          onMouseLeave={() =>
            setTooltips((prev) => ({ ...prev, headerIsVisible: false }))
          }
        >
          <a href={data.repoUrl} target="_blank" rel="noreferrer">
            {data.projectName}
          </a>
          <Tooltip
            text={data.headerInfo}
            visible={tooltips.headerIsVisible}
            width="150px"
            position="top"
          />
        </Header>

        <Yt>
          <a href={data.ytUrl}>
            <svg width="32" height="32" viewBox="0 0 480 360">
              <g id="g52" transform="translate(-217.69456,-273.02012)">
                <path
                  style={{ fill: "red" }}
                  d="m 374.5,607.91329 -25,-0.77266 -19,-1.09744 -19,-1.09745 -15.14512,-1.47879 -15.14512,-1.47879 -9.45955,-2.39962 -9.45955,-2.39961 -3.91681,-1.99821 -3.91682,-1.99821 -5.36812,-4.03353 -5.36812,-4.03352 -3.93486,-4.76173 -3.93487,-4.76173 -2.36017,-4.051 -2.36016,-4.051 -2.49842,-7.5 -2.49841,-7.5 -1.5391,-9 -1.5391,-9 -1.49863,-15 -1.49863,-15 -1.16034,-18 -1.16034,-18 -0.0216,-26.5 -0.0216,-26.5 1.19282,-19.5 1.19283,-19.5 1.49356,-14.5 1.49356,-14.5 1.59307,-9.5 1.59308,-9.5 2.47104,-7 2.47105,-7 2.32775,-4.051 2.32775,-4.051 3.93487,-4.76173 3.93486,-4.76173 5.36812,-4.03352 5.36812,-4.03353 3.91682,-1.99821 3.91681,-1.99821 9.45955,-2.39961 9.45955,-2.39962 15.14512,-1.47405 15.14512,-1.47405 18,-1.04601 18,-1.04601 31.5,-0.9678 31.5,-0.9678 46.5,-0.008 46.5,-0.008 30,0.976 30,0.97599 19,1.07042 19,1.07041 14.5,1.47795 14.5,1.47795 8.38484,1.97908 8.38485,1.97908 6.26984,2.99231 6.26983,2.99232 7.47854,6.98413 7.47853,6.98413 4.09148,7.86433 4.09148,7.86434 1.54306,5.89594 1.54307,5.89595 2.43665,17 2.43665,17 1.28122,14.5 1.28122,14.5 v 46.5 46.5 l -1.28122,14.5 -1.28122,14.5 -2.43665,17 -2.43665,17 -1.54307,5.89595 -1.54306,5.89594 -4.09148,7.86434 -4.09148,7.86433 -7.47853,6.98413 -7.47854,6.98413 -6.26983,2.99232 -6.26984,2.99231 -8.38485,1.98071 -8.38484,1.9807 -15,1.50863 -15,1.50862 -18,1.02747 -18,1.02746 -32,0.98936 -32,0.98936 -50.5,-0.14991 -50.5,-0.1499 -25,-0.77266 z m 49,-103.06457 14,-8.14435 5.5,-3.17959 5.5,-3.17959 9.5,-5.54079 9.5,-5.5408 9,-5.26532 9,-5.26531 15.5,-9.00857 15.5,-9.00857 5.5,-3.17741 5.5,-3.1774 2.25,-1.42106 2.25,-1.42105 v -0.54817 -0.54817 l -5.25,-3.12816 -5.25,-3.12817 -39,-22.66635 -39,-22.66635 -7,-4.07673 -7,-4.07672 -7,-4.21858 -7,-4.21857 -3.20034,-1.62147 L 409.09932,369 H 408.54966 408 v 72 72 l 0.75,-0.003 0.75,-0.003 14,-8.14434 z"
                  id="path58"
                />
              </g>
            </svg>
          </a>
        </Yt>

        <DiffBar
          onMouseEnter={() =>
            setTooltips((prev) => ({ ...prev, progressBarIsVisible: true }))
          }
          onMouseLeave={() =>
            setTooltips((prev) => ({ ...prev, progressBarIsVisible: false }))
          }
        >
          <ProgressBar {...diff[4]} />
          <Tooltip
            text="Difficulty (subjective)"
            visible={tooltips.progressBarIsVisible}
            width="150px"
            position="top"
          />
        </DiffBar>

        <TechDiv>
          <ul className="used-tech">
            {data.techUsed.map((tech) => {
              return (
                <li key={tech.name}>
                  <div>{tech.name}</div>
                </li>
              );
            })}
          </ul>
        </TechDiv>

        <ShareDiv>share?</ShareDiv>

        <DescriptionDiv>{data.description}</DescriptionDiv>
      </Card>
    </>
  );
};

// eslint-disable-next-line
const repo_json = {
  cardImage: "cdn...",
  projectName: "...",
  repoUrl: "url",
  ytUrl: "null | url",
  difficulty: "0 out of 4", // 0,1,2,3,4
  description: "max 50 words",
  headerInfo: "max 5 words",
  techUsed: [
    {
      name: "tech name",
      url: "",
      bgColor: "",
      svgUrl: "cdn...",
    },
  ],
};

export default ProjectCard;
