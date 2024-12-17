import { DynamicSegmentProps } from '@/components/custom.types';
import { getArtwork } from '@/app/api/artworks/getArtworks'

import Artwork from '@/components/Artwork'
import Modal from '@/components/ui/modal'

export default async function ArtworkModal(props: DynamicSegmentProps) {
  const params = props.params;
  const artwork = await getArtwork(params)

  return (
    <Modal>
      <Artwork data={artwork} />
    </Modal>
  )
}
