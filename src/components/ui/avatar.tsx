import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
import { ArtistProps } from '@/components/custom.types'

export default function Avatar({
  name,
  image: pic,
}: {
  name: ArtistProps['artistName']
  image?: ArtistProps['artistFace']
}) {
  return (
    <div className="flex items-center">
      <div className="relative h-6 w-6">
        <Image
          alt={`${name}`}
          // TODO alt={pic?.alt ?? name}

          // https://googlefonts.github.io/noto-emoji-animation/
          src={pic?.url ?? '/emoji-noto-face-in-clouds.gif'}
          // src={urlFor(pic?.url).height(96).width(96).fit('crop').url()}

          className="aspect-square h-6 w-6 rounded-full object-cover"
          width={24} height={24} // 16–32
        />
      </div>
    </div>
  )
}
