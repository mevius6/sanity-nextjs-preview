import { Slug } from '#/sanity.types';
import { ChangeEvent, Fragment } from 'react';
// import GridViewSwitch from '@/components/ui/grid-view-switch'

export default function TabSwitch(params: {
  data: {
    name: string;
    slug: Slug;
  }[];
  prefix: string;
  total?: number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { data, prefix, total = 2, onChange } = params;

  const tabs = [ // prepare data
    {
      // add an “All” option that shows items from all categories
      label: 'Все',
      value: 'all'
    },
      // reformatting objects in an array using map()
      // to make them easier to use as component attributes
      // and reduce noise
      ...new Set(data.map(({name, slug}) => ({
        label: name,
        value: slug?.current
      })
    ))
  ]

  return (
    <div className="controls relative" data-total={total}>
      {/* <GridViewSwitch /> */}

      <div className="tabs">
        {tabs?.map((
          tab: TabProps,
          index: number
        ) => (
          <Fragment key={index}>
            <label key={index} htmlFor={`${prefix}-${tab.value}`}>
              {tab.label.split(' ')[0]}
            </label>
            <input className="sr-only"
              type="radio"
              name="artist"
              value={tab.value}
              id={`${prefix}-${tab.value}`}
              onChange={(ev) => onChange(ev)}
            />
          </Fragment>
        ))}

        <div className="tabs__indicator" aria-hidden="true">
          <div className="tabs__track">
            {tabs?.map((
              tab: TabProps,
              index: number
            ) => (
              <label key={index} htmlFor={`${prefix}-${tab.value}`}>
                {tab.label.split(' ')[0]}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type TabProps = {
  label: string;
  value?: string;
}
