import Bottombar from '@/components/puzzle/Bottombar'
import Navbar from '@/components/puzzle/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Bottombar />
        </footer>
    </>
  )
}