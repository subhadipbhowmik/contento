"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import MenuList from '../(data)/MenuList'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Satisfy } from "next/font/google";
import UsageTrack from './UsageTrack'

const satisfy = Satisfy({ weight: '400', subsets: ['latin'] });

function SideNav() {

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [path]); // Ensure the effect runs when `path` changes

  return (
    <div className='h-screen relative p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Link href={'/dashboard'}>
          {/* <Image width={120} height={40} alt='logo' src={'/logo.svg'}/> */}
          <h2 className={`text-4xl font-bold ${satisfy.className} bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
            Contento
          </h2>
        </Link>
      </div>

      <hr className='my-5 border' />

      {/* all menu list  */}
      <div className='mt-3'>
        {MenuList.map((menu, idx) => (
          <Link key={idx} href={menu.path}> {/* key is now on Link */}
            <div className={`flex items-center rounded-lg gap-2 mb-2 p-3 cursor-pointer hover:bg-primary hover:text-white
                ${path == menu.path && 'bg-primary text-white'}
                `}>
              <menu.icon className='h-6 w-6' />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full '>
        <UsageTrack />
      </div>
    </div>
  )
}

export default SideNav
