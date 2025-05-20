import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className='justify-around flex items-center mt-20'> 
        <div className='flex'>
          <Image
          src="/profile.png"
          width={50}
          height={50}
           className="rounded-full"
          alt="Picture of the author"
        />
        <h1 className='flex items-center ml-4'>Dron Kashyap </h1>
        </div>
        <div className='flex space-x-5 '>
        <Link href="/projects" className='hover:underline'>Projects </Link>
        <Link href="/workex" className='hover:underline'>Work Experience</Link> 
        <Link href="/about" className='hover:underline'>About</Link>
        </div>
      </div>
        <div className="pt-20 mx-72 ">
    <h1 className="font-bold text-3xl max-w-2xl leading-snug">
      Hi, I'm Dron — a Full Stack Developer focused on building seamless and impactful digital experiences
    </h1>
    <h2 className="mt-4 text-gray-500 max-w-3xl  text-lg leading-relaxed">
      I enjoy turning ideas into fully functional products, with attention to detail, performance, and user experience. From concept to launch, I take pride in delivering work that not only works well but feels great to use.
    </h2>
    <button className='bg-black rounded-lg text-white font-semibold px-4 py-2 mt-4'> Connect </button>
  </div>

    </div>
  )
}

export default Header
