import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getTotal, removeFromCart } from './redux/reducer'
//import { bookData } from './bookData'

const App = () => {
  const [bookData, setBookData] = useState([])
  const { cart, totalPrice } = useSelector(state => state.bookCart);
  const [selectedType, setSelectedType] = useState('')
  const dispatch = useDispatch()
  // Fetch data from API
  const fetchApiBook = async() => {
    const res = await axios.get('https://retoolapi.dev/WDlW2j/data');
    setBookData(res.data);
  }

  useEffect(() => {
    fetchApiBook()
    dispatch(getTotal())
  }, [cart])

  return (
    <div className='container mt-5'>
      <div>
        <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          <option value="selectType">Select a type</option>
          {
            bookData.map((value) => (
              <option>{value.Genre}</option>
            ))
          }
        </select>
      </div>
      <div>
        <table className='table mt-4 mb-6'>
          <tr>
            <th>ISBN</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
          {
            (bookData.filter(value => value.Genre === selectedType)).map(value => (
              <tr>
                <td>{value.ISBN}</td>
                <td>{value.Title}</td>
                <td>{value.Author}</td>
                <td>{value.Prix}</td>
                <td><button className='btn btn-success' onClick={() => dispatch(addToCart(value))}>Add</button></td>
              </tr>
            ))
          }
        </table>
      </div>
      <div>
        <h3>Cart</h3>
          {
            cart?.length === 0 ? (
              <p>Your Cart is empty !</p>
            ) : (
              <ul>
                {
                  cart?.map(value => (
                      <li className='mb-1'>{value.Title} - <span>{value.Prix}</span> -   <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(value.ISBN))}>
                        Delete
                        </button></li>
                  ))
                }
              </ul>
            )
          }
      </div>
      <div className='mt-5'>
        <h3>Total: {totalPrice} DH</h3>
      </div>
    </div>
  )
}

export default App