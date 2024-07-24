"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface PROPS{
    selectedTemplate?:TEMPLATE
}

function FormSection({selectedTemplate}:PROPS) {
    const [formData, setFormDat] = useState();

    const handleInputChange = (event:any)=>{
        const { name, value }
    }
    const onSubmit = (e:any) =>{
        e.preventDefault()
    }



  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
        <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500'>{selectedTemplate?.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index)=>(
                <div className='my-2 flex flex-col gap-2 mb-2'>
                    <label className='font-bold'>{item.label}</label>
                    {item.field=='input'?
                         <Input name={item.name} required={item?.required} onChange={handleInputChange}/>:
                         item.field=='textarea'?
                         <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>:
                         null
                    }
                </div>
            ))}

            <Button type='submit' className='w-full py-6'>Generate</Button>
        </form>
    </div>
  )
}

export default FormSection