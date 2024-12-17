'use client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, useContext, useCallback, useMemo, useEffect, useState,
  type FormEvent
} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// import { ControlsIcon } from '@sanity/icons'
import { CloseCircle } from '@/components/icons'
import PickList from '@/components/ui/picklist'
import Search from '@/components/ui/search-box'
import Slider from '@/components/ui/range-slider'
import TabSwitch from '@/components/ui/tab-switch'
import { SearchQueryResult } from '#/sanity.types'

// import { ControlsIcon } from '@sanity/icons'
import { ArrowCloseLeftIcon, ArrowOpenRightIcon } from '@/components/icons'

interface CatalogContextType {
  filteredItems: SearchQueryResult
  totalPages: number
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined)

export const useCatalogContext = () => {
  const context = useContext(CatalogContext)
  if (context === undefined) {
    throw new Error('useCatalogContext must be used within a CatalogProvider')
  }
  return context
}

export default function CatalogFilters(params: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any, items: any,
  children: React.ReactNode
}) {
  const { data, children, items } = params

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // States to keep track of selected filter options
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedMediums, setSelectedMediums] = useState<string[]>([])
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<number>(50)
  // const [currentPage, setCurrentPage] = useState(1)
  const [collapsedSidebar, setCollapsedSidebar] = useState(false)

  // Hook to handle multiple parameters from the URL
  //#region - Initial synchronization
  // FIXME Hydration error
  // useEffect(() => {
  //   const genreParam = searchParams.get('genre')
  //   if (genreParam) {
  //     setSelectedGenres(genreParam.split(','))
  //   } else {
  //     setSelectedGenres([])
  //   }
  // }, [searchParams])
  //#endregion

  // Memoized version of that component
  //#region - Contains filtering logic
  const filteredItems = useMemo(() => {
    return items.filter((item: SearchQueryResult[0]) => {
      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.includes(`${item.genre?.slug?.current}`)

      const matchesMedium =
        selectedMediums.length === 0 ||
        selectedMediums.includes(`${item.medium?.slug?.current}`)

      const matchesSurface =
        selectedSurfaces.length === 0 ||
        selectedSurfaces.includes(`${item.surface?.slug?.current}`)

      // Lot price starts at $50
      const matchesPriceRange =
        Number(item?.price) >= priceRange && // min
        Number(item?.price) <= 200000 // max

      return (
        matchesGenre &&
        matchesMedium &&
        matchesSurface &&
        matchesPriceRange
      )
    })
  }, [selectedGenres, selectedMediums, selectedSurfaces, priceRange, searchParams])
  //#endregion

  // Function to clear the URL parameters when resetting
  //#region - Contains reset logic
  const resetFilters = useCallback((e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    e.currentTarget.focus({ preventScroll: true })
    setSelectedGenres([])
    setSelectedMediums([])
    setSelectedSurfaces([])
    setPriceRange(50)
    router.push(pathname)
  }, [router, pathname])
  //#endregion

  // Function that updates both the state and the URL
  //#region - Contains update logic
  const updateFilters = useCallback((
    type: string, // 'genre' | 'medium' | 'surface'
    value: string,
    isChecked: boolean
  ) => {
    let updatedFilters: string[]
    let setFilter: React.Dispatch<React.SetStateAction<string[]>>

    //#region Filter type switcher
    // switch (type) {
    //   case 'genre':
    //     updatedFilters = isChecked
    //       ? [...selectedGenres, value]
    //       : selectedGenres.filter(g => g !== value)
    //     setFilter = setSelectedGenres
    //     break
    //   case 'medium':
    //     updatedFilters = isChecked
    //       ? [...selectedMediums, value]
    //       : selectedMediums.filter(m => m !== value)
    //     setFilter = setSelectedMediums
    //     break
    //   case 'surface':
    //     updatedFilters = isChecked
    //       ? [...selectedSurfaces, value]
    //       : selectedSurfaces.filter(s => s !== value)
    //     setFilter = setSelectedSurfaces
    //     break
    // }
    //#endregion
    if (type === 'genre') {
      updatedFilters = isChecked
        ? [...selectedGenres, value]
        : selectedGenres.filter(g => g !== value)
      setFilter = setSelectedGenres
    } else if (type === 'genre') {
      updatedFilters = isChecked
        ? [...selectedMediums, value]
        : selectedMediums.filter(m => m !== value)
      setFilter = setSelectedMediums
    } else { // (type === 'surface') {
      updatedFilters = isChecked
        ? [...selectedSurfaces, value]
        : selectedSurfaces.filter(s => s !== value)
      setFilter = setSelectedSurfaces
    }

    setFilter(updatedFilters)

    const params = new URLSearchParams(searchParams.toString())

    params.set('page', '1')

    if (updatedFilters.length > 0) {
      params.set(type, updatedFilters.join(','))
    } else {
      params.delete(type)
    }
    router.push(`${pathname}?${params.toString()}`)
  }, [selectedGenres, selectedMediums, selectedSurfaces, searchParams, router, pathname])

  const updatePriceRange = useCallback((newPriceRange: number) => {
    setPriceRange(newPriceRange)

    const params = new URLSearchParams(searchParams.toString())

    // params.set('page', '1')

    params.set('priceRange', `${newPriceRange}`)
    // params.set('priceRange', newPriceRange.join(','))
    router.push(`${pathname}?${params.toString()}`)
  }, [priceRange, searchParams, router, pathname])

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  //#endregion

  // const totalPages = Math.ceil(Number(filteredItems.length / 9))
  // const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE))

  // NOTE These parameters have already been passed through the GROQ query
  // const paginatedItems = filteredItems.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // )

  return (
    <CatalogContext.Provider value={{ filteredItems, totalPages: 2 }}>
      <aside className="md:sticky md:top-0 md:self-start">
        <div className="absolute top-0 right-0 z-40 translate-x-full">
          <input type="checkbox" id="aside-disclosure" className="sr-only"
            defaultChecked={false}
            onChange={(e) => e.target.checked
              ? setCollapsedSidebar(true)
              : setCollapsedSidebar(false)
            }
          />
          <label htmlFor="aside-disclosure" className="has-focus-indicator">
            {
              collapsedSidebar
                ? <ArrowOpenRightIcon width={20} height={20} />
                : <ArrowCloseLeftIcon width={20} height={20} />
            }
          </label>
        </div>

        <form
          id="filters"
          className="my-8 md:my-6"
          onReset={resetFilters}
        >
          {/* Switching between artists */}
          <TabSwitch
            data={data['artistsData']}
            total={data['artistsData'].length + 1}
            prefix="artist"
            onChange={(e) => {
              // <pathname>?artist=<slug>
              router.push(pathname + '?' + createQueryString(
                'artist',
                e.currentTarget.value
              ))
            }}
          />

          {/* Search Filter:
            Users can type in the search input to filter items by name.
            The filtering is case-insensitive and matches any part of the item name. */}
          <Search placeholder="Поиск по названию…" />

          <div>
            <div className="flex items-center justify-between gap-2 py-2">
              <h4>Фильтры</h4>
              <Reset />
            </div>

            {/* Category Filter:
              Users can select a category from the taglist
              to filter items by category. */}
            <PickList
              data={data['artworksData']}
              // onChange={(e) => {
              //   // <pathname>?genre=<slug>
              //   router.push(pathname + '?' + createQueryString(
              //     e.currentTarget.name,
              //     e.currentTarget.value
              //   ))
              // }}
              onChange={(e) => updateFilters(
                e.currentTarget.name,
                e.currentTarget.value,
                e.currentTarget.checked as boolean
              )}
            />

            {/* TODO Price Range Filter:
              Users can adjust the price range slider
              to filter items within a specific price range. */}
            <Slider
              priceRangeMin={priceRange}
              onPriceRangeChange={updatePriceRange}
              min={50}
              max={200000}
              step={1000}
            />
          </div>
        </form>
      </aside>

      {children}
    </CatalogContext.Provider>
  )
}

// Use native HTML form reset
export function Reset() {
  return (
    <div className="control inline-flex gap-2">
      <label htmlFor="reset" className="btn">
        {<CloseCircle />}
        Сброс
      </label>
      <input
        id="reset"
        type="reset"
        // accessKey="r"
        className="sr-only"
      />
    </div>
  )
}
