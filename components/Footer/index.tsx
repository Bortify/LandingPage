import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'

import Links from '@/static-config/links.json'

import Container from '../Container'
import { Logo } from '../Icons'


const Footer: React.FC<{}> = () => (
  <footer className='bg-gray-50'>
    <Container className='px-10 py-20 md:grid grid-cols-8 hidden'>
      <div className='col-span-6'>
        <Logo className='w-32 mb-5' />
        <div className='flex items-center justify-center w-max'>
          {Links.map(({ label, url }, index) => (
            <React.Fragment key={index}>
              <Link href={url} className='text-gray-600'>
                {label}
              </Link>
              {index !== Links.length - 1 && (
                <div className='w-0.5 bg-gray-600 h-5 mx-4' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='col-span-2 flex items-end justify-end'>
        <SocialCont />
      </div>
    </Container>
    <Container className='px-10 py-10 md:hidden flex flex-col items-center justify-center'>
      <Logo className='w-24 mb-5' />
      <div className='w-full mb-4'>
        <div className='flex items-center flex-wrap gap-y-2 justify-center'>
          {Links.map(({ label, url }, index) => (
            <React.Fragment key={index}>
              <Link href={url} className='text-gray-600'>
                {label}
              </Link>
              {index !== Links.length - 1 && (
                <div className='w-0.5 bg-gray-600 h-5 mx-4' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <SocialCont />
    </Container>
  </footer>
)

export default Footer

const SocialCont: React.FC<{}> = () => (
  <div className='flex gap-5'>
    <Link href={'https://www.linkedin.com/in/hiten-vats/'} target='_blank'>
      <LinkedinIcon className='text-gray-500' />
    </Link>
    <Link href={'https://twitter.com/this_is_hiten'} target='_blank'>
      <TwitterIcon className='text-gray-500' />
    </Link>
    <Link href={'https://www.instagram.com/this_is_hiten/'} target='_blank'>
      <InstagramIcon className='text-gray-500' />
    </Link>
    <Link href={'#'} target='_blank'>
      <FacebookIcon className='text-gray-500' />
    </Link>
  </div>
)
