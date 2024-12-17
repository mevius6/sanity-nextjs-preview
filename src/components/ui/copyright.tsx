export const BRAND_NAME_RU = "Виртуальная галерея Игаевых"

export default function Copyright() {
  const YYYY = new Date(Date.now()).getFullYear()
  return (
    <small className="copr uppercase track-10">
      <span itemProp="name">{BRAND_NAME_RU}</span>
      &nbsp;&copy;&nbsp;
      <time dateTime={`${YYYY}`} itemProp="copyrightYear">{YYYY}</time>
    </small>
  )
}
