import React from "react";
// import { Howler } from "howler";
import { useHowlerProto1 } from "./use-howler/use-howler-proto-1";
import coinSound from "./coin.wav";

// Howler.volume(0.5); // global volume

const HowlerComp = () => {
  const { sound } = useHowlerProto1({ src: [coinSound] });

  const play = () => {
    sound.play();
  };

  return <button onClick={play}>coin</button>;
};

export default HowlerComp;
