interface PriceRangeFilterProps {
  priceRangeMin: number
  onPriceRangeChange: (newPriceRange: number) => void
  min: number
  max: number
  step: number
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// https://ui.shadcn.com/docs/components/slider
// https://www.radix-ui.com/primitives/docs/components/slider

export default function Slider({
  priceRangeMin,
  onPriceRangeChange,
  min = 0,
  max = 999999,
  step = 1
}: PriceRangeFilterProps) {
  return (
    <fieldset className="flex flex-col collapsible">
      <legend>
        <input id={`open-4`} type="checkbox" className="sr-only" />
        <label htmlFor={`open-4`} className="has-focus-indicator">
          Цена<span></span>
        </label>
      </legend>

      <div className="wrapper">
        <input
          type="range"
          // list="markers"
          min={min}
          max={max}
          step={step}
          // defaultValue={50}
          value={`${priceRangeMin}`}
          onChange={(e) => {
            onPriceRangeChange(Number(e.currentTarget.value))
            e.currentTarget
              .nextSibling!
              .firstChild!
              .textContent = `$${e.currentTarget.value}`
          }}
        />

        <div className="flex justify-between">
          <span>{new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(min)}</span>
          <span>{new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencySign: "accounting",
            signDisplay: "always",
            maximumFractionDigits: 2,
            roundingIncrement: 5,
            roundingMode: "halfCeil",
          }).format(max)}</span>
        </div>

        {/* <datalist id="markers">
          {options.map(option => <option value={option.v}></option>)}
        </datalist> */}
      </div>
    </fieldset>
  )
}
