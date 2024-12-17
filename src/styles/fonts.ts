// import { Literata } from 'next/font/google'
import localFont from 'next/font/local'

// https://fonts.google.com/specimen/Literata
// const literata = Literata({
//   variable: '--font-serif',
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// });

// https://vercel.com/font#get
// https://nextjs.org/docs/app/api-reference/components/font

// https://djr.com/roslindale
const roslindale = localFont({
  src: '../fonts/RoslindaleCyrillicVariable.woff2',
  weight: '200 900',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: ['Times'],
  adjustFontFallback: false, // 'Times New Roman'
  variable: '--font-serif', // '--font-roslindale'
})

// https://djr.com/forma
const forma = localFont({
  src: '../fonts/FormaDJRCyrillicVariable.woff2',
  weight: '200 700',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: ['Helvetica'],
  adjustFontFallback: false, // 'Arial'
  variable: '--font-sans', // '--font-forma'
})

// https://djr.com/fern
const fern = localFont({
  src: '../fonts/FernOrnaments-Regular.woff2',
  // weight: '400',
  style: 'normal',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
  variable: '--font-fern-ornaments',
})

// https://djr.com/nickel-gothic
const nickel = localFont({
  src: '../fonts/NickelGothicV3Variable.woff2',
  variable: '--font-nickel-gothic',
  style: 'normal',
  display: 'swap',
})

export { roslindale, forma, fern, nickel }
