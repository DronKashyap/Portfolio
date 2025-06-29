import React from 'react'

function Header() {
  return (
    <div>
        <div className="px-4 sm:px-8 pt-16 sm:pt-20 max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl sm:text-3xl leading-snug text-center sm:text-left">
        Exploring Tech, Taming Chaos, Building Cool Stuff 🏝️
      </h1>
      <h2 className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed text-center sm:text-left">
        Full Stack Dev, Problem Solver & Founder of Penguin Labs — building apps, chasing bugs, and sometimes footballs with Brownie FC ⚽️
      </h2>
      <button className="bg-black rounded-lg text-white font-semibold px-4 py-2 flex items-center mt-6 hover:scale-105 transition-transform mx-auto sm:mx-0">
        <div className="pr-2">Connect</div> <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
    <path fill="#FFFFFF" d="M 19 3 C 17.346 3 16 4.346 16 6 C 16 6.4617584 16.113553 6.8939944 16.300781 7.2851562 L 12.585938 11 L 7.8164062 11 C 7.4021391 9.8387486 6.3016094 9 5 9 C 3.346 9 2 10.346 2 12 C 2 13.654 3.346 15 5 15 C 6.3016094 15 7.4021391 14.161251 7.8164062 13 L 12.585938 13 L 16.300781 16.714844 C 16.113553 17.106006 16 17.538242 16 18 C 16 19.654 17.346 21 19 21 C 20.654 21 22 19.654 22 18 C 22 16.346 20.654 15 19 15 C 18.538242 15 18.106006 15.113553 17.714844 15.300781 L 14.414062 12 L 17.714844 8.6992188 C 18.106006 8.8864466 18.538242 9 19 9 C 20.654 9 22 7.654 22 6 C 22 4.346 20.654 3 19 3 z"></path>
</svg></button>
  </div>

    </div>
  )
}

export default Header
