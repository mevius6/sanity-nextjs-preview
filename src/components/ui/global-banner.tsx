import { HomeIcon, MenuIcon, CogLoopIcon } from "@/components/icons";
import Link from "next/link";

//#region mock data
const _dock = {
  data: [{
    'id': 0,
    'text': 'Открыть меню', // Nav Disclosure
    'href': '#sidenav-open',
    'icon': 'menu',
    'attr': {'id': 'sidenav-button'}
  }, {
    'id': 1,
    'text': 'Главная',
    'href': '/',
    'icon': 'home',
    'attr': {}
  }, {
    'id': 2,
    'text': 'Контент-студия',
    'href': '/admin',
    'icon': 'cog',
    'attr': {'target': '_blank'}
  }]
}, { data: items } = _dock
//#endregion

// Global Site Header (site-wide banner)
export default function PageBanner() {
  const classes = "squircle flex place-items-center gap-2 border border-(--border) backdrop-blur-md lg:p-2";
  return (
    <header
      id="banner"
      className="pointer-events-none fixed top-0 z-40 flex min-h-11 w-full items-center justify-end"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <ul className="fixed bottom-0 left-0 flex w-full items-center justify-center lg:static lg:mr-4 lg:size-auto lg:gap-3">
        {items.map((item, idx: number) => {
          const setIcon = (id: string) => {
            if (id == 'menu') return <MenuIcon /> // <MenuToCloseIcon />
            if (id == 'home') return <HomeIcon />
            if (id == 'cog') return <CogLoopIcon />
          }
          return (
            <li key={item.id || idx} className="pointer-events-auto">
              {item.href.includes('#')
                ?
                  <a
                    className={classes}
                    href={item.href}
                    title={item.text}
                    aria-label={item.text}
                    {...item?.attr}
                  >
                    {setIcon(item.icon)}
                  </a>
                :
                  <Link
                    className={classes}
                    href={item.href}
                    title={item.text}
                    aria-label={item.text}
                    {...item?.attr}
                  >
                    {setIcon(item.icon)}
                  </Link>
              }
            </li>
          )
        })}
      </ul>
    </header>
  );
}
