import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/CartSlice'
import { Link } from 'react-router-dom'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const products = {
    "Air Purifying": [
      { id: 1, name: "Snake Plant", price: 10, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 12, image: "https://via.placeholder.com/150" }
    ],
    "Aromatic": [
      { id: 3, name: "Lavender", price: 15, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Mint", price: 8, image: "https://via.placeholder.com/150" }
    ],
    "Succulents": [
      { id: 5, name: "Aloe Vera", price: 9, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Jade Plant", price: 11, image: "https://via.placeholder.com/150" }
    ]
  }

  const isAdded = id => cartItems.some(item => item.id === id)

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>

      <h1>Paradise Nursery</h1>

      {Object.keys(products).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {products[category].map(product => (
            <div key={product.id}>
              <img src={product.image} width="120" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              <button
                onClick={() => dispatch(addItem(product))}
                disabled={isAdded(product.id)}
              >
                {isAdded(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ProductList