import Artworks from '@/components/Artworks'
import CatalogFilters from '@/components/ui/catalog-filters'

import { Suspense } from 'react'
import Loading from './loading'

import { sanityFetch } from '@/sanity/lib/live';
import {
  artworkByArtistQuery,
  searchQuery
} from '@/sanity/lib/queries';
import {
  getArtworkSlugList,
  getArtworkFilterList
} from '@/app/api/artworks/getArtworks';
import {
  getArtists,
  // getArtistSlugList
} from '@/app/api/artists/getArtists';

export const ITEMS_PER_PAGE = 6; /* TODO dynamic value */

/**
 * Change the dynamic behavior of a layout or page to fully static or fully dynamic.
 *
 * [ref]: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 *
 * @see [Docs][ref]
 */
export const dynamic = 'force-dynamic';

export default async function CatalogPage(
  props: {
    searchParams?: Promise<{
      query?: string;
      artist?: string;
      genre?: string;
      medium?: string;
      surface?: string;
      page?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const queryParam = searchParams?.query || '';
  const artistParam = searchParams?.artist || '';

  // TODO Retrieve and synchronize pre-selected params on full page reload,
  // e.g. in case of sharing links between users.
  // const genreParam = searchParams?.genre || '';
  // const mediumParam = searchParams?.medium || '';
  // const surfaceParam = searchParams?.surface || '';

  const currentPage = Number(searchParams?.page) || 1;

  // GROQ query → count(*[_type == "artwork"])
  const totalArtworks = (await getArtworkSlugList()).length;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalPages = Math.ceil(Number(totalArtworks / ITEMS_PER_PAGE));

  // REFS Some approaches to pagination
  // Array slicing: https://hdoro.dev/minimal-sanity-io-pagination
  // GROQ's filtering: https://www.sanity.io/docs/paginating-with-groq

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const params = { // limit/offset using dynamic slice range
    start: offset,
    end: currentPage * ITEMS_PER_PAGE,
    term: queryParam,
  }

  // Returns a list of filter-specific options
  const getFilterOptions = async (filterType: string) => await getArtworkFilterList({ filterType });

  const artistsData = await getArtists();
  // const totalArtists = (await getArtistSlugList()).length;

  const filtersData = { // required data for rendering GUI elements
    artistsData: artistsData,
    artworksData: [{
      'title': 'Сюжет',
      'slug': 'genre',
      'items': await getFilterOptions('genre'),
    },{
      'title': 'Техника',
      'slug': 'medium',
      'items': await getFilterOptions('medium'),
    },{
      'title': 'Материал',
      'slug': 'surface',
      'items': await getFilterOptions('surface'),
    }]
  }

  let filteredData; // store

  if (
    artistParam !== 'all' &&
    artistParam?.includes('vladimir')
  ) {
    const { data } = await sanityFetch({
      query: artworkByArtistQuery,
      params: { slug: 'vladimir' }
    });
    filteredData = data;
  } else if (
    artistParam !== 'all' &&
    artistParam?.includes('natalia')
  ) {
    const { data } = await sanityFetch({
      query: artworkByArtistQuery,
      params: { slug: 'natalia' }
    });
    filteredData = data;
  } else {
    const { data } = await sanityFetch({
      query: searchQuery,
      params,
      tag: 'artwork'
    });
    filteredData = data;
  }

  return (
    <section id="Catalog" className="catalog relative min-h-full min-w-full">
      <CatalogFilters data={filtersData} items={filteredData}>
        <Suspense key={queryParam + currentPage} fallback={<Loading />}>
          <Artworks />
        </Suspense>
      </CatalogFilters>
    </section>
  );
}
