'use client'

import { YYYY } from '@/components/Date';
import { Card } from '@/components/ui/card';
import { ShruggingCard } from '@/components/ui/card-skeleton';
import { ArtworkImage } from '@/components/ArtworkImage';
import Pagination from '@/components/ui/pagination';

import { useCatalogContext } from '@/components/ui/catalog-filters';
import { SearchQueryResult } from '#/sanity.types';

// Empty State: If no items match the current filters,
// a message is displayed to inform the user.
const message = {
  en: 'No items found matching your criteria.',
  ru: 'Не найдено произведений, соответствующих вашим критериям.'
}

export default function Artworks() {
  const context = useCatalogContext()

  if (!context) {
    return (
      <samp className="text-center text-gray-500 mt-8">
        Error: Catalog context is not available.
      </samp>
    )
  }

  const { filteredItems, totalPages } = context

  if (filteredItems.length === 0) {
    return <p className="text-center text-gray-500 mt-8 self-baseline">{message.ru}</p>
  }

  return (<>
    <ul className="grid-rows-masonry grid w-full place-content-start gap-8">
      {filteredItems.map((artwork: SearchQueryResult[0], index: number) => (
        <li
          key={artwork._id || index}
          className="card group"
          itemScope itemType="https://schema.org/VisualArtwork"
        >
          <Card
            title={artwork?.title}
            date={artwork?.dateCreated}
            slug={artwork?.slug}
            artistSlug={artwork?.artistSlug}
            artistName={artwork?.artistName}
            artistFace={artwork?.artistFace}
          >
            <ArtworkImage
              url={artwork?.url}
              alt={`${artwork?.artistName}. ${artwork?.title}. \
                    ${YYYY(artwork?.dateCreated?.toString())}. \
                    ${artwork?.medium?.title}, \
                    ${artwork?.surface?.title}, \
                    ${artwork?.width} × ${artwork?.height} см. \
                    ${artwork?.genre?.title}
                  `}
              width={artwork?.imageMeta?.dimensions?.width}
              height={artwork?.imageMeta?.dimensions?.height}
              ratio={artwork?.imageMeta?.dimensions?.aspectRatio}
              lqip={artwork?.imageMeta?.lqip}
              palette={artwork?.imageMeta?.palette}
              // caption={true}
            />
          </Card>
        </li>
      ))}
      {/* <PushDummies total={4} /> */}
    </ul>
    {totalPages > 1 && (
      <div className="col-span-full my-5 flex w-full justify-center">
        <Pagination
          totalPages={totalPages}
          className="flex h-fit gap-2"
        />
      </div>
    )}
  </>);
}

export function PushDummies(params: { total: number }) {
  const { total: number } = params;
  return (
    <>
      {/* {Array.from(new Array(number)).map(x => */}
      {Array.from({ length: number }).map((_, i) => (
        <li key={i} className="card group glow">
          <div className="z-10 overflow-hidden">
            <ShruggingCard index={i + 1}
              caption={false}
              details={false}
              summary={false} />
          </div>
        </li>
      ))}
    </>
  );
}
