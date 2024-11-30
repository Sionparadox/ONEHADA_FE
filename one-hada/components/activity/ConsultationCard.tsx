'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const DevideChar = '\n';

type ConsultationCardProps = {
  title: string;
  date: string;
  content: string;
};
export default function ConsultationCard({
  title,
  date,
  content,
}: ConsultationCardProps) {
  const [isDetail, setIsDetail] = useState(false);
  const oneLineContent = content.split(DevideChar);
  const toggle = () => {
    setIsDetail((pre) => !pre);
  };
  return (
    <>
      <div className='w-full h-20 flex justify-between border-b p-2 px-5 bg-white'>
        <div className='ml-2 flex flex-col gap-1 justify-center'>
          <div className='text-[#839AA8] text-xs'>{date}</div>
          <div
            className={cn(
              'font-medium',
              isDetail ? 'text-[#479E86]' : 'text-[#635666]'
            )}
          >
            {title}
          </div>
        </div>
        <div className='items-center flex justify-center'>
          <Button variant='ghost' className='[&_svg]:size-6' onClick={toggle}>
            {isDetail ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
      {isDetail ? (
        <div className='p-3 bg-[#fafcfb] border-l-4 border-l-main-green border-b text-sm'>
          <ul>
            {oneLineContent.map((line, idx) => (
              <li key={idx} className='flex gap-2'>
                <div className='text-[8px] font-extrabold text-main-green'>
                  O
                </div>
                {line}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
