import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../features/CartSlice'
import { Link } from 'react-router-dom'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const calculateTotalCost = item => item.price * item.quantity

  const calculateTotalAmount = () =>
    items.reduce((sum, item) => sum + calculateTotalCost(item), 0)

  const totalPlants = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalPlants}</h2>
      <h2>Total Cost: ${calculateTotalAmount()}</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} width="120" />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Subtotal: ${calculateTotalCost(item)}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1
                })
              )
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  )
}

export default CartItem