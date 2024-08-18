'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListsection from './_components/TemplateListsection'

function Dashboard() {
    const [userSearchInput, setUserSearchInput ] = useState<string>()
  return (
    <div>
      {/* Search section  */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      {/* TemplateList Section  */}
      <TemplateListsection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard