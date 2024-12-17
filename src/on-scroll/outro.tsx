import PullQuote from '@/components/ui/pullquote'

export default function Outro(params:any) {
  const { data } = params
  const DIV = `\
    QFFYFPwIYFwGFwGFwGFwGUPwIGUGGE\n
    ZRRURPxIURxTRxTRxTRxTYPxITYTTC`

  return (
    <section className="outro">
      {/* <div className="ornament">{DIV}</div> */}
      <PullQuote text={data} />
    </section>
  )
}
