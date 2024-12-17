import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

// https://www.sanity.io/docs/live-content-guide
// https://www.sanity.io/docs/live-api-reference
export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});

// TODO
// - https://www.sanity.io/help/react-19
// - https://www.sanity.io/guides/nextjs-app-router-live-preview
