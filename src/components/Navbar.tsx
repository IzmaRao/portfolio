import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-div-one'>
          <h2>Izma</h2>
        </div>
        <ul className='nav-div-two'>
          <Link href="./"><li>Home</li></Link>
          <Link href="./about"><li>About</li></Link>
          <Link href="./projects"><li>Projects</li></Link>
          <Link href="./skills"><li>Skills</li></Link>
          <Link href="#footerr"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar