import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/CartSlice'

const plants = [
  {
    id:1,
    name:'Snake Plant',
    price:10,
    cat:'Air Purifying',
    img:'https://images.unsplash.com/photo-1593691509543-c55fb32c8b5d?w=400'
  },
  {
    id:2,
    name:'Peace Lily',
    price:12,
    cat:'Air Purifying',
    img:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id:3,
    name:'Lavender',
    price:15,
    cat:'Aromatic',
    img:'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400'
  },
  {
    id:4,
    name:'Jasmine',
    price:14,
    cat:'Aromatic',
    img:'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400'
  },
  {
    id:5,
    name:'Aloe Vera',
    price:11,
    cat:'Succulent',
    img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id:6,
    name:'Jade Plant',
    price:13,
    cat:'Succulent',
    img:'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  }
]

export default function ProductList() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.items)

  const added = id => cart.some(i => i.id === id)

  return (
    <div>
      <Header />

      <h1 className="page-title">Our Plants</h1>

      <div className="grid">
        {plants.map(p => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.cat}</p>
            <p>${p.price}</p>

            <button
              disabled={added(p.id)}
              onClick={() => dispatch(addItem(p))}
            >
              {added(p.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}