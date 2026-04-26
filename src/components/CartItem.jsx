import Header from './Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../features/CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const total = items.reduce((t, i) => t + i.price * i.qty, 0)
  const count = items.reduce((t, i) => t + i.qty, 0)

  return (
    <div>
      <Header />
      <h2>Total Plants: {count}</h2>
      <h2>Total Cost: ${total}</h2>

      {items.map(i => (
        <div className="card" key={i.id}>
          <h3>{i.name}</h3>
          <p>Price: ${i.price}</p>
          <p>Subtotal: ${i.price * i.qty}</p>

          <button onClick={() => dispatch(increaseQuantity(i.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(i.id))}>-</button>
          <button onClick={() => dispatch(removeItem(i.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon')}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  )
}