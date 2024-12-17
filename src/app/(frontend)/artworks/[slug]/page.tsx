import { sanityFetch } from '@/sanity/lib/live';
import { artworkBySlugQuery } from '@/sanity/lib/queries';
import { type DynamicSegmentProps } from '@/components/custom.types';
import Artwork from '@/components/Artwork';
// import { getArtworkSlugList } from '@/app/api/artworks/getArtworks';

export default async function ArtworkPage(props: DynamicSegmentProps) {
  const params = props.params;
  const { data } = await getArtwork(params);

  return <Artwork data={data} />
}

// (SSG) prerendered as static HTML
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// export async function generateStaticParams() {
//   const slugs = await getArtworkSlugList();
//   return slugs.map((slug) => ({ slug }));
// }

async function getArtwork(params: DynamicSegmentProps['params']) {
  return await sanityFetch({
    query: artworkBySlugQuery,
    params,
    tag: 'artwork',
  })
}
