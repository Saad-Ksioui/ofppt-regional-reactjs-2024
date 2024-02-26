import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-primary d-flex justify-content-center align-items-center flex-column'>
      <h1 className='mt-3 text-white'>Bibliothèque</h1>
      <div className='links mb-3'>
        <Link to={'/'}>Acceuil</Link>
        <Link to={'/details-livre'}>Detail</Link>
      </div>
    </nav>
  )
}

export default Header