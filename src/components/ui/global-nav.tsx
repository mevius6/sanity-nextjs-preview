'use client'

import { useRouter, usePathname, useSelectedLayoutSegment } from 'next/navigation'
import NavItems from '@/components/ui/nav-links'

/* REFS
  - https://ui.shadcn.com/docs/components/sheet
  - https://webaim.org/techniques/skipnav/
  - https://kb.daisy.org/publishing/docs/html/dpub-aria/doc-toc.html
  - https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
*/

// Global Site Navigation (sidebar)
export default function SideNav(props: {
  data: {
    id: number;
    title: string;
    path: string;
  }[]
}) {
  const { data } = props
  const router = useRouter()
  const pathname = usePathname()
  const segment = useSelectedLayoutSegment()

  return (
    <aside id="sidenav-open">
      <a href="#main" className="skip-link sr-only">
        Skip to main content &DownArrowBar;
      </a>
      <nav
        id="Nav"
        className="nav backdrop-blur-lg backdrop-saturate-150"
        aria-label="Primary Navigation"
        role="doc-toc">
          <NavItems data={data} />
      </nav>

      {/* TODO fix nav issues
        - [ ] close after click on nav item
        - [x] clean urls issue [1]
        - [x] page full reload [2] */}
      <a
        href='#'
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
        onClick={() => (pathname !== '/') && router.replace(`/${segment}`)}
      ></a>

      {/* <a href="JavaScript:void(0);">_</a> */}
      {/* <a
        href="#" // [1]

        // [2]
        // href={pathname}
        // href={`/${segment}`}

        // onChange={() => history.go(-1)}
        // not equals
        // onChange={() => router.back()}

        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
        ></a> */}

      {/* REFS
        - https://nextjs.org/docs/app/api-reference/functions/use-router
        - https://html.spec.whatwg.org/#the-history-interface
        - https://html.spec.whatwg.org/#scroll-restoration-mode */}
    </aside>
  )
}
