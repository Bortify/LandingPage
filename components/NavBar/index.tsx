'use client'
import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Logo } from '../Icons'
import { Button } from '../ui/button'
import Link from '../Link'
import Fonts from '../Typography/Font'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const NavBar: React.FC<{}> = () => (
  <nav className='w-full grid place-items-center py-8 px-10'>
    <div className='max-w-98 w-full h-10 flex items-center justify-between'>
      <Link href='/'>
        <Logo className='w-24 md:w-32' />
      </Link>
      <div className='items-center gap-x-10 hidden md:flex'>
        {LINKS.map(({ label, href }, index) => (
          <Link
            href={href}
            key={index}
            className={cn(
              'py-8 text-lg font-semibold text-gray-800',
              Fonts.inter
            )}>
            {label}
          </Link>
        ))}
        <Button variant={'default'}>Explore</Button>
      </div>
      <div className='block md:hidden'>
        <CollapsableNav />
      </div>
    </div>
  </nav>
)

const CollapsableNav: React.FC<{}> = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu className='w-min' />
      </PopoverTrigger>
      <PopoverContent className='w-screen mt-6 flex flex-col gap-y-2'>
        {LINKS.map(({ label, href }, index) => (
          <Link
            href={href}
            key={index}
            className={cn(
              'text-lg font-semibold text-gray-800',
              Fonts.inter
            )}>
            {label}
          </Link>
        ))}
        <Button variant={'default'}>Explore</Button>
      </PopoverContent>
    </Popover>
  )
}

export default NavBar

const LINKS = [
  {
    label: 'Features',
    href: '/#',
  },
  {
    label: 'Pricing',
    href: '/#',
  },
  {
    label: 'Contact Us',
    href: '/#',
  },
]
