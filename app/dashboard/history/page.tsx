// app/dashboard/history/page.tsx
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../_components/TemplateListSection';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function fetchHistory() {
  const user = await currentUser();
  if (!user) return [];
  const historyList: HISTORY[] = await db.select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));
  return historyList;
}

const HistoryPage = async () => {
  const history = await fetchHistory();

  const getTemplateName = (slug: string) => {
    const template = Templates.find((item: TEMPLATE) => item.slug === slug);
    return template ? template.name : 'Unknown Template';
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <p className="mb-6">All of Your History</p>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">TEMPLATE</th>
            <th className="px-4 py-2 border">AI RESP</th>
            <th className="px-4 py-2 border">DATE</th>
            <th className="px-4 py-2 border">WORDS</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id} className="text-center">
              <td className="px-4 py-2 border">{getTemplateName(entry.templateSlug)}</td>
              <td className="px-4 py-2 border">{truncateText(entry.aiResponse, 25)}</td>
              <td className="px-4 py-2 border">{entry.createdAt}</td>
              <td className="px-4 py-2 border">{entry.aiResponse.split(' ').length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
