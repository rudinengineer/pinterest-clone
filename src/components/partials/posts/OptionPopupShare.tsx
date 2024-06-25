import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { OptionPopupShareItems } from '@/constants/posts/items'

type Props = {}

export default function OptionPopupShare({}: Props) {
  return (
    <div className="mt-4 hidden-scrollbar w-full flex gap-4 items-center overflow-x-auto">
        {
            OptionPopupShareItems.map((value, index) => (
                <Link href={value.url} className="flex-shrink-0" key={index}>
                    <div className="w-full flex justify-center rounded-full overflow-hidden">
                        {
                            value.type === "svg" ? (
                                <Image src={`/icons/${value.icon}`} alt={value.name} width={100} height={100} className='w-14 h-14' />
                            ) : (
                                <div className='w-12 h-12 bg-secondary p-2'>{value.icon}</div>
                            )
                        }
                    </div>
                    <h1 className='text-center'>{ value.name }</h1>
                </Link>
            ))
        }
    </div>
  )
}