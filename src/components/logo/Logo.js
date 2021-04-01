import React from "react";
import styled from "styled-components";
import "./Logo.scss";
import { useHowlerProto1 } from "../howler/use-howler/use-howler-proto-1";
import thunderstruckWav from "../../static/acdc-thunderstruck.wav";
import demonFireWav from "../../static/acdc-demon-fire.wav";
import hellsBellsWav from "../../static/acdc-hells-bells.wav";
import noMansLandWav from "../../static/acdc-no-mans-land.wav";
import realizeWav from "../../static/acdc-realize.wav";
import shotInTheDarkWav from "../../static/acdc-shot-in-the-dark.wav";
import wildReputationWav from "../../static/acdc-wild-reputation.wav";
// import thunder from "../howler/coin.wav";

// 7 song links

const Logo = () => {
  return (
    <>
      <Proto2 />
    </>
  );
};

const OuterStrokeLayer = styled.g`
  stroke: #63000a;
  stroke-width: 3px;
`;
const FillLayer = styled.g`
  fill: url("#radial-gradient");
`;
const InnerStrokeLayer = styled.g`
  stroke: black;
  fill: url("#radial-gradient");
  stroke-width: 2px;
  transition: all 1s;
  cursor: pointer;
  filter: drop-shadow(0 0 5px rgba(255, 186, 3, 0.6));

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`;
const MainStrokeLayer = styled.g`
  stroke: rgb(255, 237, 107);
  stroke-dasharray: 17 1;
  stroke-width: 2px;
  fill: none;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`;

const SVG2 = styled.svg`
  width: 400px;
  height: 340px;
`;

const LogoScene = styled.g``;

