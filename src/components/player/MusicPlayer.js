import React from "react";
import styled from "styled-components";
import noMansLand from "../../static/music/ACDC - No Man's Land (Official Audio).mp3";
import wildReputation from "../../static/music/ACDC - Wild Reputation (Official Audio).mp3";
import shotInTheDark from "../../static/music/ACDC - Shot In The Dark (Official Video).mp3";

// TODO: some button stuff...
// TODO: add "now playing" title
// TODO: add volume control
const Button = styled.button`
  width: 50px;
  height: 25px;
  cursor: pointer;
  font-weight: bold;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  padding: 5px;
  border-radius: 10px;
`;

const PrevButton = styled(Button)`
  position: absolute;
  transform: translate(${({ x, y }) => `${x},${y}`});
`;
const PlayButton = styled(Button)`
  position: absolute;
`;
const NextButton = styled(Button)`
  position: absolute;
  transform: translate(${({ x, y }) => `${x},${y}`});
`;

const ACDC = [noMansLand, wildReputation, shotInTheDark];

const MusicPlayer = ({
  prevButtonIsVisible = false,
  nextButtonIsVisible = false,
  translatePrevButton = { x: "0px", y: "0px" },
  translateNextButton = { x: "0px", y: "0px" },
}) => {
  const audioRef = React.useRef();
  const [musicIsPlaying, setMusicIsPlaying] = React.useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState({
    index: 0,
    src: ACDC[0],
  });
  const pause = React.useCallback(() => {
    if (musicIsPlaying) {
      audioRef.current.pause();
    }
  }, [musicIsPlaying]);
  const playNext = React.useCallback(() => {
    pause();

    if (currentlyPlaying.index === ACDC.length - 1) {
      setCurrentlyPlaying({
        index: 0,
        src: ACDC[0],
      });
    } else {
      setCurrentlyPlaying((prev) => ({
        index: prev.index + 1,
        src: ACDC[prev.index + 1],
      }));
    }
    setMusicIsPlaying(true);
  }, [currentlyPlaying, pause]);

  React.useEffect(() => {
    if (musicIsPlaying) {
      audioRef.current.play();
    }
  }, [musicIsPlaying, currentlyPlaying]);

  const playCurrent = () => {
    pause();
    setMusicIsPlaying((prev) => !prev);
  };

  const playPrev = () => {
    pause();

    if (currentlyPlaying.index === 0) {
      setCurrentlyPlaying({
        index: ACDC.length - 1,
        src: ACDC[ACDC.length - 1],
      });
    } else {
      setCurrentlyPlaying((prev) => ({
        index: prev.index - 1,
        src: ACDC[prev.index - 1],
      }));
    }
    setMusicIsPlaying(true);
  };

  React.useEffect(() => {
    function nextSong() {
      audioRef.current.currentTime = 0;
      playNext();
    }
    let tmp = audioRef.current;
    tmp.addEventListener("ended", nextSong);
    return () => tmp.removeEventListener("ended", nextSong);
  }, [playNext]);

  return (
    <div>
      <audio ref={audioRef} /*controls*/ src={currentlyPlaying.src}></audio>
      <PrevButton
        x={translatePrevButton.x}
        y={translatePrevButton.y}
        visible={prevButtonIsVisible}
        onClick={playPrev}
      >
        {"<"}
      </PrevButton>
      <PlayButton visible={true} onClick={playCurrent}>
        ī
      </PlayButton>
      <NextButton
        x={translateNextButton.x}
        y={translateNextButton.y}
        visible={nextButtonIsVisible}
        onClick={playNext}
      >
        {">"}
      </NextButton>
    </div>
  );
};

export default MusicPlayer;
