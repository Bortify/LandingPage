import React from 'react'
import './globals.css'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Footer from '@/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
