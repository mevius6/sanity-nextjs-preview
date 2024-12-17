// import { SearchQueryResult } from "#/sanity.types";
import Image from 'next/image';
import { ImagePalette } from '@/components/custom.types';

export function ArtworkImage(params: {
  alt?: string | null;
  url?: string | null;
  width?: number | null;
  height?: number | null;
  ratio?: number | null;
  caption?: boolean;
  palette?: ImagePalette | null;
  lqip?: string | null;
}) {
  const {
    url,
    alt,
    width, height, ratio,
    caption = false,
    palette,
    lqip
  } = params;

  const swatches = {
    '--swatch-dominant': palette?.dominant,
    '--swatch-vibrant': palette?.vibrant?.hue,
    '--swatch-vibrant-light': palette?.vibrant?.tint,
    '--swatch-vibrant-dark': palette?.vibrant?.shade,
    '--swatch-muted': palette?.muted?.hue,
    '--swatch-muted-light': palette?.muted?.tint,
    '--swatch-muted-dark': palette?.muted?.shade,
  }

  const figStyle = {
    // '--lqip': `url(${lqip})`,
    ...swatches,
  }

  return (
    <figure
      // itemScope itemType='https://schema.org/VisualArtwork'
      className="mat relative col-span-full overflow-hidden"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={{...figStyle}}>
      <picture>
        <Image
          itemProp="image"
          className="h-auto w-full object-cover"
          src={url ?? '/placeholder.svg'}
          alt={alt ?? '…'}
          width={width ?? 600}
          height={height ?? 450}
          style={{
            aspectRatio: `var(--_ratio, ${ratio}) / 1`,
            // aspectRatio: `var(--_w, ${width}) / var(--_h, ${height})`,
            objectFit: 'cover'
          }}
          placeholder="blur"
          blurDataURL={`${lqip}`}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {caption && (
        <figcaption className="absolute w-full px-2 py-4 backdrop-blur-md transition-transform duration-200 group-hover:translate-y-[-100%]">
          <p>{alt}</p>
        </figcaption>
      )}
    </figure>
  );
}
