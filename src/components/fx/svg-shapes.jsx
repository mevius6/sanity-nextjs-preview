export default function SVGShapes(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         width="0" height="0"
         className="sr-only">
      <desc>Shapes</desc>
      <defs>
        {/* https://www.fffuel.co/sssvg/ */}
        <path id="star" d="M7.62939e-06 19C16.5984 17.0462 16.9706 16.674 18.6081 0.391927C20.3014 16.6554 20.6736 17.0275 37.2162 19C20.6736 20.377 20.3014 20.7492 18.6081 37.6081C16.952 20.7492 16.5798 20.377 7.62939e-06 19Z" /* fill="#5DE4c7" */ fill="currentColor"
        style={{
          color: 'var(--frame-star-color, currentcolor)'
        }} />
      </defs>

      {/* https://www.svgbackgrounds.com/elements/svg-shape-dividers/ */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#000"><path d="…"></path></svg> */}

      {/* https://www.svgbackgrounds.com/elements/custom-css-cursors/ */}
      <svg id="cursor" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#FFF" stroke="#000" strokeWidth="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>

      {/* <g id="group1" fill="none">…</g> */}
    </svg>
  )
}
