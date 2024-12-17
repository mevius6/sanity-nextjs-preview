export default function LocalHead({
  multiface=false,
  title,
  subtitle
}: Readonly<{
  multiface?: false | true;
  title: React.ReactNode | string;
  subtitle: React.ReactNode | string;
}>) {
  return (
    <hgroup className="intro flex flex-col items-center justify-between text-center init-reveal">
      <h1>
        {title?.toString()
          .split('\x20').map((v: string, i: number) =>
            // by word; preserve ws
            <span key={i} className="block whitespace-pre-wrap">{
              (i > 0 && multiface)
                ? <HeadEm text={v} />
                : (i==0) ? `${v}\x20` : v
            }</span>
        )}
      </h1>
      <p className="lead self-center text-balance uppercase" role="doc-subtitle">
        {subtitle}
      </p>
    </hgroup>
  )
}

export function HeadEm({
  text
  // children
}: Readonly<{
  text: string
  // children: React.ReactNode
}>) {
  const rules = {
    fontFamily: 'var(--font-serif)',
    fontVariationSettings: '"wght" 250, "opsz" 48, "ital" 1',
    color: 'light-dark(var(--sw-antiq-brown), var(--sw-pale-moss))'
  }
  const classes = 'gradient-text block md:inline-block'

  return <span style={{...rules}} className={classes}>{text}</span>
}
