'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SearchIcon } from '@/components/icons';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // console.log(`Searching... ${term}`);

    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    const params = new URLSearchParams(searchParams);

    // when the user types a new search query, reset the page number to 1
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 350)

  return (
    <search role="search" className="glow relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Поиск
      </label>
      <input
        type="search"
        className="search peer block"
        placeholder={placeholder}
        size={30}
        // minLength={4}
        // maxLength={8}
        // pattern="[A-z]"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <SearchIcon />
    </search>
  );
}

// https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-2/
// https://www.scottohara.me/blog/2022/02/05/dynamic-results.html
