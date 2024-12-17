/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Artwork = {
  _id: string;
  _type: 'artwork';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
  artist?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  genre?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'genre';
  };
  medium?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'medium';
  };
  surface?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'surface';
  };
  microdata?: {
    form?: string;
    artEdition?: number;
    artMedium?: string;
    artworkSurface?: string;
    width?: number;
    height?: number;
  };
  dateCreated?: string;
  price?: number;
};

export type Surface = {
  _id: string;
  _type: 'surface';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Medium = {
  _id: string;
  _type: 'medium';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Genre = {
  _id: string;
  _type: 'genre';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  publishedAt?: string;
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  cv?: string;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
>;

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Artwork
  | Surface
  | Medium
  | Genre
  | Post
  | Author
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)][0...12]{  _id, title, slug}
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{  title, body, mainImage}
export type POST_QUERYResult = {
  title: string | null;
  body: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  } | null;
} | null;
// Variable: searchQuery
// Query: *[_type == "artwork" &&  title match $term + "*"] | order(_createdAt desc) [$start...$end] {  // ...,    _id,  title,  slug,  "url": mainImage.asset->url,  "imageMeta":   mainImage.asset->metadata{    blurHash,    palette {      "dominant": dominant.background,      "vibrant": {        "hue": vibrant.background,        "tint": lightVibrant.background,        "shade": darkVibrant.background,      },      "muted": {        "hue": muted.background,        "tint": lightMuted.background,        "shade": darkMuted.background,      }    },    lqip,    dimensions {      width, height,      aspectRatio    }  },  dateCreated,  "artistSlug": artist->slug.current,  "artistName": artist->name,  "artistFace": artist->image.asset->{ url },  genre->{title, slug{ current }},  medium->{title, slug{ current }},  surface->{title, slug{ current }},  "width": microdata.width,  "height": microdata.height,  "edition": microdata.artEdition,  price}
export type SearchQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  url: string | null;
  imageMeta: {
    blurHash: string | null;
    palette: {
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
    } | null;
    lqip: string | null;
    dimensions: {
      width: number | null;
      height: number | null;
      aspectRatio: number | null;
    } | null;
  } | null;
  dateCreated: string | null;
  artistSlug: string | null;
  artistName: string | null;
  artistFace: {
    url: string | null;
  } | null;
  genre: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  medium: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  surface: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  width: number | null;
  height: number | null;
  edition: number | null;
  price: number | null;
}>;
// Variable: slugListQuery
// Query: *[_type == $type && defined(slug.current)].slug.current
export type SlugListQueryResult = Array<string | null>;
// Variable: authorsQuery
// Query: *[_type == "author"]{  // ...,    slug, name, bio, cv, image{    asset->{ url, metadata }  }}
export type AuthorsQueryResult = Array<{
  slug: Slug | null;
  name: string | null;
  bio: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }> | null;
  cv: string | null;
  image: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
}>;
// Variable: authorBySlugQuery
// Query: *[_type == "author" && slug.current == $slug][0]{  // ...,    slug, name, bio, cv, image{    asset->{ url, metadata }  },  // Get all works for a person (creator/artist)  "relatedArtworks": *[_type == "artworks" && references(^._id)]{      _id,  title,  slug,  "url": mainImage.asset->url,  "imageMeta":   mainImage.asset->metadata{    blurHash,    palette {      "dominant": dominant.background,      "vibrant": {        "hue": vibrant.background,        "tint": lightVibrant.background,        "shade": darkVibrant.background,      },      "muted": {        "hue": muted.background,        "tint": lightMuted.background,        "shade": darkMuted.background,      }    },    lqip,    dimensions {      width, height,      aspectRatio    }  },  dateCreated,  "artistSlug": artist->slug.current,  "artistName": artist->name,  "artistFace": artist->image.asset->{ url },  genre->{title, slug{ current }},  medium->{title, slug{ current }},  surface->{title, slug{ current }},  "width": microdata.width,  "height": microdata.height,  "edition": microdata.artEdition,  price  }}
export type AuthorBySlugQueryResult = {
  slug: Slug | null;
  name: string | null;
  bio: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }> | null;
  cv: string | null;
  image: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
  relatedArtworks: Array<never>;
} | null;
// Variable: artworksQuery
// Query: *[_type == "artwork"]{  // ...,    _id,  title,  slug,  "url": mainImage.asset->url,  "imageMeta":   mainImage.asset->metadata{    blurHash,    palette {      "dominant": dominant.background,      "vibrant": {        "hue": vibrant.background,        "tint": lightVibrant.background,        "shade": darkVibrant.background,      },      "muted": {        "hue": muted.background,        "tint": lightMuted.background,        "shade": darkMuted.background,      }    },    lqip,    dimensions {      width, height,      aspectRatio    }  },  dateCreated,  "artistSlug": artist->slug.current,  "artistName": artist->name,  "artistFace": artist->image.asset->{ url },  genre->{title, slug{ current }},  medium->{title, slug{ current }},  surface->{title, slug{ current }},  "width": microdata.width,  "height": microdata.height,  "edition": microdata.artEdition,  price}
export type ArtworksQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  url: string | null;
  imageMeta: {
    blurHash: string | null;
    palette: {
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
    } | null;
    lqip: string | null;
    dimensions: {
      width: number | null;
      height: number | null;
      aspectRatio: number | null;
    } | null;
  } | null;
  dateCreated: string | null;
  artistSlug: string | null;
  artistName: string | null;
  artistFace: {
    url: string | null;
  } | null;
  genre: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  medium: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  surface: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  width: number | null;
  height: number | null;
  edition: number | null;
  price: number | null;
}>;
// Variable: artworkBySlugQuery
// Query: *[_type == "artwork" && slug.current == $slug][0]{  // ...,    _id,  title,  slug,  "url": mainImage.asset->url,  "imageMeta":   mainImage.asset->metadata{    blurHash,    palette {      "dominant": dominant.background,      "vibrant": {        "hue": vibrant.background,        "tint": lightVibrant.background,        "shade": darkVibrant.background,      },      "muted": {        "hue": muted.background,        "tint": lightMuted.background,        "shade": darkMuted.background,      }    },    lqip,    dimensions {      width, height,      aspectRatio    }  },  dateCreated,  "artistSlug": artist->slug.current,  "artistName": artist->name,  "artistFace": artist->image.asset->{ url },  genre->{title, slug{ current }},  medium->{title, slug{ current }},  surface->{title, slug{ current }},  "width": microdata.width,  "height": microdata.height,  "edition": microdata.artEdition,  price,  metadata {    ...,    "ogimage": image.asset->url + "?w=1200"  }}
export type ArtworkBySlugQueryResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  url: string | null;
  imageMeta: {
    blurHash: string | null;
    palette: {
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
    } | null;
    lqip: string | null;
    dimensions: {
      width: number | null;
      height: number | null;
      aspectRatio: number | null;
    } | null;
  } | null;
  dateCreated: string | null;
  artistSlug: string | null;
  artistName: string | null;
  artistFace: {
    url: string | null;
  } | null;
  genre: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  medium: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  surface: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  width: number | null;
  height: number | null;
  edition: number | null;
  price: number | null;
  metadata: null;
} | null;
// Variable: artworkByArtistQuery
// Query: *[_type == "artwork"  && defined(artist)  && artist->slug.current == $slug]{    _id,  title,  slug,  "url": mainImage.asset->url,  "imageMeta":   mainImage.asset->metadata{    blurHash,    palette {      "dominant": dominant.background,      "vibrant": {        "hue": vibrant.background,        "tint": lightVibrant.background,        "shade": darkVibrant.background,      },      "muted": {        "hue": muted.background,        "tint": lightMuted.background,        "shade": darkMuted.background,      }    },    lqip,    dimensions {      width, height,      aspectRatio    }  },  dateCreated,  "artistSlug": artist->slug.current,  "artistName": artist->name,  "artistFace": artist->image.asset->{ url },  genre->{title, slug{ current }},  medium->{title, slug{ current }},  surface->{title, slug{ current }},  "width": microdata.width,  "height": microdata.height,  "edition": microdata.artEdition,  price}
export type ArtworkByArtistQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  url: string | null;
  imageMeta: {
    blurHash: string | null;
    palette: {
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
    } | null;
    lqip: string | null;
    dimensions: {
      width: number | null;
      height: number | null;
      aspectRatio: number | null;
    } | null;
  } | null;
  dateCreated: string | null;
  artistSlug: string | null;
  artistName: string | null;
  artistFace: {
    url: string | null;
  } | null;
  genre: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  medium: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  surface: {
    title: string | null;
    slug: {
      current: string | null;
    } | null;
  } | null;
  width: number | null;
  height: number | null;
  edition: number | null;
  price: number | null;
}>;
// Variable: artworkFilterTypesQuery
// Query: *[_type == $filterType &&  count(*[_type == "artwork" && references(^._id)]) > 0]|order(title) {  // ...,  title,  slug{ current }}
export type ArtworkFilterTypesQueryResult = Array<
  | {
      title: string | null;
      slug: null;
    }
  | {
      title: null;
      slug: {
        current: string | null;
      } | null;
    }
  | {
      title: string | null;
      slug: {
        current: string | null;
      } | null;
    }
