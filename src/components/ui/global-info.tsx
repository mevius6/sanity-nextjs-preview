import ThemeSwitch from '@/components/ui/theme-select'
import Copyright from '@/components/ui/copyright'

// Content info
export default function PageFooter() {
  return (
    <footer
      id="info"
      className="z-20 flex w-full items-center justify-around gap-2 place-self-end"
      itemScope itemType="https://schema.org/WPFooter"
    >
      <ThemeSwitch />
      <Copyright />
    </footer>
  )
}
