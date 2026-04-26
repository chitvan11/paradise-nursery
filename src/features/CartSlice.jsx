import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty += 1
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        item.qty -= 1
        if (item.qty <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload)
        }
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    }
  }
})

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = cartSlice.actions

export default cartSlice.reducer