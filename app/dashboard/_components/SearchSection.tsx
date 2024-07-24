import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 flex-col bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex justify-center items-center text-white'>
        <h2 className='text-3xl font-bold'>Browse templates</h2>
        <p>What would you like to create today</p>

        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 rounded-md border bg-white my-5 w-[50%]'>
                <Search className='text-primary'/>
                <input type="text" 
                onChange={(event)=>onSearchInput(event.target.value)}
                placeholder='Search ...' 
                className='bg-transparent w-full outline-none text-primary'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection