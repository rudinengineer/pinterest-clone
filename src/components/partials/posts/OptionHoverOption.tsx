"use client"
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const items = ["Hide Pin", "Download image", "Report Pin"]

export default function OptionHoverOption({}: Props) {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  return (
    <div className='sticky'>
        <button className='bg-light text-dark p-2 rounded-full bg-opacity-80 transition ease-in-out hover:bg-opacity-100'><EllipsisHorizontalIcon className='w-5 h-5' /></button>
        {
            isOpen && (
                <div className="absolute bg-light p-4 z-10">
                    <h1>This Pin was inspired by your recent activity</h1>
                    <ul className="mt-2">
                        {
                            items.map((value, index) => (
                                <li key={index} className='text-base font-semibold'>{ value }</li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    </div>
  )
}