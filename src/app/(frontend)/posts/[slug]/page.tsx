import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";

import { client, sanityFetch } from "@/sanity/lib/client";
import {
  POST_QUERYResult,
  POSTS_QUERYResult,
} from "#/sanity.types";
import { Post } from "@/components/Post";

// TODO Cached pagination result

// All posts besides the top 10 will be a 404
// export const dynamicParams = false;
// See: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams

export async function generateStaticParams() { // SSG
  const posts = await client.fetch<POSTS_QUERYResult>(
    POSTS_QUERY,
    {},
    { perspective: "published" }
  );

  // Render the first 10 posts at build time
  // const topPosts = slugs.slice(0, 10)
  // See: https://nextjs.org/docs/app/api-reference/functions/generate-static-params#subset-of-paths-at-build-time

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page(props: { params: Promise<QueryParams> }) {
  const params = await props.params;
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
