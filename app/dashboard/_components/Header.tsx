import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex items-center justify-between'>
      <div className='flex items-center p-2 gap-2 border rounded-md max-w-lg'>
           <Search/>
           <input type="text" 
           placeholder='Search anything'
           className='outline-none'
           />
      </div>
      {/* message  */}
      <div className='flex gap-4'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>Join Membership just for 29/Month</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header