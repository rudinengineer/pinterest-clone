"use client"
import { app_name } from '@/constants/config'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const items = [
    {
      name:"Home",
      url: "/"
    }, 
    {
      name: "Explore",
      url: "/explore"
    }, 
    {
      name: "Create",
      url: "/post"
    }
  ]

export default function NavbarLeft({}: Props) {
  const [dropdownShow, setDropdownShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener('click', function(e: any) {
      const card = document.querySelector('.navbar-dropdown-page-card')
      if ( !card?.contains(e.target) ) {
        setDropdownShow(false)
      }
    })
  }, [])

  return (
    <div className="navbar-dropdown-page-card flex items-center">
        <div className='px-2'>
            <Image src={'/icons/pinterest.svg'} alt={app_name} width={100} height={100} className='w-9 h-9' />
        </div>
        <ul className="w-full hidden md:flex gap-6 justify-center items-center">
            {
              items.map((value, index) => (
                  <li key={index} className={`${index === 0 && 'bg-dark text-light rounded-full px-4 py-3'} text-base font-semibold`}><Link href={value.url}>{ value.name }</Link></li>
              ))
            }
        </ul>
        <div className='w-full md:hidden sticky'>
          <div className="w-full flex justify-center items-center">
            <button className={`${dropdownShow ? 'bg-dark text-light' : 'hover:bg-secondary'} flex gap-2 items-center p-3 rounded-full`} onClick={() => {setDropdownShow(state => !state)}}>
              <h1 className='text-base font-semibold'>{ items[0].name }</h1>
              <ChevronDownIcon className='w-5 h-5' />
            </button>
          </div>
          {
            dropdownShow && (
              <ul className='w-full absolute bg-light rounded-xl p-3 z-[48]'>
                {
                  items.map((value, index) => (
                    <li key={index} className={`${index === 0 && 'bg-secondary'} mt-1 w-full flex gap-2 justify-between items-center p-2 rounded-md text-base transition ease-in-out hover:bg-secondary`}>
                      <h1>{ value.name }</h1>
                      {
                        index === 0 && (
                          <CheckIcon className='w-5 h-5' />
                        )
                      }
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
    </div>
  )
}