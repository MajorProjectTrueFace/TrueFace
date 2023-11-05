import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <div className='mb-5 nav'>
      <a href="/" className='listItem name'><h5>TrueFace</h5></a>
      <a href='/about' className='listItem abt'><h5>About</h5></a>
    </div>
  )
}

export default Navbar