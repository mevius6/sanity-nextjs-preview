import { ArtworkDetails } from '@/components/ArtworkDetails';
import { ArtworkImage } from '@/components/ArtworkImage';
import Artist from '@/components/Artist';
import DateStamp, { YYYY } from '@/components/Date';
import Link from 'next/link';
import { type ArtworkData } from '@/components/custom.types';

export default function Artwork(props: {
  data: ArtworkData;
  caption?: boolean;
  tags?: boolean;
}) {
  const {
    data: {
      slug,
      url,
      title,
      genre,
      artistSlug,
      artistName,
      artistFace,
      imageMeta,
      dateCreated,
      medium,
      surface,
      width,
      height,
      price,
      edition
    },
    caption = false,
    tags = true
  } = props;

  const { lqip, palette, dimensions: dims } = imageMeta;

  // const artMedium = medium!.charAt(0).toUpperCase() + medium!.slice(1);

  /**
   * Examples of a one-line explanation (caption):
   * - https://w.wiki/BtAF; https://w.wiki/_r9sn
   * - https://my.tretyakov.ru/app/masterpiece/10935
   */
  const cap = `${artistName}. ${title}. ${YYYY}. ${medium?.title}, ${surface?.title}, ${width} × ${height} см. ${genre?.title}`;

  return (
    <article className="gap-8">
      <header className="col-span-full grid grid-cols-subgrid gap-[inherit]">

        {title && (
          <Link href={`/artworks/${slug?.current}`} passHref
            className="col-start-1">
            <h1 itemProp="name" className="text-[var(--foreground)]">
              {title}
            </h1>
          </Link>
        )}

        {/* {tags && ( // TODO <PickList />
          <div className="tagcloud col-start-2 row-start-2 flex items-center">
            <h4 className="sr-only" id="TagcloudTitle">Теги</h4>{' '}
            <ul aria-labelledby="TagcloudTitle">
              <li key={1}>
                <Link href={`${genre?.slug.current}`}>
                  <b className="kw rounded-full px-2 py-1">{genre?.title}</b>
                </Link>
              </li>
            </ul>
          </div>
        )} */}

        <div className="col-start-1 row-start-2 flex w-full flex-wrap items-center justify-between gap-2">
          <DateStamp
            dateTime={dateCreated}
            itemProp="dateCreated"
            getYear
          />

          <Artist
            face={artistFace}
            name={artistName}
            slug={artistSlug}
          />
        </div>
      </header>

      <ArtworkImage
        url={url}
        alt={cap}
        width={dims?.width} height={dims?.height}
        ratio={dims?.aspectRatio}
        lqip={lqip}
        palette={palette}
        caption={caption}
      />

      <ArtworkDetails
        artistName={artistName}
        medium={medium}
        surface={surface}
        width={width} height={height}
        price={price}
        edition={edition}
      />
    </article>
  );
}
