import { createContext, useState } from 'react'

//1 - se crea el contexto, es el que se consume con useContext
export const FiltersContext = createContext()

//2 - se crea el proveedor del contexto, que permite acceso a el mismo
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 20 })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
