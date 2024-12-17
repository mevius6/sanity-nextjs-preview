import { groq } from "next-sanity";
import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

// REFS GROQ queries
// https://www.sanity.io/docs/query-cheat-sheet
// https://github.com/danielroe/sanity-typed-queries/blob/main/docs/cheat-sheet.md

// Reusable query fragments with some computed attributes

const ARTIST_QUERY_FRAG = `
  slug, name, bio, cv, image{
    asset->{ url, metadata }
  }
`
const IMAGE_QUERY_FRAG = `
  mainImage.asset->metadata{
    blurHash,
    palette {
      "dominant": dominant.background,
      "vibrant": {
        "hue": vibrant.background,
        "tint": lightVibrant.background,
        "shade": darkVibrant.background,
      },
      "muted": {
        "hue": muted.background,
        "tint": lightMuted.background,
        "shade": darkMuted.background,
      }
    },
    lqip,
    dimensions {
      width, height,
      aspectRatio
    }
  }
`
// ...,
// "medium": microdata.artMedium,
// "surface": microdata.artworkSurface,
const ARTWORK_QUERY_FRAG = `
  _id,
  title,
  slug,
  "url": mainImage.asset->url,
  "imageMeta": ${IMAGE_QUERY_FRAG},
  dateCreated,
  "artistSlug": artist->slug.current,
  "artistName": artist->name,
  "artistFace": artist->image.asset->{ url },
  genre->{title, slug{ current }},
  medium->{title, slug{ current }},
  surface->{title, slug{ current }},
  "width": microdata.width,
  "height": microdata.height,
  "edition": microdata.artEdition,
  price
`

export const searchQuery = groq`*[_type == "artwork" &&
  title match $term + "*"
] | order(_createdAt desc) [$start...$end] {
  // ...,
  ${ARTWORK_QUERY_FRAG}
}`

export const slugListQuery = groq`*[_type == $type && defined(slug.current)].slug.current`

export const authorsQuery = groq`*[_type == "author"]{
  // ...,
  ${ARTIST_QUERY_FRAG}
}`

export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0]{
  // ...,
  ${ARTIST_QUERY_FRAG},
  // Get all works for a person (creator/artist)
  "relatedArtworks": *[_type == "artworks" && references(^._id)]{
    ${ARTWORK_QUERY_FRAG}
  }
}`

export const artworksQuery = groq`*[_type == "artwork"]{
  // ...,
  ${ARTWORK_QUERY_FRAG}
}`

export const artworkBySlugQuery = groq`*[_type == "artwork" && slug.current == $slug][0]{
  // ...,
  ${ARTWORK_QUERY_FRAG},
  metadata {
    ...,
    "ogimage": image.asset->url + "?w=1200"
  }
}`

export const artworkByArtistQuery = groq`*[_type == "artwork"
  && defined(artist)
  && artist->slug.current == $slug
]{
  ${ARTWORK_QUERY_FRAG}
}`

// filterType: "genre" | "medium" | "surface"
export const artworkFilterTypesQuery = groq`*[_type == $filterType &&
  count(*[_type == "artwork" && references(^._id)]) > 0
]|order(title) {
  // ...,
  title,
  slug{ current }
}`

// TODO Cacheable queries
// See: https://www.sanity.io/docs/content-source-maps

// NOTE https://github.com/sanity-io/sanity-plugin-media#faq
// {..., "tags": opt.media.tags[]->name.current, }
