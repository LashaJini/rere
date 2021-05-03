import React from "react";
import styled from "styled-components";
import data from "./data.json";
import ACDC from "./acdc.jpg";
import { Tech, ProgressBar, Tooltip, YoutubeButton, YoutubeIFrame } from "../";
import { useEventListener } from "../../hooks";

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
  padding: 1rem 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  border: 1px solid black;
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

  @media (max-width: 320px) {
    grid-row: 2;
  }
`;

const Header = styled.div`
  grid-column: 3 / 7;
  grid-row: 3;
  position: relative;
  text-align: center;

  span {
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

const TechHeader = styled.div`
  grid-column: 2/9;
  grid-row: 5;
  width: 100%;
  height: 100%;
`;

const TechDiv = styled.div`
  grid-column: 3/7;
  grid-row: 6;
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
  grid-row: 7;
  width: 100%;
  height: 100%;
`;

const DescriptionDiv = styled.div`
  grid-column: 2/8;
  grid-row: 8;
  padding: 2px;
  margin-bottom: 2.2rem;
`;

const LiveWebsite = styled.div`
  grid-column: 1/5;
  grid-row: 10;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
    color: white;
    border: 1px solid black;
    padding: 7px;
  }
`;

const Repo = styled.div`
  grid-column: 5/9;
  grid-row: 10;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 0.85rem;

  a {
    text-decoration: none;
    color: white;
    border: 1px solid black;
    padding: 7px;
  }
`;

const EmptyRow = styled.div`
  grid-column: span 9;
  grid-row: ${({ row }) => (row ? row : 1)}:;
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
  const [iframeIsVisible, setIFrameIsVisible] = React.useState(false);

  // listen click for outside iframe
  useEventListener("click", (event) => {
    if (event.target.nodeName !== "IFRAME") {
      if (iframeIsVisible) {
        // console.log(document.querySelector("iframe"));
        setIFrameIsVisible(false);
      }
    }
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
          <span>{data.projectName}</span>
          <Tooltip
            text={data.headerInfo}
            visible={tooltips.headerIsVisible}
            width="150px"
            position="top"
          />
        </Header>

        <Yt onClick={() => setIFrameIsVisible(true)}>
          <YoutubeButton />
          <YoutubeIFrame visible={iframeIsVisible} />
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

        <TechHeader>Built with:</TechHeader>

        <TechDiv>
          <ul className="used-tech">
            {data.techUsed.map((tech) => {
              return (
                <li key={tech.name}>
                  <Tech name={tech.name} />
                </li>
              );
            })}
          </ul>
        </TechDiv>

        {/* <ShareDiv>share?</ShareDiv> */}

        <DescriptionDiv>{data.description}</DescriptionDiv>

        <EmptyRow row={8}></EmptyRow>

        <LiveWebsite>
          <a href={data.repoUrl} target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </LiveWebsite>
        <Repo>
          <a href={data.repoUrl} target="_blank" rel="noreferrer">
            Go to Repo
          </a>
        </Repo>
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
