import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { bookData } from './bookData';

const DetailAtelier = () => {
  const [bookData, setBookData] = useState([])
  const fetchApiBook = async() => {
    const res = await axios.get('https://retoolapi.dev/WDlW2j/data');
    setBookData(res.data);
  }
  useEffect(() => {
    fetchApiBook()
  }, [])
  return (
    <div className="container mt-4">
      <table className='table mt-4 mb-6'>
        <tr>
          <th>ISBN</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
        {
          bookData?.map(value => (
            <tr>
              <td>{value.ISBN}</td>
              <td>{value.Title}</td>
              <td>{value.Author}</td>
              <td>{value.Prix}</td>
              <td>{value.Genre}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default DetailAtelier