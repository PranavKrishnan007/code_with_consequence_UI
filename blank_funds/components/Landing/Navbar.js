import React from 'react';
import {BsFillGridFill} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className='flex py-10'>
        <div className='flex-none'>
            <BsFillGridFill size={22}/>
        </div>
        <div className='grow flex flex-row justify-center space-x-20'>
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
