import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between p-4 items-center'>
                <h2 className='font-bold'>Your Result</h2>
                <Button><Copy/>Copy</Button>
            </div>
            <Editor
                initialValue="Welcome to Contento"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
        </div>
    )
}

export default OutputSection