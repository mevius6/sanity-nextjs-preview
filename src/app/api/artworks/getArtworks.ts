import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
// import { sanityFetch as fetchSanityLive } from '@/sanity/lib/live';
import {
  artworkBySlugQuery,
  artworkFilterTypesQuery,
  searchQuery,
  slugListQuery
} from '@/sanity/lib/queries';
import {
  type Genre,
  type Medium,
  type Surface,
  type SearchQueryResult,
  type SlugListQueryResult
} from '#/sanity.types';
import { type QueryParams } from 'sanity';
import {
  type ArtworkData,
  type DynamicSegmentProps
} from '@/components/custom.types';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular API
// doesn't currently use sensitive environment variables, it's
// good practice to add `server-only` preemptively.
import 'server-only';

// NOTE
// https://nextjs.org/docs/messages/next-dynamic-api-wrong-context
// https://nextjs.org/docs/app/api-reference/functions/draft-mode

export async function getArtwork(params: DynamicSegmentProps['params']) {
  const artwork = await sanityFetch<ArtworkData>({
    query: artworkBySlugQuery,
    params,
    tags: ['artwork'],
  });

  // Render the closest `not-found.js`
  if (!artwork) notFound()

  return artwork;
}

export async function getArtworks(params: QueryParams) {
  const artworks = await sanityFetch<SearchQueryResult>({
    query: searchQuery,
    params,
    tags: ['artwork', 'author'] // revalidate all pages with current tags
  });

  return artworks;
}

export async function getArtworkSlugList() {
  const slugs = await sanityFetch<SlugListQueryResult>({
    query: slugListQuery,
    params: {
      type: 'artwork'
    },
    tags: ['artwork']
  });

  // Render the closest `not-found.js`
  if (slugs.length === 0) notFound()

  return slugs;
}

export async function getArtworkFilterList(params: { filterType: string }) {
  const data = await sanityFetch<Genre[] | Medium[] | Surface[]>({
    query: artworkFilterTypesQuery,
    params,
  });

  return data;
}

// TODO Refactor: using GROQ smart queries
// https://www.sanity.io/docs/high-performance-groq
// https://www.sanity.io/docs/paginating-with-groq
