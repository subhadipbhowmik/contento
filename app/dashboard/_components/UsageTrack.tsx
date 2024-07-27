"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect } from 'react'
import { HISTORY } from '../history/page'

function UsageTrack () {
    const {user} = useUser()

   const GetData = async()=>{
    {/* @ts-ignore*/}
    const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result)
   }

    useEffect(()=>{
       user&&GetData();
    }, [user])

    const GetTotalUsage = (result:HISTORY)=>{
        let total:number = 0;
        result.forEach(element => {
            total += Number(element.aiResponse?.length)
        });

        console.log(total);
    }


  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={
                    {width:'35%'}
                }>
                    
                </div>
            </div>
            <h2 className='text-sm my-2'>
                3600/1000 of Credits Use
            </h2>
        </div>

        <Button variant="secondary" className='w-full my-3 text-primary text-lg'>Button</Button>

    </div>
  )
}

export default UsageTrack