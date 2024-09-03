import { Search } from 'lucide-react'
import React from 'react'


function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 m-6 rounded-md flex flex-col justify-center text-white items-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600'>
        <h2 className='text-3xl font-bold'>Browse All templates</h2>
        <p className=''>What would you like to </p>

        <div className='w-full flex justify-center items-center'>
            <div className='flex gap-2 w-[50%] items-center p-2 border rounded-md bg-white my-5'>
                <Search className='text-primary'/>
                <input type="text" 
                placeholder='Search..' 
                onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent outline-none text-primary w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection