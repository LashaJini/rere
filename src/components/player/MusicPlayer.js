import React from "react";
import styled from "styled-components";
import { useEventListener } from "../../hooks";
import noMansLand from "../../static/music/ACDC - No Man's Land (Official Audio).mp3";
// import noMansLand from "../../static/acdc-realize.wav";

const Div = styled.div`
  width: 50px;
  height: 50px;
  background: black;
`;

const src = [noMansLand];

const MusicPlayer = () => {
  const audioRef = React.useRef();

  React.useEffect(() => {
    // duration
    // loop
    // muted
    // preload: none, metadata, auto/""
    // console.log(audioRef.current);
  }, []);

  useEventListener(
    "play",
    () => {
      console.log("playing");
    },
    audioRef.current
  );

  // React.useEffect(() => {
  //   function oi(event) {
  //     console.log("playing");
  //   }
  //   let hm = audioRef.current;
  //   hm.addEventListener("play", oi);
  //   return () => hm.removeEventListener("play", oi);
  // }, []);

  return (
    <>
      <audio ref={audioRef} controls src={noMansLand}></audio>
    </>
  );
};

export default MusicPlayer;
