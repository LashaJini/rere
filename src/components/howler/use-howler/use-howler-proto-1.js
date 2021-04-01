import React from "react";
import { Howl } from "howler";

// TODO: play only one; when called again, start all over again.
export const useHowlerProto1 = ({ src, volume = 1, loop = false }) => {
  const [sound] = React.useState(
    new Howl({
      src,
      volume,
      loop,
      preload: true,
      html5: true,
      onend: function () {
        console.log("done playing!");
      },
    })
  );

  return { sound };
};
