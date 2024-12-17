'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// TODO ↓ ONLY REQUIRED WHERE CSS SCROLL-DRIVEN ANIMATIONS ARE NOT SUPPORTED ↓
// if (!CSS.supports('animation-timeline: scroll()')) {…}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Hero section
export default function ZoomSpot({
  back,
  front
}: Readonly<{
  back: React.ReactNode;
  front: React.ReactNode
}>) {
  const main = useRef<HTMLElement | any>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: main.current, // '.wrapper'
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        // markers: true
      }
    })
    .to('.spot', {
      scale: 2,
      z: 350,
      transformOrigin: 'center center',
      ease: 'power1.inOut'
    })

    // FIXME 🐢
    // .to('.hero', {
    //   scale: 1.1,
    //   transformOrigin: 'center center',
    //   ease: 'power1.inOut'
    // }, '<')

    .to('.hero svg', {
      // Sunset
      backgroundImage: `linear-gradient(#f1bfb1, #e2946f, #23383f)`,
      // Sunrise
      // backgroundImage: 'linear-gradient(#95978a, #f4bf77, #5b96a2)',
      ease: 'power1.inOut'
    }, '<')
    // —OR—
    // REFS https://gsap.com/community/forums/topic/34433-animating-svg-gradients-dynamically-using-gsap/
    // .to("#stop1", { stopColor: "#fbc" }, '<')
    // .to("#stop2", { stopColor: "#135" }, '<')
  }, {
    scope: main
  });

  return (
    <div className="wrapper" ref={main}>
      <div className="content">
        <section className="section hero">
          {back}
        </section>
      </div>
      <div className="spot-container">
        <div className="spot relative flex h-full w-full items-center">
          {front}
        </div>
      </div>
    </div>
  )
}
