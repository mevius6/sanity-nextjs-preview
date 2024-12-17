import { notFound } from 'next/navigation';
// import { sanityFetch } from '@/sanity/lib/client';
import { sanityFetch as fetchSanityLive } from '@/sanity/lib/live';
import {
  authorBySlugQuery,
  authorsQuery,
  slugListQuery
} from '@/sanity/lib/queries';

import 'server-only';

import { type DynamicSegmentProps } from '@/components/custom.types';

export async function getArtistSlugList() {
  const { data: slugs } = await fetchSanityLive({
    query: slugListQuery,
    params: {
      type: 'author'
    }
  });

  if (slugs.length === 0) notFound()

  return slugs;
}

export async function getArtists() {
  const { data: artists } = await fetchSanityLive({
    query: authorsQuery,
    tag: 'author',
  })

  return artists;
}

export async function getArtist(params: DynamicSegmentProps['params']) {
  const { data: artist } = await fetchSanityLive({
    query: authorBySlugQuery,
    params,
    tag: 'author',
  })

  return artist;
}
