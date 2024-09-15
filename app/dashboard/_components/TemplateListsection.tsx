import AllTemplates from '@/app/(data)/AllTemplates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplateListSection({ userSearchInput }: any) {

  const [templateList, setTemplateList] = useState(AllTemplates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = AllTemplates.filter(item =>
        item?.name?.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredData);
    } else {
      setTemplateList(AllTemplates);
    }
  }, [userSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-4'>
      {templateList.map((item: TEMPLATE) => (
        <TemplateCard key={item.slug} {...item} />
      ))}
    </div>
  )
}

export default TemplateListSection
