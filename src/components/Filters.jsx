import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { setFilters, filters } = useFilters()

  const handleCategoryChange = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }))
  }

  const handleMinPriceChange = (e) => {
    setFilters((prevState) => ({ ...prevState, minPrice: e.target.value }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='2000'
          onChange={handleMinPriceChange}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='smartphones'>Smart phones</option>
          <option value='home-decoration'>Home-decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skin care</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
