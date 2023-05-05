import React from 'react'

export default function Navbar() {
  return (
    <div className='flex '>
        <div className='flex-none'>Menu</div>
        <div className='grow flex flex-row'>
            <div>Home</div>
            <div>About</div>
            <div>Products</div>
            <div>Home</div>
            <div>About</div>
            <div>Products</div>
        </div>
    </div>
  )
}
