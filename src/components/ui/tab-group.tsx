'use client'

import {
  useRouter,
  // useSelectedLayoutSegment
} from 'next/navigation'

// import { Tab } from '@/ui/tab'

/* REFS GUI Tabs
  - https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#tab-groups
  - https://ui.shadcn.com/docs/components/tabs
  - https://ariakit.org/examples/tab-next-router
  - https://nextui.org/docs/components/tabs
  - https://github.com/argyleink/gui-challenges/tree/main/tabs
  - https://nextui.org/docs/components/tabs
*/

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
  parallelRoutesKey?: string;
}

export const TabGroup = ({
  path,
  // parallelRoutesKey,
  items,
}: {
  path: string;
  // parallelRoutesKey?: string;
  items: Item[];
}) => {
  return (
    <div className="tabs gap-2">
      {items.map((item, index) => (
        // <Tab
        //   key={path + item.slug}
        //   item={item}
        //   path={path}
        //   parallelRoutesKey={parallelRoutesKey}
        // />
        <RadioTab
          index={index}
          key={path + item.slug}
          item={item}
          path={path}
          // parallelRoutesKey={parallelRoutesKey}
        />
      ))}
      <div className="tabs__indicator" aria-hidden="true">
        <div className="tabs__track">
          <label htmlFor="tab-1">{items[0].text}</label>
          <label htmlFor="tab-2">{items[1].text}</label>
          <label htmlFor="tab-3">{items[2].text}</label>
        </div>
      </div>
    </div>
  )
}

export function RadioTab({
  index,
  path,
  // parallelRoutesKey,
  item,
}: {
  index: number;
  path: string;
  // parallelRoutesKey?: string;
  item: Item;
}) {
  const router = useRouter()
  // const segment = useSelectedLayoutSegment(parallelRoutesKey);

  return (<>
    <label htmlFor={`tab-${index+1}`}>
      {item.text}
    </label>
    <input
      className="sr-only"
      type="radio"
      name="tabs"
      id={`tab-${index+1}`}
      onChange={() => router.push(item.slug
        ? path + '/' + item.slug
        : path)}
    />
  </>)
}
