import {
  type ArtworkProps,
  type ArtistProps
} from '@/components/custom.types';

import Artist from '@/components/Artist';
import Link from "next/link";
import DateStamp from '@/components/Date';

// NOTE Ideas for improving GUI components
// - https://eldoraui.site/components/special-animations/spotlightcard
// - https://joebell.studio/craft/bias-lighting
// - https://github.com/sanity-io/color

export interface CardProps extends ArtistProps, ArtworkProps {}

//#region - Card header
export function CardHeader(props: CardProps) {
  const {
      title,
      slug,
  } = props
  return (
    <header>
      {title && (
        <Link href={`/artworks/${slug?.current}`} passHref>
          <h3 itemProp="name">{title}</h3>
        </Link>
      )}
    </header>
  )
}
//#endregion

//#region - Card footer
export function CardFooter(props: CardProps) {
  const {
      date,
      artistSlug,
      artistName,
      artistFace,
  } = props

  return (
    <footer className="mt-2 flex w-full flex-wrap items-center justify-between gap-2">
      <DateStamp
        dateTime={date!}
        itemProp="dateCreated"
        getYear
      />

      <Artist
        face={artistFace}
        name={artistName}
        slug={artistSlug}
      />
    </footer>
  )
}
//#endregion

//#region - Card content
export function Card(props: CardProps & {children: React.ReactNode}) {
  const {
    title,
    date,
    slug,
    artistSlug,
    artistName,
    artistFace,
    children
  } = props

  return (
    <>
      {children} {/* fig>pic>img^figc */}

      <article>
        <CardHeader
          title={title}
          date={date}
          slug={slug}
        />

        <CardFooter
          date={date}
          artistSlug={artistSlug}
          artistName={artistName}
          artistFace={artistFace}
        />
      </article>
    </>
  )
}
//#endregion
