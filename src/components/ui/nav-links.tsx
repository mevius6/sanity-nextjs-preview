/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItems(params: { data: any; }) {
  const { data } = params
  const pathname = usePathname()
  return (
    (<ul
      className="list-none"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      aria-label="Main Menu"
      role="directory">
      {data.map((item: any) => (
        <li key={item.id}>
          {(// (index > 0) ?

            (<Link href={item.path}
              itemProp="url"
              className={
                `link ${pathname === item.path ? 'active' : ''}`
              }>
              <span className="nav-link text" itemProp="name">
                {item.title}
              </span>
            </Link>)

            // : <Link
            //     href="/"
            //     itemProp="url"
            //     aria-label="Home Page"
            //     aria-current="page"
            //     className={`link ${pathname === '/' ? 'active' : ''}`}>
            //     <span itemProp="name">
            //       Главная
            //     </span>
            //   </Link>
          )}
        </li>
      ))}
    </ul>)
  );
}

// TODO separate NavItem component
// See: https://github.com/vercel/next-app-router-playground/blob/main/ui/global-nav.tsx
