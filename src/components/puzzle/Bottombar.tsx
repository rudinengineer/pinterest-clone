import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, ChatBubbleOvalLeftEllipsisIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {}

const items = [
    {
        name: "Home",
        url: "/",
        icon: <HomeIcon />
    },
    {
        name: "Search",
        url: "/search",
        icon: <MagnifyingGlassIcon />
    },
    {
        name: "Notifications",
        url: "/notifications",
        icon: <ChatBubbleOvalLeftEllipsisIcon />
    },
    {
        name: "Account",
        url: "/profile",
        icon: <UserCircleIcon />
    }
]

export default function Bottombar({}: Props) {
  return (
    <ul className="w-full flex ss:hidden fixed bottom-0 left-0 bg-light justify-around items-center px-4 py-2 z-[50]">
        {
            items.map((value, index) => (
                <li key={index}>
                    <div className='text-dark flex justify-center'>
                        <div className="w-8 h-8">{value.icon}</div>
                    </div>
                    <Link href={value.url} className='text-center'>{ value.name }</Link>
                </li>
            ))
        }
    </ul>
  )
}