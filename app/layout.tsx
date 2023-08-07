import React from 'react'
import { Toaster } from 'react-hot-toast'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import './globals.css'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
        <Toaster position='bottom-left' reverseOrder={false} />
        <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/43160068.js'></script>
      </body>
    </html>
  )
}
