import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

export default function NavbarRight({}: Props) {
  return (
    <div className="flex gap-1 justify-end items-center">
        <div className='sticky group'>
          <BellIcon className='w-12 h-1w-12 text-iconColor p-2 rounded-full transition ease-in-out hover:bg-secondary' />
          <h1 className="mt-1.5 p-2 bg-dark text-light absolute -left-1/2 text-xs rounded-lg transition ease-in-out hidden group-hover:flex">Notifications</h1>
        </div>
        <div className='sticky group'>
          <ChatBubbleOvalLeftEllipsisIcon className='w-12 h-1w-12 text-iconColor p-2 rounded-full transition ease-in-out hover:bg-secondary' />
          <h1 className="mt-1.5 p-2 bg-dark text-light absolute -left-1/2 text-xs rounded-lg transition ease-in-out hidden group-hover:flex">Messages</h1>
        </div>
        <div className='sticky group'>
          <UserCircleIcon className='w-12 h-1w-12 text-iconColor p-2 rounded-full transition ease-in-out hover:bg-secondary' />
          <h1 className="mt-1.5 p-2 bg-dark text-light absolute -left-1/2 text-xs rounded-lg transition ease-in-out hidden group-hover:flex">Your profile</h1>
        </div>
        <div className='sticky group'>
          <ChevronDownIcon className='w-9 h-9 text-iconColor p-2 rounded-full transition ease-in-out hover:bg-secondary' />
          <h1 className="mt-1.5 p-2 bg-dark text-light absolute -left-1/2 text-xs rounded-lg transition ease-in-out hidden group-hover:flex">Accounts and more options</h1>
        </div>
    </div>
  )
}