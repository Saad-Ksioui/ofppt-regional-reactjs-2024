import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice(
  {
    name: 'bookCart',
    initialState: {
      cart: [],
      totalPrice: 0
    },
    reducers: {
      addToCart(state, action){
        const bookExist = state.cart.findIndex(item => item.ISBN === action.payload.ISBN)
        if(bookExist >= 0){
          alert('Book is already exists')
          return
        }else {
          const addBook = [...state.cart, action.payload]
          return { ...state, cart : addBook}
        }
      },
      removeFromCart(state, action){
        const deleteBook = state.cart.filter(book => book.ISBN !== action.payload)
        return { ...state, cart : deleteBook}
      },
      getTotal(state, action){
        const totalPrice = state.cart.reduce((cartTotal, cartItem) => {
          const bookPrice = parseInt(cartItem.Prix);
          cartTotal += bookPrice;
          return cartTotal;
        }, 0);

        state.totalPrice = totalPrice;
      }
    }
  }
)

export const {addToCart, removeFromCart, getTotal} = bookSlice.actions
export const bookReducer = bookSlice.reducer