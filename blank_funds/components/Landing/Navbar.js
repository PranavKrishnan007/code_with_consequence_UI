import React from 'react';
import {BsFillGridFill} from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

  return (
    <div className='flex py-10'>
        <div className='flex-none'>
            <BsFillGridFill size={22}/>
        </div>
        <div className='grow flex flex-row justify-center space-x-20 font-medium'>
            <div className='border-b-2 border-transparent hover:border-primary cursor-pointer px-3'>Home</div>
            <div className='border-b-2 border-transparent hover:border-primary cursor-pointer px-3' onClick={()=>router.push("/listings")}>Organisations</div>
            <div className='border-b-2 border-transparent hover:border-primary cursor-pointer px-3'>Stories</div>
            <div className='border-b-2 border-transparent hover:border-primary cursor-pointer px-3'>About</div>
            <div className='border-b-2 border-transparent hover:border-primary cursor-pointer px-3'>Profile</div>
        </div>
    </div>
  )
}
