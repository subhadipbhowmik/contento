import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const MenuList =[
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        }
    ]


  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image alt='logo' src={'/logo.svg'} width={120} height={100}/>
        </div>

        {/* menu list  */}
        <div>
            {MenuList.map((menu, index)=>(
                <div className='flex gap-2 mb-2 p-3'>
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav