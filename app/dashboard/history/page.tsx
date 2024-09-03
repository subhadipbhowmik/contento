'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { Loader2Icon } from 'lucide-react';

interface AIOutputRecord {
  id: number;
  formdata: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

const History: React.FC = () => {
  const [historyData, setHistoryData] = useState<AIOutputRecord[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the aiOutput table
        const data = await db.select().from(AIOutput);
        setHistoryData(data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to truncate the AI Response
  const truncateText = (text: string | null, wordLimit: number) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  return (
    <div className='p-6'>
      <h2 className='text-xl font-bold mb-4'>History</h2>
      {historyData.length > 0 ? (
        <table className='min-w-full bg-white'>
        
            <tr>
              <th className='px-4 py-2'>Form Data</th>
              <th className='px-4 py-2'>AI Response</th>
              <th className='px-4 py-2'>Template Slug</th>
              <th className='px-4 py-2'>Created By</th>
              <th className='px-4 py-2'>Created At</th>
            </tr>
        
          <tbody>
            {historyData.map((item) => (
              <tr key={item.id}>
                <td className='border px-4 py-2'>{item.formdata}</td>
                <td className='border px-4 py-2'>
                  {truncateText(item.aiResponse, 10)}
                </td>
                <td className='border px-4 py-2'>{item.templateSlug}</td>
                <td className='border px-4 py-2'>{item.createdBy}</td>
                <td className='border px-4 py-2'>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='w-full h-screen flex justify-center'>
            <Loader2Icon className='animate-spin text-primary h-10 w-10'/>
        </div>
      )}
    </div>
  );
};

export default History;
