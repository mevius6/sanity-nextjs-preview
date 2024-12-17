import ZoomSpot from './zoom-spot'
import Landscape from './svg-landscape'
import Cover from './front'
import Intro from './intro'
import Outro from './outro'
import StickySections from './sticky-sections'
// dummy
import { CITE, artists } from '@/lib/constants'

export default function OnScrollScene() {
  return (
    <>
      <ZoomSpot back={<Landscape />}
                front={<Cover />} />

      {artists.forEach((artist, index: number) => (
        <>
          <Intro data={artist.bio} />

          <StickySections effect={
            index == 0
              ? 'inner-rx-perspective'
              : 'stack-swiping-offscreen'
            } data={artist.genres} />

          <Outro data={CITE[index]} />
        </>
      ))}
    </>
  )
}
