// TODO import RevealEffect from './reveal-effect'

// Introduction
export default function Intro(params:any) {
  const { data } = params
  return (
    <section className="intro flex flex-col gap-12">
      <header className="flex min-w-full flex-col overflow-hidden text-center">
        <span className="keyline" style={{
          // @ts-ignore
          '--border-color': 'var(--sw-jogging-path)',
          fontVariationSettings: '"wght" 360, "opsz" 15',
          // var(--forma-300-micro)'
          lineHeight: 'var(--lh-precise)',
          textTransform: 'uppercase',
        }}>{data.firstName}</span>
        <span className="headline block" style={{
          // 200–400 px
          fontSize: 'clamp(7rem, 90.7vw - 31.7rem, 25rem)',
          fontVariationSettings: '"opsz" 72, "wght" 450',
          fontWeight: 700,
          lineHeight: 0.93,
          fontFeatureSettings: "'kern' on",
        }}>{data.lastName}</span>
      </header>
      <article className="m-auto py-12 px-[2ch]">
        <p className="has-dropcap hyphens-auto text-balance">
          {data.about}
        </p>
        <span className="dinkus"></span>
      </article>
    </section>
  )
}
