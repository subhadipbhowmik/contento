"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import MenuList from '../(data)/MenuList'
import { usePathname } from 'next/navigation'

function SideNav() {

  const path = usePathname();

  useEffect(()=>{
    console.log(path)
  }, []);


  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image width={120} height={40} alt='logo' src={'/logo.svg'}/>
        </div>

        <hr className='my-5 border'/>

        {/* all menu list  */}
        <div className='mt-3'>
            {MenuList.map((menu, idx)=>(
                <div key={idx} className={`flex items-center rounded-lg gap-2 mb-2 p-3 cursor-pointer hover:bg-primary hover:text-white
                ${path==menu.path && 'bg-primary text-white'}
                `}>
                    <menu.icon className='h-6 w-6'/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default SideNav