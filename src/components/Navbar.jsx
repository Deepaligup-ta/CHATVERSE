import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h3 className='logo'> logo</h3>

      <ul className='nav-links'>
        <link to='/'><li>option1</li></link>
        <link to='/'><li>option2</li></link>
        <link to='/'><li>option3</li></link>
        <link to='/'><li>option4</li></link>
        <link to='/'><li>option5</li></link>
      </ul>
    </nav>
  )
}


