import React from 'react'
import Link from 'next/link'
import { OptionPopupCardItems } from '@/constants/posts/items'

type Props = {}

export default function OptionPopupCard({}: Props) {
  return (
    <div className="mt-4 border-t-[1px] border-slate-300">
        <div className="mt-4">
            <h1 className='text-base text-center'>Options</h1>
            <ul className="mt-2">
                {
                    OptionPopupCardItems.map((value, index) => (
                        <li key={index} className='mt-2 flex gap-1.5'>
                            <div className='w-5 h-5 font-bold'>{value.icon}</div>
                            <div>
                                <Link href={value.url} className='font-medium text-base'>{ value.name }</Link>
                                <h1 className='text-xs'>{ value.caption }</h1>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}