import Link from "next/link";
import Avatar from '@/components/ui/avatar';
import { ArtistProps } from '@/components/custom.types'

export default function Artist({
  slug,
  name,
  face
}: {
  slug: ArtistProps['artistSlug'];
  name: ArtistProps['artistName'];
  face: ArtistProps['artistFace'];
}) {
  return (
    <Link href={`/artists/${slug}`}
      className="flex items-center justify-between gap-2">
      <em itemProp="artist" itemScope
          itemType="https://schema.org/Person">
        <span itemProp="name">{name}</span>
      </em>
      {<Avatar name={name} image={face} />}
    </Link>
  )
}
