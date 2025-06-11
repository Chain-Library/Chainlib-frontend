import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function DropItem({ heading, message, button }: { heading: string; message: string; button?: boolean }) {
    return (
        <div className="p-6">
            <div className={cn(button ? "justify-between" : "justify-start", "flex items-center text-label-large mb-4")}>
                <h3 className="font-bold text-neutral-900">
                    {heading}
                </h3>
                {button && <button type='button' className='font-light px-3 py-1.5 flex items-center rounded-small justify-center border-1 border-neutral-200 gap-x-1.5'> <Plus size={20} />Add</button>}
            </div>
            <div className="border-2 border-dashed border-primary-400 bg-primary-50 rounded-small p-8 text-center  flex flex-col items-center justify-center h-[150px]">
                <div className="rounded relative size-10 mb-4">
                    <Image fill src="/ebook2.svg" alt="Create E-Book" className="object-fill" />
                </div>
                <p className="text-sm text-neutral-600">
                    Drag and drop or Click to
                </p>
                <p className="text-sm text-neutral-600">choose file from device</p>
            </div>
            <p className="text-body-small text-[#888888] mt-2">
                {message}
            </p>
        </div>
    )
}
