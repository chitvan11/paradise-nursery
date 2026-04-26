import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const count = useSelector(state =>
    state.cart.items.reduce((t, i) => t + i.qty, 0)
  )

  return (
    <nav className="header">
      <h2>🌿 Paradise Nursery</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 {count}</Link>
      </div>
    </nav>
  )
}