import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import OptionHoverOption from './OptionHoverOption'

type Props = {}

export default function OptionHover({}: Props) {
  return (
    <div className="w-full h-full absolute top-0 left-0 hidden sm:flex">
        <div className="w-full h-full hidden group-hover:flex bg-dark rounded-2xl bg-opacity-50 flex-col justify-between items-end p-4">
            <button className='btn-primary px-4 py-3 rounded-full'>Save</button>
            <div className="flex gap-2 items-center sticky">
                <button className='bg-light text-dark p-2 rounded-full bg-opacity-80 transition ease-in-out hover:bg-opacity-100'><ArrowUpTrayIcon className='w-5 h-5' /></button>
                <OptionHoverOption />
            </div>
        </div>
    </div>
  )
}