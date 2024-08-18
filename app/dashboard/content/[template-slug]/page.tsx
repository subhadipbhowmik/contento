'use client'
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import AllTemplates from '@/app/(data)/AllTemplates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS{
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props:PROPS) {

  // get template details 
  const selectedTemplate:TEMPLATE | undefined = AllTemplates?.find((item)=>item.slug==props.params['template-slug'])

  // generate ai content
  const generateAIContent = (formData:any)=>{

  }

  return (
    <div className='p-5'>
      <Link href={'/dashboard'}>
         <Button className='mb-5'><ArrowLeft/>Back</Button>
         </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      {/* Form Section  */}
      <FormSection 
                  selectedTemplate={selectedTemplate}
                  userFormInput={(v:any)=>generateAIContent(v)}
      />
      {/* Editor section  or output section */}
      <div className='col-span-2'>
      <OutputSection/>
      </div>
    </div>
    </div>
  )
}

export default CreateNewContent