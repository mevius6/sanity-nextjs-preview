'use client'

import { HTMLAttributes, forwardRef, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Props {
  children?: React.ReactNode;
  attrs?: HTMLAttributes<HTMLDivElement>
}

// https://ru.react.dev/learn/manipulating-the-dom-with-refs#recap
export const InnerWrap = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div ref={ref} {...props.attrs}>
    {props.children}
  </div>
));

// Demo: https://tympanus.net/Development/StickySections/
export default function StickySections(params:any) {
  const { effect, data } = params

  const wrapper = useRef<HTMLElement | any>(null)
  const section = useRef<HTMLDivElement | null>(null)
  const inner = useRef<HTMLDivElement | null>(null)

  //#region - Context
  useGSAP(() => {
    const targets = gsap.utils.toArray('.section'),
        { length: total } = targets

    // targets.forEach((target: HTMLElement | any, position: number) => {
    targets.map((target: HTMLElement | any, position: number) => {
      const isLast = position == total-1

      // https://dom.spec.whatwg.org/#interface-node
      // const child = section.current?.childNodes[0] // .firstChild

      const q = gsap.utils.selector(target)

      // rotation of the inner element along the x-axis
      // in three-dimensional perspective
      if (effect === 'inner-rx-perspective') {
        //#region - Variant №1
        const tl1 = gsap.timeline({id: 'seq-inner-rx-perspective',
          scrollTrigger: {
            trigger: target,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            // markers: true
          }
        })
          .set(q('.inner'), {
            transformOrigin: '50% 0%'
          })
          .to(q('.inner'), {
            ease: 'power1',
            startAt: {filter: 'brightness(100%)'},
            filter: 'brightness(60%)',
            scale: .9,
            rotationX: -90,
            yPercent: 0
            // yPercent: isLast ? 100 : 0
          }, 0);
        //#endregion
      }

      // swinging/swiping sheets from the stack in different directions
      // moving sheets from the stack out of the screen along the x and y axes
      if (effect === 'stack-swiping-offscreen') {
        //#region - Variant №2
        const tl2 = gsap.timeline({id: 'seq-stack-swiping-offscreen',
          defaults: {ease: 'none'},
          scrollTrigger: {
            trigger: target,
            start: 'top top',
            // end: '+=200%',
            end: isLast ? '+=100%' : '+=200%',
            scrub: true,
            // markers: true
          }
        })
          .set(target, {
            transformOrigin: `\
              ${ position%2 === 0 ? 100 : 0 }% \
              ${ isLast ? 0 : 100 }%`
          })
          .to(target, {
            startAt: {filter: 'brightness(100%)'},
            xPercent: position%2 === 0 ? -150 : 150,
            yPercent: 0,
            // yPercent: isLast ? 100 : 0,
            rotation: position%2 === 0 ? -20 : 20,
            scale: 0.8,
            filter: 'brightness(0%)'
          }, 0)
        //#endregion
      }

      // TODO compose sequences of multipe timelines on the final master track
      // https://gsap.com/docs/v3/Plugins/ScrollTrigger
      // TL.add(tl1).add(tl2)
    })
  }, {
    scope: wrapper
  })
  //#endregion

  return (
    <div className="wrap" ref={wrapper}>
      {data.map((item: any, index: number) => (
        <section
          key={index} ref={section}
          className="section --sticky --perspective grid overflow-hidden"
        >
          <InnerWrap ref={inner} attrs={{ className: "inner h-full w-full" }}>
            <picture className="relative overflow-hidden">
              <img
                className="image absolute h-full object-cover"
                src={item?.image ?? '/placeholder.svg'} />
            </picture>

            <article className="m-auto flex flex-col gap-6">
              <h2 className="uppercase">{item?.head}</h2>
              <p>{item?.lead}</p>
            </article>
          </InnerWrap>
        </section>
      ))}
    </div>
  )
}
