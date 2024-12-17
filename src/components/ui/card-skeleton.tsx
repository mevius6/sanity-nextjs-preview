import Avatar from '@/components/ui/avatar';
import Image from 'next/image';

// TODO
//#region - Card skeleton
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShruggingCard(props: any) {
  // w/o microdata markup
  const { caption = true, details = true, summary = true, index = 1 } = props;
  return (
    <>
      <figure className="group relative aspect-[4/3] overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={'/placeholder.svg'}
          alt="…"
          width={600}
          height={450}
          style={{
            aspectRatio: '600/450',
            objectFit: 'cover'
          }}
          priority
        />
        {caption && (
          <figcaption className="bg-black/20 px-2 py-4 backdrop-blur-sm transition-transform group-hover:translate-y-[-100%]">
            Однострочное пояснение (подпись)
          </figcaption>
        )}
      </figure>
      <article className="p-4">
        <header>
          <h3 className="font-semibold">
            {/* Картина №{index} */}
            Картина #{index}
          </h3>
          <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-2">
            <time dateTime="2038">Y2K38</time>
            <div className="flex items-center gap-2">
              <i className="tracking-wide">Автор</i>
              {<Avatar name={'Автор'} />}
            </div>
          </div>
        </header>
        {summary && <p className="">Краткое описание</p>}
        {details && (
          <details className="mt-4 max-w-full overflow-hidden rounded-md open:bg-black/70">
            <summary className="cursor-pointer rounded-md px-4 py-2 font-medium opacity-70 select-none hover:bg-black/70 hover:opacity-90">Подробности</summary>
            <ul className="border-t-neon-pink mx-3 flex flex-col flex-wrap gap-2 border-t py-2">
              <li>Размер</li>
              <li>Стоимость</li>
              <li>Количество репродукций</li>
            </ul>
          </details>
        )}
      </article>
    </>
  );
}
//#endregion
