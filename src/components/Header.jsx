import React from 'react'
import { SiBitcoin } from 'react-icons/si'

import { MdModeNight } from 'react-icons/md'
import { FaSearchDollar } from 'react-icons/fa'
function Header({handleTheme,setVsCurrency}) {
  return (
    <div className=' border-b-4 p-5 flex justify-between dark:text-white dark:border-white  '>
      <div className='flex justify-between lg:justify-around'>
        <h1 className='flex text-4xl font-bold  '><SiBitcoin className='mx-2 text-blue-700' />Coin Watch</h1>
      </div>

      
       
      

      
        <div className='flex mx-5 justify-between'>


          <button onClick={handleTheme} ><MdModeNight size={35} className='mx-8 mt-3' /></button>


          <select defaultValue={'USD'} onChange={(e)=>{setVsCurrency(e.target.value)}} className='mx-3 w-24 border-2 border-gray-500 dark:text-black rounded-lg'>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      




      <div className='flex mx-3 justify-between'>
        <button className='w-24 m-1 p-2 text-lg text-white font-bold bg-blue-700 rounded-lg'>
          Log In
        </button>
        <button className=' w-24 m-1 p-2 text-lg text-blue-700 font-bold border-2 rounded-lg'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header
