'use client'

import type { Item } from '@/components/ui/tab-group'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export const Tab = ({
  path,
  parallelRoutesKey,
  item,
}: {
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) => {
  const segment = useSelectedLayoutSegment(parallelRoutesKey);

  const href = item.slug ? path + '/' + item.slug : path;
  const isActive =
    // Example home pages e.g. `/foo`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/foo/bar`
    segment === item.slug;

  return (
    <Link
      href={href}
      className={`rounded-lg py-1 px-3 ${
        isActive ? '--active' : ''
      }`}>
      {item.text}
    </Link>
  )
}
