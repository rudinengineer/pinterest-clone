"use client"
import React from 'react'
import NavbarLeft from '../partials/navbar/NavbarLeft'
import NavbarCenter from '../partials/navbar/NavbarCenter'
import NavbarRight from '../partials/navbar/NavbarRight'

type Props = {}

export default function Navbar({}: Props) {
  const [isFixed, setFixed] = React.useState<boolean>(false)
  const [isFocus, setFocus] = React.useState<boolean>(false)

  React.useEffect(() => {
    if ( window.scrollY > 0 ) {
      setFixed(true)
    }
    document.addEventListener('scroll', function() {
      if ( window.scrollY > 0 ) {
        setFixed(true)
      }
    })
  }, [])

  return (
    <>
      <div className={`${isFixed ? 'fixed' : 'absolute'} w-full bg-light p-4 top-0 left-0 hidden ss:grid grid-cols-[1.3fr__3fr__0.7fr] items-center z-[50]`}>
        <NavbarLeft />
        <NavbarCenter isFocus={isFocus} setFocus={setFocus} />
        <NavbarRight />
      </div>
      {
        isFocus && (
          <div className="w-full h-screen fixed top-0 left-0 bg-dark bg-opacity-50 z-[48]"></div>
        )
      }
    </>
  )
}