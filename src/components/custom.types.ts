import { Slug } from '#/sanity.types';

export type DynamicSegmentProps = {
  params: Promise<{ slug?: string }>
}

// Based on the results of GROQ queries to the Sanity database,
// which are stored in the “sanity.types.ts” file.

//#region hand-crafted interfaces
export interface ImagePalette {
  dominant: string | null;
  vibrant: {
    hue: string | null;
    tint: string | null;
    shade: string | null;
  };
  muted: {
    hue: string | null;
    tint: string | null;
    shade: string | null;
  };
}

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface ImageMeta extends ImageDimensions, ImagePalette {
  blurHash?: string | null;
  lqip: string | null;
  palette: ImagePalette | null;
  dimensions: ImageDimensions | null;
}

export interface ArtistProps { // AuthorBySlugQueryResult
  artistSlug?: string | null;
  artistName?: string | null;
  artistFace?:
    | { url: string | null; }
    | null;
}

export interface ArtworkProps { // ArtworkBySlugQueryResult
  title?: string | null;
  slug?: Slug | null;
  url?: string | null;
  date?: string | null;
}

export interface ArtworkMeta {
  width: number | null;
  height: number | null;
  price: number | null;
  edition: number | null;
  medium: {
    title: string | null;
    slug: Slug;
  };
  surface: {
    title: string | null;
    slug: Slug;
  };
  genre?:
    | { title: string | null; slug: Slug; }
    | null;
}

export interface ArtworkData extends ArtistProps, ArtworkProps, ArtworkMeta {
  imageMeta: ImageMeta; // SearchQueryResult[0]["imageMeta"];
  dateCreated?: string; // | Date | null;
}
//#endregion
