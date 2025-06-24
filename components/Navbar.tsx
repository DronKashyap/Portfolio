import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='justify-around flex items-center mt-20'>  
          <Link href= "/" className='flex'>
          <Image
          src="/profile.png"
          width={50}
          height={50}
           className="rounded-full hover:scale-110"
          alt="Picture of the author"
        />
        <h1 className='flex items-center ml-4'>Dron Kashyap </h1>
        </Link>
        <div className='flex space-x-5 '>
        <Link href="/projects" className='hover:underline'>Projects </Link>
        <Link href="/workex" className='hover:underline'>Work Experience</Link> 
        <Link href="/about" className='hover:underline'>About</Link>
        </div>
    </div>
  )
}

export default Navbar
