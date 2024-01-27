// import {SearchIcon} from '@heroicons/react'



const Header = () => {
  return (
    <div className='grid grid-cols-12 justify-around bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-100% mb-4 h-20 text-center content-center rounded-md'>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer "> 
        Casper
      </div>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer"> 
        Home
      </div>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer"> 
        Features
      </div>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer"> 
        Mega Menu
      </div>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer"> 
        Tipography
      </div>
      <div className="text-white mb-2 col-span-1 hover:text-gray-300 cursor-pointer"> 
        Shortcodes
      </div>
      <div className="col-end-12 col-span-1 flex gap-4 hover:cursor-pointer hover:opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      </div>


    </div>
  )
}

export default Header




