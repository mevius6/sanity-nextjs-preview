// REFS Dark mode via libs
// - https://ui.shadcn.com/docs/dark-mode/next
// - https://mui.com/material-ui/customization/dark-mode
// - https://nextui.org/docs/customization/dark-mode
// - https://github.com/pacocoursey/next-themes

/**
 * Theme Switcher [modern]
 * @see
 * - https://wicg.github.io/web-preferences-api/
 * - https://github.com/bramus/chrome-dark-mode-toggle
 * - https://www.bram.us/2024/04/21/css-color-scheme-dependent-colors-with-light-dark/
 */

export default function ThemeSwitch() {
  return (
    <div className="group flex items-center border border-solid">
      <label id="l1" htmlFor="theme-select">
        Оформление:&nbsp;
      </label>
      <select
        id="theme-select"
        // name="color-scheme"
        className="theme cursor-pointer py-1 px-2"
        // title="Изменить тему оформления интерфейса"
        // title=" Вариант по уолчанию"
        defaultValue={"light dark"}
        // https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA9
        aria-labelledby="l1 theme-select"
        // onSelect={}
      >
        {/* Светлая тема */}
        <option value="light">Светлое</option>
        {/* Тёмная тема; ночной режим */}
        <option value="dark">Тёмное</option>
        {/* Вариант по умолчанию • Системная тема */}
        <option value="light dark">Авто</option>
        <hr />
        {/* Принудительно установить… */}
        <option value="monochrome">Монохромное</option>
        {/* <option value="dimmed">Dim</option> */}
      </select>
    </div>
  )
}