function Proto2() {
  const { sound: thunderstruck } = useHowlerProto1({ src: [thunderstruckWav] });
  const { sound: demonFire } = useHowlerProto1({ src: [demonFireWav] });
  const { sound: hellsBells } = useHowlerProto1({ src: [hellsBellsWav] });
  const { sound: noMansLand } = useHowlerProto1({ src: [noMansLandWav] });
  const { sound: realize } = useHowlerProto1({ src: [realizeWav] });
  const { sound: shotInTheDark } = useHowlerProto1({ src: [shotInTheDarkWav] });
  const { sound: wildReputation } = useHowlerProto1({
    src: [wildReputationWav],
  });

  const playThunderstruck = () => {
    let s = thunderstruck.play();
    thunderstruck.fade(1, 0, 3800, s);
  };
  const playDemonFire = () => {
    let s = demonFire.play();
    demonFire.fade(0.8, 0, 3400, s);
  };
  const playHellsBells = () => {
    let s = hellsBells.play();
    hellsBells.fade(1, 0, 3500, s);
  };
  const playNoMansLand = () => {
    let s = noMansLand.play();
    noMansLand.fade(0.8, 0, 2900, s);
  };
  const playRealize = () => {
    let s = realize.play();
    realize.fade(0.75, 0, 4500, s);
  };
  const playShotInTheDark = () => {
    let s = shotInTheDark.play();
    shotInTheDark.fade(0.8, 0, 4500, s);
  };
  const playWildReputation = () => {
    let s = wildReputation.play();
    wildReputation.fade(1, 0, 4500, s);
  };

  return (
    <SVG2 id="logo-svg" viewBox="0 0 200 70">
      <radialGradient id="radial-gradient">
        <stop offset="10%" stopColor="#63000a" />
        <stop offset="95%" stopColor="#b80013" />
      </radialGradient>
      <LogoScene id="logo-scene" aria-label="109🗲149">
        <g
          id="first_1_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playDemonFire}
        >
          <OuterStrokeLayer>
            <path
              d="m 81.69381,157.67453 -7.924796,-7.99253 3.522132,-3.58986 v -28.65119 l -3.522132,3.6576 -6.16373,-6.096 14.088526,-14.08852 4.402664,4.47039 v 40.70772 l 3.589865,3.58986 z"
              id="first_1"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#first_1" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#first_1" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#first_1" />
          </MainStrokeLayer>
        </g>
        <g
          id="first_0_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playNoMansLand}
        >
          <OuterStrokeLayer>
            <path
              d="m 108.24514,117.71188 -7.11199,-7.11199 v 32.71518 l 2.30293,2.2352 4.80906,-4.80906 z m -4.33493,39.96265 -11.582393,-11.58239 v -33.05385 l 12.259723,-12.192 12.46293,12.46293 v 31.36052 z"
              id="first_0"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#first_0" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#first_0" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#first_0" />
          </MainStrokeLayer>
        </g>
        <g
          id="first_9_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playHellsBells}
        >
          <OuterStrokeLayer>
            <path
              d="m 137.08346,110.59989 -8.80533,8.66986 v 1.8288 l 8.80533,8.66986 z m -3.2512,47.07464 -13.07252,-13.00479 6.36693,-6.2992 7.17973,7.17973 2.30293,-2.2352 v -2.2352 l -16.18826,-16.18826 v -11.17599 l 12.93706,-12.59839 12.05653,11.92106 v 33.05385 z"
              id="first_9"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#first_9" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#first_9" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#first_9" />
          </MainStrokeLayer>
        </g>
        <g
          id="lightning_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playThunderstruck}
        >
          <OuterStrokeLayer>
            <path
              d="m 148.36721,154.21349 c 0,0.31658 -0.39548,-0.15829 -0.39548,-0.47486 0,-0.15829 0.0264,-0.25327 0.0791,-0.28492 l 5.11204,-18.30704 -4.88687,-0.34022 c -0.15819,-0.0633 -0.23729,-0.20578 -0.23729,-0.42737 0,-0.22161 0.0527,-0.34824 0.15819,-0.3799 l 9.93291,-23.51322 c 0.0527,-0.0318 8.95544,0.11381 9.03453,0.11381 0.0791,0 -0.0791,-0.0633 0,0 0.10546,0.0633 0,-0.15828 0,0 0,0.12663 0.1944,-0.17818 0.1153,-0.0832 l -5.91967,14.55035 5.77032,-0.12207 c 0.18456,0.0633 0.27683,0.17411 0.27683,0.33239 0,0.2216 -0.0659,0.3799 -0.19773,0.47487 l -18.64444,28.36639 c -0.0527,0.0633 -0.19773,0.18994 -0.19773,0.095 z"
              id="lightning"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#lightning" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#lightning" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#lightning" />
          </MainStrokeLayer>
        </g>
        <g
          id="second_1_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playRealize}
        >
          <OuterStrokeLayer>
            <path
              d="m 183.03283,157.67453 -7.9248,-7.99253 3.52213,-3.58986 v -28.65119 l -3.52213,3.6576 -6.16373,-6.096 14.08853,-14.08852 4.40266,4.47039 v 40.70772 l 3.58987,3.58986 z"
              id="second_1"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#second_1" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#second_1" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#second_1" />
          </MainStrokeLayer>
        </g>
        <g
          id="first_4_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playShotInTheDark}
        >
          <OuterStrokeLayer>
            <path
              d="m 208.90379,113.91882 -8.9408,20.99732 h 8.9408 z m 8.80533,29.59945 v 2.57387 l 3.58986,3.58986 -7.99253,7.99253 -7.92479,-7.99253 3.52213,-3.58986 v -2.57387 H 193.4766 l -4.2672,-8.60213 15.44319,-34.00211 h 12.05653 l 4.19946,4.19946 -4.19946,3.99626 v 25.80639 h 8.60213 z"
              id="first_4"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#first_4" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#first_4" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#first_4" />
          </MainStrokeLayer>
        </g>
        <g
          id="second_9_wrapper"
          transform="translate(-67.605284,-100.84629)"
          onClick={playWildReputation}
        >
          <OuterStrokeLayer>
            <path
              d="m 242.75362,110.59989 -8.80533,8.66986 v 1.8288 l 8.80533,8.66986 z m -3.2512,47.07464 -13.07252,-13.00479 6.36693,-6.2992 7.17973,7.17973 2.30293,-2.2352 v -2.2352 l -16.18826,-16.18826 v -11.17599 l 12.93706,-12.59839 12.05653,11.92106 v 33.05385 z"
              id="second_9"
            />
          </OuterStrokeLayer>
          <FillLayer>
            <use href="#second_9" />
          </FillLayer>
          <InnerStrokeLayer>
            <use href="#second_9" />
          </InnerStrokeLayer>
          <MainStrokeLayer>
            <use href="#second_9" />
          </MainStrokeLayer>
        </g>
      </LogoScene>
    </SVG2>
  );
}

const Lightning1 = styled.path`
  stroke: black;
  stroke-width: 3;
  fill: rgb(207, 53, 33);
`;

const Me1 = styled.path`
  stroke: black;
  stroke-width: 0.125;
  fill: rgb(207, 161, 33);
`;