>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "post" && defined(slug.current)][0...12]{\n  _id, title, slug\n}': POSTS_QUERYResult;
    '*[_type == "post" && slug.current == $slug][0]{\n  title, body, mainImage\n}': POST_QUERYResult;
    '*[_type == "artwork" &&\n  title match $term + "*"\n] | order(_createdAt desc) [$start...$end] {\n  // ...,\n  \n  _id,\n  title,\n  slug,\n  "url": mainImage.asset->url,\n  "imageMeta": \n  mainImage.asset->metadata{\n    blurHash,\n    palette {\n      "dominant": dominant.background,\n      "vibrant": {\n        "hue": vibrant.background,\n        "tint": lightVibrant.background,\n        "shade": darkVibrant.background,\n      },\n      "muted": {\n        "hue": muted.background,\n        "tint": lightMuted.background,\n        "shade": darkMuted.background,\n      }\n    },\n    lqip,\n    dimensions {\n      width, height,\n      aspectRatio\n    }\n  }\n,\n  dateCreated,\n  "artistSlug": artist->slug.current,\n  "artistName": artist->name,\n  "artistFace": artist->image.asset->{ url },\n  genre->{title, slug{ current }},\n  medium->{title, slug{ current }},\n  surface->{title, slug{ current }},\n  "width": microdata.width,\n  "height": microdata.height,\n  "edition": microdata.artEdition,\n  price\n\n}': SearchQueryResult;
    '*[_type == $type && defined(slug.current)].slug.current': SlugListQueryResult;
    '*[_type == "author"]{\n  // ...,\n  \n  slug, name, bio, cv, image{\n    asset->{ url, metadata }\n  }\n\n}': AuthorsQueryResult;
    '*[_type == "author" && slug.current == $slug][0]{\n  // ...,\n  \n  slug, name, bio, cv, image{\n    asset->{ url, metadata }\n  }\n,\n  // Get all works for a person (creator/artist)\n  "relatedArtworks": *[_type == "artworks" && references(^._id)]{\n    \n  _id,\n  title,\n  slug,\n  "url": mainImage.asset->url,\n  "imageMeta": \n  mainImage.asset->metadata{\n    blurHash,\n    palette {\n      "dominant": dominant.background,\n      "vibrant": {\n        "hue": vibrant.background,\n        "tint": lightVibrant.background,\n        "shade": darkVibrant.background,\n      },\n      "muted": {\n        "hue": muted.background,\n        "tint": lightMuted.background,\n        "shade": darkMuted.background,\n      }\n    },\n    lqip,\n    dimensions {\n      width, height,\n      aspectRatio\n    }\n  }\n,\n  dateCreated,\n  "artistSlug": artist->slug.current,\n  "artistName": artist->name,\n  "artistFace": artist->image.asset->{ url },\n  genre->{title, slug{ current }},\n  medium->{title, slug{ current }},\n  surface->{title, slug{ current }},\n  "width": microdata.width,\n  "height": microdata.height,\n  "edition": microdata.artEdition,\n  price\n\n  }\n}': AuthorBySlugQueryResult;
    '*[_type == "artwork"]{\n  // ...,\n  \n  _id,\n  title,\n  slug,\n  "url": mainImage.asset->url,\n  "imageMeta": \n  mainImage.asset->metadata{\n    blurHash,\n    palette {\n      "dominant": dominant.background,\n      "vibrant": {\n        "hue": vibrant.background,\n        "tint": lightVibrant.background,\n        "shade": darkVibrant.background,\n      },\n      "muted": {\n        "hue": muted.background,\n        "tint": lightMuted.background,\n        "shade": darkMuted.background,\n      }\n    },\n    lqip,\n    dimensions {\n      width, height,\n      aspectRatio\n    }\n  }\n,\n  dateCreated,\n  "artistSlug": artist->slug.current,\n  "artistName": artist->name,\n  "artistFace": artist->image.asset->{ url },\n  genre->{title, slug{ current }},\n  medium->{title, slug{ current }},\n  surface->{title, slug{ current }},\n  "width": microdata.width,\n  "height": microdata.height,\n  "edition": microdata.artEdition,\n  price\n\n}': ArtworksQueryResult;
    '*[_type == "artwork" && slug.current == $slug][0]{\n  // ...,\n  \n  _id,\n  title,\n  slug,\n  "url": mainImage.asset->url,\n  "imageMeta": \n  mainImage.asset->metadata{\n    blurHash,\n    palette {\n      "dominant": dominant.background,\n      "vibrant": {\n        "hue": vibrant.background,\n        "tint": lightVibrant.background,\n        "shade": darkVibrant.background,\n      },\n      "muted": {\n        "hue": muted.background,\n        "tint": lightMuted.background,\n        "shade": darkMuted.background,\n      }\n    },\n    lqip,\n    dimensions {\n      width, height,\n      aspectRatio\n    }\n  }\n,\n  dateCreated,\n  "artistSlug": artist->slug.current,\n  "artistName": artist->name,\n  "artistFace": artist->image.asset->{ url },\n  genre->{title, slug{ current }},\n  medium->{title, slug{ current }},\n  surface->{title, slug{ current }},\n  "width": microdata.width,\n  "height": microdata.height,\n  "edition": microdata.artEdition,\n  price\n,\n  metadata {\n    ...,\n    "ogimage": image.asset->url + "?w=1200"\n  }\n}': ArtworkBySlugQueryResult;
    '*[_type == "artwork"\n  && defined(artist)\n  && artist->slug.current == $slug\n]{\n  \n  _id,\n  title,\n  slug,\n  "url": mainImage.asset->url,\n  "imageMeta": \n  mainImage.asset->metadata{\n    blurHash,\n    palette {\n      "dominant": dominant.background,\n      "vibrant": {\n        "hue": vibrant.background,\n        "tint": lightVibrant.background,\n        "shade": darkVibrant.background,\n      },\n      "muted": {\n        "hue": muted.background,\n        "tint": lightMuted.background,\n        "shade": darkMuted.background,\n      }\n    },\n    lqip,\n    dimensions {\n      width, height,\n      aspectRatio\n    }\n  }\n,\n  dateCreated,\n  "artistSlug": artist->slug.current,\n  "artistName": artist->name,\n  "artistFace": artist->image.asset->{ url },\n  genre->{title, slug{ current }},\n  medium->{title, slug{ current }},\n  surface->{title, slug{ current }},\n  "width": microdata.width,\n  "height": microdata.height,\n  "edition": microdata.artEdition,\n  price\n\n}': ArtworkByArtistQueryResult;
    '*[_type == $filterType &&\n  count(*[_type == "artwork" && references(^._id)]) > 0\n]|order(title) {\n  // ...,\n  title,\n  slug{ current }\n}': ArtworkFilterTypesQueryResult;
  }
}