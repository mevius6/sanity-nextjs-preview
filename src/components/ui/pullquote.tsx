export default function PullQuote(params:string|any) {
  const { text } = params
  return (
    <blockquote className="m-auto max-w-[40ch]" style={{
      fontVariationSettings: 'var(--forma-500-deck)',
      lineHeight: 'var(--lh-thinest)'
    }}>{text}</blockquote>
  )
}
