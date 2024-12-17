'use client';

import { useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo } from "react";

interface Props {
  data?: {
    id: number;
    title: string;
    slug: string;
    items: {
      title: string;
      slug: { current: string; }
    }[];
  }[];
  // checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PickList(props: Props) {
  const { data, onChange } = props

  const searchParams = useSearchParams()!

  const selectedParams = useMemo<URLSearchParams>(() => {
    // Get the initial selected options from the URL's searchParams
    const params = new URLSearchParams(searchParams);

    // Preselect the first value of each option if its not
    // included in the current searchParams
    // data?.forEach(field => {
    //   if (!searchParams.has(field.slug)) {
    //     params.set(field.slug, field.items[0].slug.current);
    //   }
    // });

    return params;
  }, [searchParams, data])

  return (
    <>
      {data?.map((field, i: number) => {
        return (
          <fieldset className="taglist collapsible" key={i}>
            <legend>
              <input
                type="checkbox"
                id={`open-${i+1}`}
                className="sr-only"
                defaultChecked={false}
              />
              <label htmlFor={`open-${i+1}`} className="has-focus-indicator">
                {field.title}<span></span>
              </label>
            </legend>

            <div className="wrapper">
              {data[i].items.map((item, i: number) => {
                // boolean indicator of the element(s) active state
                const isActive = selectedParams.get(field.slug)?.includes(item.slug.current);

                return (
                  <div key={i} className="tag-toggle"
                    aria-selected={isActive ? true : false}
                  >
                    <input
                      // type="radio"
                      type="checkbox" // multi-select is preferred
                      name={`${field.slug}`}
                      value={`${item.slug.current}`}
                      id={`taglist-checkbox-${item.slug.current}`}
                      className="sr-only"
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor={`taglist-checkbox-${item.slug.current}`}>
                      {item.title}
                    </label>
                  </div>
                )}
              )}
            </div>
          </fieldset>
        )
      })}
    </>
  );
}
