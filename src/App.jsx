import { products as initialProducts } from './Mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/products'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
    </>
  )
}

export default App
