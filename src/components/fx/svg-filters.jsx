// https://alteredqualia.com/css-shaders/article/
// https://www.sarasoueidan.com/blog/svg-filters-series/
export default function SVGFilters(props) {
  return (
    <>
      {/*
        TODO Make a gradient map from the art's color palette
        and use as an filter on hover of the image.
        Specs:
          → https://drafts.fxtf.org/filter-effects-2/
        Tools:
          → https://yoksel.github.io/svg-filters/
          → https://yoksel.github.io/svg-gradient-map/
          → https://antlii.work/DITHR-Tool
      */}
      <svg xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           width="0" height="0"
           className="sr-only">
        <desc>Filters FX</desc>
        <defs>{/* INFO https://svgwg.org/svg2-draft/struct.html#Head */}</defs>
        <g id="group1" fill="none">
          <filter id="teal-rgb" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feColorMatrix type="matrix"
              values=".33 .33 .33 0 0
                      .33 .33 .33 0 0
                      .33 .33 .33 0 0
                      0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.03 0.5"/>
              <feFuncG type="table" tableValues="0.57 0.86"/>
              <feFuncB type="table" tableValues="0.49 0.76"/>
              <feFuncA type="table" tableValues="0 1"/>
              </feComponentTransfer>
            <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
          </filter>
        </g>
      </svg>
    </>
  );
}
