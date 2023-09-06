import {useContext} from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((p) => {
      return (
        (p.category == filters.category || filters.category == 'all') &&
        p.price >= filters.minPrice
      )
    })
  }

  return { filterProducts, setFilters, filters }
}