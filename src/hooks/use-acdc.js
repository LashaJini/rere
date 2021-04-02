import { useHowler } from "./";

const useACDC = (src) => {
  const {
    thunderstruckWav,
    demonFireWav,
    hellsBellsWav,
    noMansLandWav,
    realizeWav,
    shotInTheDarkWav,
    wildReputationWav,
  } = src;

  const { sound: _thunderstruck } = useHowler({ src: [thunderstruckWav] });
  const { sound: _demonFire } = useHowler({ src: [demonFireWav] });
  const { sound: _hellsBells } = useHowler({ src: [hellsBellsWav] });
  const { sound: _noMansLand } = useHowler({ src: [noMansLandWav] });
  const { sound: _realize } = useHowler({ src: [realizeWav] });
  const { sound: _shotInTheDark } = useHowler({ src: [shotInTheDarkWav] });
  const { sound: _wildReputation } = useHowler({
    src: [wildReputationWav],
  });

  const stopAll = () => {
    _thunderstruck.stop();
    _demonFire.stop();
    _hellsBells.stop();
    _noMansLand.stop();
    _realize.stop();
    _shotInTheDark.stop();
    _wildReputation.stop();
  };
  const thunderstruck = () => {
    stopAll();
    let s = _thunderstruck.play();
    _thunderstruck.fade(1, 0, 3800, s);
  };
  const demonFire = () => {
    stopAll();
    let s = _demonFire.play();
    _demonFire.fade(0.8, 0, 3400, s);
  };
  const hellsBells = () => {
    stopAll();
    let s = _hellsBells.play();
    _hellsBells.fade(1, 0, 3500, s);
  };
  const noMansLand = () => {
    stopAll();
    let s = _noMansLand.play();
    _noMansLand.fade(0.8, 0, 2900, s);
  };
  const realize = () => {
    stopAll();
    let s = _realize.play();
    _realize.fade(0.75, 0, 4500, s);
  };
  const shotInTheDark = () => {
    stopAll();
    let s = _shotInTheDark.play();
    _shotInTheDark.fade(0.8, 0, 4500, s);
  };
  const wildReputation = () => {
    stopAll();
    let s = _wildReputation.play();
    _wildReputation.fade(1, 0, 4500, s);
  };

  return {
    play: {
      thunderstruck,
      demonFire,
      hellsBells,
      noMansLand,
      realize,
      shotInTheDark,
      wildReputation,
    },
  };
};

export default useACDC;
