import React from 'react'
import { TEMPLATE } from './TemplateListsection'
import Image from 'next/image'

function TemplateCard(item: TEMPLATE) {
  return (
    <div className='p-5 gap-3 hover:scale-105 transition-all cursor-pointer shadow-md rounded-md border bg-white flex flex-col'>
        <Image src={item.icon} alt={item.name} width={50} height={50}/>
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
  )
}

export default TemplateCard