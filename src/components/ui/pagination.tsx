'use client';

// import { ArrowLeftIcon, ArrowRightIcon } from '@sanity/icons';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';
import Link from 'next/link';
import {
  // useRouter,
  usePathname,
  useSearchParams
} from 'next/navigation';
import { type ComponentProps } from 'react';

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

interface Props extends ComponentProps<"nav"> {
  totalPages: number;
  prevClassName?: string;
  nextClassName?: string;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  onClick?: () => void;
}

export default function Pagination({totalPages, ...props}: Props) {
  // use this hooks to get the current page and set the new page
  // const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const currentPage = Number(searchParams.get('page')) || 1;

  // Creates an instance of the current search parameters.
  // Then, it updates the "page" parameter to the provided page number.
  // Finally, it constructs the full URL using the pathname and updated search parameters.
  const createPageURL = (pageNumber: number | string) => {
    // get the initial selected options from the URL's searchParams
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <nav {...props}>
      {/* <button onClick={(ev) => (currentPage > 1)
        ? router.push(createPageURL(currentPage - 1))
        : ev.currentTarget.toggleAttribute('disabled',true)}>
        <ArrowLeftIcon /></button> */}
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

        if (index === 0) position = 'first';
        if (index === allPages.length - 1) position = 'last';
        if (allPages.length === 1) position = 'single';
        if (page === '...') position = 'middle';

        return (
          <PaginationNumber
            key={`${page}-${index}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages }
      />
    </nav>
  );
}

// REFS Pagination examples
// - https://ui.shadcn.com/docs/components/pagination
// - https://github.com/vercel/next-learn/tree/main/dashboard/final-example/
//   ├─ app/ui/invoices/pagination.tsx#L9
//   ├─ app/lib/utils.ts#L38
//   └─ app/lib/data.ts#L86
// - https://github.com/vercel/examples/tree/main/solutions/pagination-with-ssg/
//   ├─ components/Pagination.tsx
//   └─ hooks/usePagination.ts
// - https://github.com/nuotsu/sanitypress/tree/main/src
//   └─ lib/usePagination.tsx#L28
// - https://www.sanity.io/docs/paginating-with-groq

export function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  let cls = '';

  // TODO Use the data attribute to pass this value
  if (position === 'first' || position === 'single') cls += ' rounded-l-md';
  if (position === 'last' || position === 'single') cls += ' rounded-r-md';
  if (isActive) cls += ' z-10 bg-(--surface-4)';
  if (!isActive && position !== 'middle') cls += ' hover:bg-(--surface-3)';
  if (position === 'middle') cls += ' text-(--surface-3)';

  const className = `flex-centered border-(--border)${ cls } h-10 w-10 border`;

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

export function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  // const className = `flex-centered h-10 w-10 rounded-md border border-(--border)`
  const className = `flex-centered h-10 w-10 rounded-full${
    isDisabled // 'disabled:opacity-50'
      ? ' pointer-events-none text-(--surface-3)'
      : ' hover:bg-(--surface-3)'
    }
  `;

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
