import { Routes, Route, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="background-image landing">
            <h1>Welcome to Paradise Nursery</h1>
            <AboutUs />
            <Link to="/plants">
              <button>Get Started</button>
            </Link>
          </div>
        }
      />

      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App