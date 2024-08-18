'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput:any
}

function FormSection({selectedTemplate, userFormInput}:PROPS) {

    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event:any)=>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value})
    }

    // form submit dunction
    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        userFormInput(formData)
    }

  return (
    <div className='p-5 shadow-md border rounded-lg'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={60} height={60}/>
        <h2 className='font-bold text-2xl mb-2'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, idx)=>(
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-bold'>{item.label}</label>
                    {
                        item.field=='input'?
                        <Input 
                              name={item.name} 
                              required={item?.required}
                              onChange={handleInputChange}
                        /> :
                        item.field=='textarea'?
                        <Textarea
                                 name={item.name} 
                                 required={item?.required}
                                 onChange={handleInputChange}
                        /> : null
                    }
                </div>
            ))}

            {/* generate button  */}
            <Button type='submit' className='w-full py-6'>Generate</Button>
        </form>
    </div>
  )
}

export default FormSection