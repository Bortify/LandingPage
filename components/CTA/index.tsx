'use client'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Typography from '../Typography'
import Section from './Sections'
import Image from 'next/image'

const CTA: React.FC<{}> = () => {
  const [img, setImg] = useState<string>(ContentArray[0].component)
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <>
      <Typography.Heading
        variant='h2'
        className='w-full text-center my-8 px-10'
        fontFamily='manrope'
        boldness={800}>
        Prepare for{' '}
        <span className=' font-black text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-green-600'>
          Unprecedented
        </span>{' '}
        eCommerce Efficiency
      </Typography.Heading>
      <Container>
        <div className='grid w-full grid-cols-2'>
          <div className='px-10 relative'>
            {ContentArray.map((item, index) => (
              <Section
                {...item}
                key={index}
                observerCallBack={(isIntersecting, component) => {
                  if (isIntersecting && imgRef.current) {
                    imgRef.current.style.opacity = '0'
                    setImg(String(component))
                    imgRef.current.addEventListener(
                      'transitionend',
                      () => {
                        console.log('hgcgchgh')
                        if (imgRef.current) {
                          imgRef.current.style.opacity = '1'
                        }
                      },
                      {
                        once: true,
                      }
                    )
                  }
                }}
              />
            ))}
          </div>
          <div className='h-[calc(100vh_-_104px)] sticky top-[104px] flex items-center justify-center'>
            <Image
              ref={imgRef}
              src={img}
              width={600}
              height={600}
              alt='image'
              className='transition-all duration-200 ease-in-out'
              loading='lazy'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default CTA

const ContentArray = [
  {
    title:
      'Recommend as a human friend would, without the need to hire anyone.',
    paragraph:
      'With AI-powered product recommendation, the chatbot analyzes customer behavior and preferences to intelligently suggest relevant items. It tailors recommendations based on browsing history, past purchases, and cart additions, maximizing personalization and driving increased sales.',
    link: '/',
    component: '/cta/first.png',
  },
  {
    title: `It's time to unchain from the screen. Let our AI with a human touch handle it!`,
    paragraph:
      'Deliver 24/7 customer support with an AI-powered chatbot driven by GPT models. Customers receive human-like interactions, instant responses, troubleshooting guidance, and product information at any time. This human touch enhances the customer experience, fostering trust and loyalty beyond regular business hours.',
    link: '/',
    component: '/cta/second.png',
  },
  {
    title: `Say Goodbye to Cart Abandonment Worries! Trust us to Handle it Our Way.`,
    paragraph:
      'Create a seamless shopping experience and maximize conversions by preventing cart abandonment. Utilize strategies such as real-time reminders, personalized incentives, instant assistance, streamlined checkout, trust signals, exit pop-ups, and targeted follow-up emails. Enhance customer satisfaction, address concerns, and optimize sales performance for your e-commerce store.',
    link: '/',
    component: '/cta/third.png',
  },
  {
    title: `Understand Your Customers Deeply with Advanced Insights - Don't Assume, Be Data-Driven!`,
    paragraph:
      'Gain valuable insights with our advanced analytics. Measure conversion rate, average order value, customer satisfaction, and inventory management. Optimize sales and enhance the customer experience for sustainable growth.',
    link: '/',
    component: '/cta/fourth.png',
  },
]
