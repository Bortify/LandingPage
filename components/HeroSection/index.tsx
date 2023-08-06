'use client'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import Container from '../Container'
import Typography from '../Typography'
import { Button } from '../ui/button'
import { AttachObserver, BuildThresholdList } from '@/utils/intersection'

const HeroSection: React.FC<{}> = () => {
  const elemRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    AttachObserver(
      elemRef.current,
      {
        threshold: 0.3,
      },
      (entries, observer) => {
        const nav = document.querySelector('#botgpt-nav-bar')
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            nav?.classList.add('bg-white', 'shadow')
          } else {
            nav?.classList.remove('bg-white', 'shadow')
          }
        })
      }
    )
    // for transnitioning image in hero section
    AttachObserver(
      elemRef.current,
      {
        threshold: BuildThresholdList(),
        root: null,
        rootMargin: '0px',
      },
      (entries, observer) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
          const val = 100-Math.round(ratio * 100)
          if (chatRef.current?.style && imgRef.current?.style) {
            chatRef.current.style.transform = `translateX(${val/5}%)`
            imgRef.current.style.transform = `translateX(-${val/5}%)`
          }
        })
      }
    )
  }, [])
  return (
    <main ref={elemRef}>
      <Container className='h-[calc(100vh_-_104px)]'>
        <div className='w-full py-20 px-10 grid md:grid-rows-1 md:grid-cols-2'>
          <div className='flex flex-col items-start justify-center'>
            <Typography.Heading
              variant='h6'
              className='text-lg text-gray-500 mb-3'>
              GPT powered chat bot for e-commerce stores{' '}
            </Typography.Heading>
            <Typography.Heading
              variant='h1'
              boldness={800}
              className='text-gray-900 mb-3'>
              Supercharge Your Shopify Store with{' '}
              <span className=' font-black text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-green-600'>
                GPT-Powered
              </span>{' '}
              Conversations!
            </Typography.Heading>
            <Typography.Content size='xl' className='text-gray-600 mb-3'>
              Revolutionize your Shopify store with a GPT-powered AI chatbot to
              elevate customer engagement, streamline shopping experience, and
              supercharged sales.
            </Typography.Content>
            <div className='flex gap-2.5 flex-wrap'>
              <Button>Sign Up for Early Bird Discount</Button>
              <Button variant='ghost' className='group'>
                Learn More{' '}
                <MoveRight className='ml-2 group-hover:translate-x-2 duration-300 ease-in-out transition-transform' />
              </Button>
            </div>
            <div className='flex items-center justify-start gap-2 mt-5 w-full'>
              <Typography.Heading variant='h6' className='text-gray-500'>
                Powered by{' '}
              </Typography.Heading>
              <Image
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
                }
                width={150}
                height={100}
                alt='openai'
              />
            </div>
          </div>
          <div className=' h-[600px] relative hidden md:block'>
            <Image
              src={'/hero_image.png'}
              width={500}
              height={500}
              alt='hero image'
              className='absolute right-0 top-0 z-0'
              ref={imgRef}
            />
            <div
              className='absolute -bottom-10 left-0'
              ref={chatRef}>
              <FloatingChatImage />
            </div>
          </div>
        </div>
        <Image
          src={'/blur_effect_top_left.png'}
          width={700}
          height={500}
          alt='effect'
          className='absolute -z-10 top-0 md:left-0 w-full -left-20  md:w-1/2'
        />
        <Image
          src={'/blur_effect_top_left.png'}
          width={700}
          height={500}
          alt='effect'
          className='absolute -z-10 bottom-0 md:right-0 w-full right-0  md:w-1/2 rotate-180'
        />
      </Container>
    </main>
  )
}

const FloatingChatImage: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className }) => {
  return (
    <div className={cn('relative', className)}>
      <Image
        src={'/chat.png'}
        width={400}
        height={500}
        alt='chat'
        className='z-10 w-2/3 md:w-[400px] slide-in-right'
      />
    </div>
  )
}

export default HeroSection