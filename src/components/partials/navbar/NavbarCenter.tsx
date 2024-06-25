"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { categories } from '@/constants/navbar/center'

type Props = {
    isFocus: boolean,
    setFocus: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarCenter({isFocus, setFocus}: Props) {
  React.useEffect(() => {
    document.addEventListener('click', function(e: any) {
        const navbar = document.querySelector('.navbar-search-card')
        if ( !navbar?.contains(e.target) ) {
            setFocus(false)
        }
    })
  }, [])

  return (
    <div className='navbar-search-card group px-2 sticky'>
        <form method="post">
            <div className="sticky flex items-center">
                {
                    !isFocus && (
                        <label htmlFor="keyword" className="absolute left-4">
                            <MagnifyingGlassIcon className='w-5 h-5 text-iconColor' />
                        </label>
                    )
                }
                <input type="search" id='keyword' className={`${isFocus ? 'border-sky-400' : 'border-transparent pl-10'} border-2 w-full outline-none px-6 py-3 rounded-full text-base bg-secondary bg-opacity-70 transition ease-in-out group-hover:bg-opacity-100`} autoComplete='off' placeholder='Search' onFocus={() => {setFocus(true)}} />
            </div>
        </form>
        {
            isFocus && (
                <div className="w-full absolute bg-light rounded-2xl z-[49] p-8 pt-2">
                    {
                        categories.map((value, index) => (
                            <div key={index} className='mt-6'>
                                <h1 className="text-base font-semibold">{ value.title }</h1>
                                <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-center">
                                    {
                                        value.data.map((value, index) => (
                                            <div className="mt-2 w-full rounded-xl flex items-center overflow-hidden bg-secondary bg-opacity-50 transition ease-in-out hover:bg-opacity-100" key={index}>
                                                <img src={value.image} alt={value.name} width='100' height='100' className='w-20 h-20 aspect-square' />
                                                <h1 className='text-base font-semibold text-center m-4'>{ value.name }</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}