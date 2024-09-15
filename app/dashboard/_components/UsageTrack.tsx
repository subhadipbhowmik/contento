"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React from 'react'

async function UsageTrack() {

    const {user} = useUser();
    const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    const getTotalUsage = ()=>{
      
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2 className='font-medium'>Credits </h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white w-[80%] rounded-full mt-3'>
                </div>
            </div>
            <h2 className='text-sm my-2'>3500/10,000 Used</h2>
        </div>

        <Button className='w-full my-2'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack