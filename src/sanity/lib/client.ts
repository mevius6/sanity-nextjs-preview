import "server-only";

import { draftMode } from "next/headers";
import { createClient, type QueryOptions, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,   // "vX" — experimental version of the API
                // that includes the live content capabilities.
  useCdn: true, // Set to false if statically generating pages,
                // using ISR or tag-based revalidation.
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/admin",
  },
});

// REFS Sanity + Next.js caching
// https://nextjs.org/blog/our-journey-with-caching
// https://www.sanity.io/learn/course/controlling-cached-content-in-next-js/combining-sanity-cdn-with-the-next-js-cache

export async function sanityFetch<QueryResponse>({ // helper function
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = (await draftMode()).isEnabled;
  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false;
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        // https://www.sanity.io/docs/presenting-and-previewing-content
        perspective: "previewDrafts",
        stega: true,
      } satisfies QueryOptions)),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}
