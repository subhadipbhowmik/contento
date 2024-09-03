'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import AllTemplates from '@/app/(data)/AllTemplates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

interface PROPS{
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props:PROPS) {

  // get template details 
  const selectedTemplate:TEMPLATE | undefined = AllTemplates?.find((item)=>item.slug==props.params['template-slug'])

  // loading while generating
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('')
  const {user} = useUser()

  // generate ai content
  const generateAIContent = async (formData:any)=>{
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAiPrompt = JSON.stringify(formData) + ", " +  selectedPrompt;

    const result = await chatSession.sendMessage(finalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text())
    await saveInDB(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false)
  }

  // save data in database
  const saveInDB = async(formdata:any, slug:any, aiResp:string)=>{
    const result = await db.insert(AIOutput).values({
      formdata: formdata,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    })
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
                  loading={loading}
      />
      {/* Editor section  or output section */}
      <div className='col-span-2'>
      <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
    </div>
  )
}

export default CreateNewContent