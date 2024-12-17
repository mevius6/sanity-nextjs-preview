import { Grid3Icon } from "../icons";

export default function GridViewSwitch() {
  const tooltip = 'Переключить вид отображения и выстроить объекты согласно алгоритму masonry'

  return (
    <fieldset className="flex items-center gap-2 rounded-full border border-[var(--border)]">
      <input
        id="view-toggle"
        type="checkbox"
        name="view"
        className="peer/masonry sr-only"
      />
      <label htmlFor="view-toggle" className="items-center gap-2 p-2 peer-checked/masonry:text-[var(--bm-metallic-gold)] md:flex" title={tooltip}>
        <Grid3Icon />
        {/* Плиточная раскладка */}
      </label>
    </fieldset>
  )
}

// REFS Grid view switch transitions
// - https://tympanus.net/Development/GridViewSwitch/
// - https://tympanus.net/Development/OnScrollViewSwitch/
