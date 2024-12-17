// https://alteredqualia.com/css-shaders/article/
// https://www.sarasoueidan.com/blog/svg-filters-series/
export default function SVGFilters() {
  // Specs:
  //   → https://drafts.fxtf.org/filter-effects-2/
  // Tools:
  //   → https://yoksel.github.io/svg-filters/
  //   → https://yoksel.github.io/svg-gradient-map/
  //   → https://antlii.work/DITHR-Tool
  return (<>
    <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="0" height="0"
          className="sr-only"
          aria-hidden="true">
      <desc>Filters FX</desc>
      <defs>
        {/* INFO https://svgwg.org/svg2-draft/struct.html#Head */}
      </defs>
      <g id="group1">
        <filter id="dither" primitiveUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="3.71"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale=".2"></feDisplacementMap>
          <feBlend in2="SourceGraphic"></feBlend>
        </filter>
      </g>
    </svg>
  </>);
}
