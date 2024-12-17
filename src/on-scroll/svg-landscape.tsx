export default function Landscape(params:any) {
  // TODO declare palette swatches via params
  let palette = {}, {
    // sun1: SUNRISE = 'F4BF77',
    // sun9: SUNSET = 'E2946F',
    // sky1: LIGHTSKY = '',
    // sky9: NIGHTSKY = '',
    // sky6: AFTER_RAIN = '8bc4d1', // SW 9047
  } = palette

  return (
    // TODO synchronize with the dynamic color scheme
    // https://evilmartians.com/chronicles/how-to-use-p3-colors-in-svg
    // https://huetone.ardov.me/
    // https://oklch.com

    //#region - SVG Landscape
    //#endregion
    (<svg xmlns="http://www.w3.org/2000/svg"
      className="absolute w-full h-full" style={{
        // backgroundImage: 'linear-gradient(#135, #fbc, #135)'
        // Sunrise
        backgroundImage: 'linear-gradient(#95978a, #f4bf77, #5b96a2)'
        // Sunset
        // backgroundImage: `linear-gradient(#f1bfb1, #e2946f, #23383f)`,
      }}>
      <defs>
        <linearGradient id="_skybox">
          <stop offset="10%" stopColor="#135" id="sky"/>
          <stop offset="50%" stopColor="#fbc" id="sunset"/>
          <stop offset="90%" stopColor="#135" id="lakeshore"/>
        </linearGradient>
        <radialGradient id="skybox">
          <stop stopColor="#E2946F" offset="10%" id="sun"/>
          <stop stopColor="#95978A" offset="90%" id="sky"/>
        </radialGradient>
      </defs>
      <filter id="b">
        <feTurbulence type="fractalNoise"
          baseFrequency=".005 0"
          numOctaves="5" />
        <feDisplacementMap in="SourceAlpha" scale="99" />
        <feColorMatrix values="0 0 0 0 .01
                               0 0 0 0 .02
                               0 0 0 0 .02
                               0 0 0 -1 1" />
      </filter>
      {/* <rect id="box"
        viewBox="128 128 0 0"
        className="w-full h-full"
        fill="url(#skybox)" /> */}
      {/* <use
        href="#box"
        y="-100%"
        transform="scale(1 -1)"
        filter="blur(60px)" /> */}
      <use
        href="#a"
        y="-100%"
        transform="scale(1 -1)"
        filter="blur(3px)" />
      <ellipse id="a"
        cx="50%"
        rx="63%"
        ry="43%"
        filter="url(#b)" />
    </svg>)
  );
}
