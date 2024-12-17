import { SVGProps } from 'react'

// TODO bun add -D @iconify-json/line-md

// https://icons.sanity.build

// the Creative, '(natural) force' ☰
export function SkyTrigramIcon(props: SVGProps<SVGSVGElement>) { // 乾 qián
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="🍔 mx-auto"
      viewBox="0 0 50 40"
      height="100%"
      role="presentation"
      focusable="false"
      aria-label="trigram for heaven symbol"
      {...props}
    >
      <line x1="5%" x2="95%" y1="20%" y2="20%" />
      <line x1="5%" x2="95%" y1="50%" y2="50%" />
      <line x1="5%" x2="95%" y1="80%" y2="80%" />
    </svg>
  );
}

// https://icon-sets.iconify.design/line-md/menu
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeDasharray="16" strokeDashoffset="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:menu-fold-left.svg
export function MenuFoldLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={16} strokeDashoffset={16} d="M19 5h-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M19 12h-9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></animate></path><path strokeDasharray={16} strokeDashoffset={16} d="M19 19h-14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M7 9l-3 3l3 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path></g></svg>);
}

// https://icon-sets.iconify.design/line-md/menu-to-close-alt-transition
export function MenuToCloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M5 5L19 5"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5;M5 5L19 19"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate><set attributeName="opacity" begin="0.4s" to="0"></set></path><path d="M5 19L19 19"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 19L19 19;M5 19L19 5"></animate></path></g></svg>
  )
}

// https://icon-sets.iconify.design/line-md/close-circle
export function CloseCircle(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={64} strokeDashoffset={64} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate></path><path strokeDasharray={8} strokeDashoffset={8} d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate></path></g></svg>)
}

// https://icon-sets.iconify.design/line-md/home
export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M4.5 21.5h15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path strokeDasharray="16" strokeDashoffset="16" d="M4.5 21.5v-13.5M19.5 21.5v-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path strokeDasharray="28" strokeDashoffset="28" d="M2 10l10 -8l10 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"></animate></path><path strokeDasharray="24" strokeDashoffset="24" d="M9.5 21.5v-9h5v9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="24;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:cog-loop.svg
export function CogLoopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><defs><symbol id="lineMdCogLoop0"><path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"></animate></path></symbol></defs><g fill="none" stroke="currentColor" strokeWidth="2"><g strokeLinecap="round"><path strokeDasharray="20" strokeDashoffset="20" d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray="48" strokeDashoffset="48" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></animate><set fill="freeze" attributeName="opacity" begin="0.9s" to="0"></set></path></g><g opacity="0"><use href="#lineMdCogLoop0"></use><use href="#lineMdCogLoop0" transform="rotate(60 12 12)"></use><use href="#lineMdCogLoop0" transform="rotate(120 12 12)"></use><use href="#lineMdCogLoop0" transform="rotate(180 12 12)"></use><use href="#lineMdCogLoop0" transform="rotate(240 12 12)"></use><use href="#lineMdCogLoop0" transform="rotate(300 12 12)"></use><set fill="freeze" attributeName="opacity" begin="0.9s" to="1"></set><animateTransform fill="freeze" attributeName="transform" dur="30s" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g></svg>
  )
}

// https://icon-sets.iconify.design/line-md/search
export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path strokeDasharray="40" strokeDashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:filter.svg
export function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeDasharray="54" strokeDashoffset="54" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="54;0"></animate></path></svg>
  )
}

// https://api.iconify.design/line-md:confirm-circle.svg
export function ConfirmCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path strokeDasharray="14" strokeDashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:grid-3-filled.svg
export function Grid3Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="currentColor" fillOpacity="0" stroke="currentColor" strokeDasharray="12" strokeDashoffset="12" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 5c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM10.5 5c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM17.5 5c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="12;0"></animate></path><path d="M3.5 12c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM10.5 12c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM17.5 12c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"></animate></path><path d="M3.5 19c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM10.5 19c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5ZM17.5 19c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.5s" values="0;1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:arrow-close-left.svg
export function ArrowCloseLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" strokeDashoffset="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray="16" strokeDashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M7 12l7 7M7 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:arrow-open-right.svg
export function ArrowOpenRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" strokeDashoffset="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray="16" strokeDashoffset="16" d="M7 12h13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:arrow-left.svg
export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" strokeDashoffset="20" d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path></g></svg>
  )
}

// https://api.iconify.design/line-md:arrow-right.svg
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" strokeDashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path></g></svg>
  )
}

// REFS Spinners
//  - https://epic-spinners.epicmax.co/
//  - https://www.csswand.dev/

export function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'><path strokeDasharray='60' strokeDashoffset='60' strokeOpacity='.3' d='M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z'><animate fill='freeze' attributeName='stroke-dashoffset' dur='1.3s' values='60;0'></animate></path><path strokeDasharray='15' strokeDashoffset='15' d='M12 3C16.9706 3 21 7.02944 21 12'><animate fill='freeze' attributeName='stroke-dashoffset' dur='0.3s' values='15;0'></animate><animateTransform attributeName='transform' dur='1.5s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'></animateTransform></path></g>
    </svg>
  )
}

export function CloseSmallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeDasharray="16" strokeDashoffset="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 7l10 10"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></animate></path><path d="M17 7l-10 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></animate></path></g></svg>
  )
}
