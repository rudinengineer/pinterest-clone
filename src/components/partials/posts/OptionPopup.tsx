"use client"
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import OptionPopupCard from './OptionPopupCard'
import OptionPopupShare from './OptionPopupShare'

type Props = {}

export default function OptionPopup({}: Props) {
  const [isShow, setShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    window.addEventListener('click', function(e: any) {
        const card = this.document.querySelector('.card')
        const button = this.document.querySelector('.button')
        if ( !card?.contains(e.target) && !button?.contains(e.target) ) {
            setShow(false)
        }
    })
  }, [])

  return (
    <div className="sm:hidden w-full flex justify-end">
        <button className='button'><EllipsisHorizontalIcon className='w-8 h-8' onClick={() => {setShow(state => !state)}} /></button>
        {
            isShow && (
                <div className="w-full h-full fixed top-0 left-0 flex items-end bg-dark bg-opacity-40 z-[51]">
                    <div className="card w-full bg-light rounded-tl-3xl rounded-tr-3xl px-4 py-6">
                        <div className="w-full flex justify-center items-center sticky">
                            <XMarkIcon className='w-6 h-6 absolute left-2' onClick={() => {setShow(state => !state)}} />
                            <h1 className='text-base text-center'>Share</h1>
                        </div>
                        <OptionPopupShare />
                        <OptionPopupCard />
                        <div className="mt-6">
                            <h1 className='text-xs'>This Pin was inspired by your recent activity</h1>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}