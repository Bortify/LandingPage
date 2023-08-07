'use client'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Typography from '../Typography'
import Section from './Sections'
import Image from 'next/image'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'

const CTA: React.FC<{}> = () => {
  const staticContainerRef = useRef<HTMLDivElement>(null)
  const dynamicContainerRef = useRef<HTMLDivElement>(null)

  const [staticContainerWidth, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(staticContainerRef.current?.clientWidth || 0)
  }, [])

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
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-2 hidden w-full'>
          <div className='px-10'>
            {ContentArray.map((item, index) => (
              <Section
                {...item}
                key={index}
                observerCallBack={(isIntersecting, component) => {
                  if (isIntersecting && dynamicContainerRef.current) {
                    const transform =
                      ContentArray.find(
                        ({ component: comp }) => comp === component
                      )?.transform || 'translateX(0px)'
                    dynamicContainerRef.current.style.transform = transform
                  }
                }}
              />
            ))}
          </div>
          <div
            ref={staticContainerRef}
            className='lg:h-[calc(100vh_-_104px)] h-[calc(50vh_-_104px)] sticky top-[104px] flex items-center justify-start lg:w-full w-screen overflow-hidden bg-white'>
            <div className='w-full h-full relative'>
              <div
                ref={dynamicContainerRef}
                className={
                  'h-full flex transition-transform duration-300 ease-in-out'
                }
                style={{
                  width: `${staticContainerWidth * ContentArray.length}px`,
                }}>
                {ContentArray.map(({ component }, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-center'
                    style={{
                      width: `${staticContainerWidth}px`,
                    }}>
                    <Image
                      src={component}
                      width={600}
                      height={600}
                      alt='image'
                      className='transition-all duration-200 ease-in-out lg:w-[600px] w-[300px]'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='block lg:hidden w-full'>
          {ContentArray.map(({ title, paragraph, component, link }, index) => (
            <section
              key={index}
              className='h-min w-full flex items-center justify-center flex-col px-10 py-10'>
              <Image
                src={component}
                width={500}
                height={300}
                alt='image'
                className='w-full sm:w-[500px]'
              />
              <div className='w-full'>
                <Typography.Heading
                  variant='h3'
                  boldness={700}
                  className='mb-5'>
                  {title}
                </Typography.Heading>
                <Typography.Content>{paragraph}</Typography.Content>
                <Button
                  href={link}
                  variant='ghost'
                  className='group px-0 font-semibold text-purple-900 hover:text-purple-900 mt-4'>
                  Learn More{' '}
                  <MoveRight className='ml-2 group-hover:translate-x-2 duration-300 ease-in-out transition-transform' />
                </Button>
              </div>
            </section>
          ))}
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
    transform: 'translateX(0%)',
  },
  {
    title: `It's time to unchain from the screen. Let our AI with a human touch handle it!`,
    paragraph:
      'Deliver 24/7 customer support with an AI-powered chatbot driven by GPT models. Customers receive human-like interactions, instant responses, troubleshooting guidance, and product information at any time. This human touch enhances the customer experience, fostering trust and loyalty beyond regular business hours.',
    link: '/',
    component: '/cta/second.png',
    transform: 'translateX(-25%)',
  },
  {
    title: `Say Goodbye to Cart Abandonment Worries! Trust us to Handle it Our Way.`,
    paragraph:
      'Create a seamless shopping experience and maximize conversions by preventing cart abandonment. Utilize strategies such as real-time reminders, personalized incentives, instant assistance, streamlined checkout, trust signals, exit pop-ups, and targeted follow-up emails. Enhance customer satisfaction, address concerns, and optimize sales performance for your e-commerce store.',
    link: '/',
    component: '/cta/third.png',
    transform: 'translateX(-50%)',
  },
  {
    title: `Understand Your Customers Deeply with Advanced Insights - Don't Assume, Be Data-Driven!`,
    paragraph:
      'Gain valuable insights with our advanced analytics. Measure conversion rate, average order value, customer satisfaction, and inventory management. Optimize sales and enhance the customer experience for sustainable growth.',
    link: '/',
    component: '/cta/fourth.png',
    transform: 'translateX(-75%)',
  },
]
