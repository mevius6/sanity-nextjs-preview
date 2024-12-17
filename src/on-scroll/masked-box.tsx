// Block with dividers below and above
export default function MaskedBox({
  below,
  inner,
  above
}: Readonly<{
  below?: React.ReactNode;
  inner?: React.ReactNode;
  above?: React.ReactNode
}>) {
  return (
    <>
      {below && (
        <div className="box-wrap">
          <div className="below-mask-box">{below}</div>
        </div>
      )}
      <div className="box-wrap">
        <div className="mask-box">{inner}</div>
      </div>
      {above && (
        <div className="box-wrap">
          <div className="above-mask-box">{above}</div>
        </div>
      )}
    </>
  )
}
