import React from "react";
import { Howl } from "howler";

const useHowler = ({ src /* string[] */, volume = 1, loop = false }) => {
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

export default useHowler;