// eslint-disable-next-line no-unused-vars
function Proto1() {
  return (
    <svg>
      <g id="layer1" transform="translate(-54.240857,-65.3566)">
        <g
          aria-label="109🗲149"
          id="text12"
          style={{
            "font-size": "67.7333px",
            "line-height": 1.25,
            "font-family": "Squealer",
            "stroke-width": 0.264583,
          }}
        >
          <Me1
            d="m 59.049921,117.17257 4.131732,-4.06399 V 98.749117 l -8.940796,-8.805329 15.578659,-15.578659 6.637863,6.705597 v 32.037854 l 4.131732,4.06399 -10.769595,10.83733 z m 10.769595,4.94454 4.876797,-4.94454 -2.370665,-2.37066 V 82.764058 l -2.506132,-2.506132 -9.685862,9.685862 3.386665,3.386665 3.860798,-3.860798 v 25.332255 l -2.438399,2.37066 z m -5.621864,-9.21173 2.167466,1.016 V 93.330453 l -2.167466,5.012264 z M 59.253121,89.469655 69.413116,79.241927 69.345383,76.193928 56.069656,89.469655 Z m 10.972795,-10.227728 2.709332,2.777065 2.099732,-1.015999 -4.741331,-4.809065 v 3.047999 z m 5.55413,34.543983 -2.235199,0.88053 2.031999,2.032 h 3.183465 z m -14.833592,2.91253 h 3.115731 l 1.964266,-1.89653 -2.167465,-1.016 z"
            id="path42"
          />
          <Me1
            d="M 82.079169,115.75018 V 87.031256 L 94.880762,74.297396 107.88556,87.302189 V 114.53098 L 94.406629,128.0099 Z m 12.32746,6.36693 9.279461,-9.27947 V 88.995522 L 94.880762,80.190193 86.2109,88.792322 v 25.196788 z m -0.4064,-6.77333 -2.844798,-2.77707 V 84.118724 l 7.586129,7.58613 v 18.829856 z m -10.972794,-0.67734 2.235199,-0.88053 V 88.792322 l -2.235199,-0.880533 z m 12.53066,-5.89279 2.167466,0.88053 V 92.65312 l -2.167466,1.016 z m -0.2032,-29.46399 8.940795,9.008529 2.2352,-0.948266 -11.175995,-11.175995 z m -11.92106,7.721596 2.235199,0.880533 8.737595,-8.602129 v -3.115732 z m 11.108261,26.280524 2.844798,-2.77707 -2.099732,-0.8128 z m -1.016,0.27093 0.474133,-2.6416 -1.490132,1.6256 z"
            id="path44"
          />
          <Me1
            d="m 109.3756,113.24404 7.78933,-7.72159 -6.63787,-6.5024 V 87.573123 l 13.27573,-13.004794 12.73386,12.462927 v 28.718924 l -12.32746,12.25972 z m 18.28799,-29.057582 -3.8608,-3.793065 -9.07626,8.940795 v 7.99253 l 12.66613,12.733862 v 2.50613 l -2.77707,2.77707 -5.62186,-5.6896 -3.72533,3.58986 8.94079,8.87307 8.128,-8.128 V 88.792322 l -4.60587,-4.538131 v 19.642659 l -8.80533,-8.805331 V 92.85632 Z m -15.64639,3.318931 2.16746,0.948267 9.07626,-8.873063 v -3.047998 z m 12.19199,-8.127996 8.66986,8.534396 2.2352,-0.4064 -10.90506,-11.175994 z m -12.66613,18.829858 2.16747,-1.016 v -7.857063 l -2.16747,-1.015999 z m 13.0048,-2.980266 2.2352,5.079995 V 87.640856 l -2.2352,5.418664 z M 111.2044,112.76991 h 2.98026 v 0.2032 l 4.2672,-4.13173 -0.8128,-2.37067 z m 14.63039,-12.12426 -2.37067,-5.486398 -0.27093,-0.270933 -2.6416,0.474133 z m -2.37067,10.56639 -4.67359,-4.60586 0.74506,2.2352 4.33493,4.40266 z m 0.94827,0.8128 0.54187,1.6256 1.08373,-1.08373 z m 0.94827,-0.74506 1.08373,0.33866 v -0.67733 z"
            id="path46"
          />
          <Lightning1
            d="m 142.29397,132.95443 q -0.67733,0 -0.67733,-0.67733 0,-0.33867 0.13546,-0.4064 l 23.50346,-25.60319 -23.90986,-7.04426 q -0.4064,-0.135466 -0.4064,-0.6096 0,-0.474133 0.27094,-0.541866 l 53.44157,-32.64745 q 0.13547,-0.06773 0.33867,-0.06773 0.2032,0 0.4064,0.135467 0.27093,0.135467 0.27093,0.474133 0,0.270933 -0.2032,0.474133 l -23.43572,25.535454 23.97759,6.028264 q 0.47413,0.135466 0.47413,0.474133 0,0.474133 -0.33867,0.677333 l -53.5093,33.663453 q -0.13547,0.13546 -0.33867,0.13546 z"
            id="path48"
          />
          <Me1
            d="m 204.60853,117.17257 4.13173,-4.06399 V 98.749117 l -8.94079,-8.805329 15.57865,-15.578659 6.63787,6.705597 v 32.037854 l 4.13173,4.06399 -10.7696,10.83733 z m 10.76959,4.94454 4.8768,-4.94454 -2.37066,-2.37066 V 82.764058 l -2.50614,-2.506132 -9.68586,9.685862 3.38667,3.386665 3.8608,-3.860798 v 25.332255 l -2.4384,2.37066 z m -5.62186,-9.21173 2.16747,1.016 V 93.330453 l -2.16747,5.012264 z m -4.94453,-23.435725 10.16,-10.227728 -0.0677,-3.047999 -13.27572,13.275727 z m 10.97279,-10.227728 2.70934,2.777065 2.09973,-1.015999 -4.74133,-4.809065 v 3.047999 z m 5.55414,34.543983 -2.2352,0.88053 2.032,2.032 h 3.18346 z m -14.8336,2.91253 h 3.11573 l 1.96427,-1.89653 -2.16747,-1.016 z"
            id="path50"
          />
          <Me1
            d="m 259.06603,117.17257 -10.76959,10.83733 -10.76959,-10.83733 1.69333,-1.62559 h -7.7216 l -4.8768,-9.88907 13.54666,-30.005848 h 12.86933 l 6.57013,6.57013 -4.6736,4.402664 v 15.781864 h 11.24373 l -10.97279,10.97279 z m -8.33119,-10.63412 V 84.863791 l 2.8448,-2.709332 -2.2352,-2.302932 h -8.5344 l -11.58239,25.670923 2.8448,5.82506 h 11.71786 v 3.4544 l -2.37067,2.37066 4.8768,4.94454 4.8768,-4.94454 -2.4384,-2.37066 v -2.8448 l 5.41866,-5.41866 z m -14.42719,0 7.78933,-18.220261 1.69333,0.338666 v 17.881595 z m -8.39893,-1.49014 h 2.4384 l 11.71786,-25.73865 -0.2032,0.06773 -1.28694,-2.167465 z m 14.76586,-26.212783 h 8.53439 l 0.94827,-2.167466 h -10.7696 z m -12.32746,27.161053 h -2.50614 l 3.92853,7.9248 1.4224,-2.09974 z m 14.49492,-1.35467 V 91.569387 l -2.2352,10.905063 z m 7.5184,0.94827 h 4.60586 l 5.55413,-2.2352 h -7.58613 z m -0.27094,-26.348253 2.30294,2.235199 h 3.11573 l -4.4704,-4.402665 z m -13.61439,26.348253 h 5.8928 l -2.16747,-2.2352 h -0.47413 z m 13.74986,9.3472 1.69333,1.69333 h 3.18347 l -2.50613,-2.50613 z m -9.68586,1.76106 1.55787,-1.55786 -3.72534,0.6096 -0.94826,0.94826 z m 2.30293,-2.70933 v -1.6256 l -3.31893,2.16747 z"
            id="path52"
          />
          <Me1
            d="m 262.79134,113.24404 7.78933,-7.72159 -6.63786,-6.5024 V 87.573123 l 13.27573,-13.004794 12.73386,12.462927 v 28.718924 l -12.32746,12.25972 z m 18.28799,-29.057582 -3.86079,-3.793065 -9.07627,8.940795 v 7.99253 l 12.66613,12.733862 v 2.50613 l -2.77706,2.77707 -5.62187,-5.6896 -3.72533,3.58986 8.9408,8.87307 8.12799,-8.128 V 88.792322 l -4.60586,-4.538131 v 19.642659 l -8.80533,-8.805331 V 92.85632 Z m -15.64639,3.318931 2.16747,0.948267 9.07626,-8.873063 v -3.047998 z m 12.192,-8.127996 8.66986,8.534396 2.2352,-0.4064 -10.90506,-11.175994 z m -12.66613,18.829858 2.16746,-1.016 v -7.857063 l -2.16746,-1.015999 z m 13.00479,-2.980266 2.2352,5.079995 V 87.640856 l -2.2352,5.418664 z m -13.34346,17.542925 h 2.98027 v 0.2032 l 4.2672,-4.13173 -0.8128,-2.37067 z m 14.6304,-12.12426 -2.37067,-5.486398 -0.27093,-0.270933 -2.6416,0.474133 z m -2.37067,10.56639 -4.6736,-4.60586 0.74507,2.2352 4.33493,4.40266 z m 0.94827,0.8128 0.54186,1.6256 1.08373,-1.08373 z m 0.94826,-0.74506 1.08373,0.33866 v -0.67733 z"
            id="path54"
          />
        </g>
      </g>
    </svg>
  );
}
export default Logo;
