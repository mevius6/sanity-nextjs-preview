import {
  type ArtworkMeta,
  type ArtistProps
} from "@/components/custom.types";
import { currencyFormat, spacedEmDash } from "@/components/custom.constants";

export function ArtworkDetails(props: ArtworkMeta & ArtistProps) {
  const {
      artistName,
      medium,
      surface,
      width, height,
      price,
      edition
  } = props
  return (
    <details className="group sticky top-0 max-w-full overflow-hidden" open>
      <summary className="select-none">Подробности</summary>
      <ul className="mx-3 flex flex-col flex-wrap gap-2 py-2 pt-6">

        <li>Автор{spacedEmDash}<wbr />
          <b
            itemProp="creator" // or "artist"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{artistName}</span>
          </b>
        </li>

        {(width && height) && (<li>Размер{spacedEmDash}<wbr />
          <span
            itemProp="width"
            itemScope itemType="https://schema.org/Distance"
          >
            {width}
          </span>
          &nbsp;&times;&nbsp;
          <span
            itemProp="height"
            itemScope itemType="https://schema.org/Distance"
          >
            {height}
          </span>
        </li>)}

        <li>Техника и материал{spacedEmDash}<wbr />
          {/* Техника */}
          <span itemProp="artMedium">
            {medium.title}
          </span>, <wbr />
          {/* Материал */}
          <span itemProp="artworkSurface">
            {surface.title}
          </span>
        </li>

        {(price) && (<li>Стоимость{spacedEmDash}<wbr />
          <span
            itemProp="offers"
            itemScope itemType="https://schema.org/AggregateOffer"
          >
            <meta itemProp="priceCurrency" content="RUB" />
            от&nbsp;
            <span itemProp="lowPrice" content={`${price}`}>
              {currencyFormat(price)}
            </span>
          </span>
        </li>)}

        <li>{/* Количество репродукций и копий картины */}
          <em itemProp="artEdition" className="tracking-wider">
            {(edition! > 1)
              ? 'Доступно несколько копий'
              : 'В единственном экземпляре'}
          </em>
        </li>
      </ul>
    </details>
  )
}
