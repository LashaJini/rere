import React from "react";
import useSoundBase from "use-sound";

import { ConfigContext } from "../components";

export default function useSound(url, delegated) {
  const { soundEnabled } = React.useContext(ConfigContext);

  return useSoundBase(url, { ...delegated, soundEnabled });
}
