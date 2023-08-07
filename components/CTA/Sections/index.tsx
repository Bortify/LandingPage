import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import { AttachObserver, BuildThresholdList } from '@/utils/intersection'
import { MoveRight } from 'lucide-react'
import {
  DetailedHTMLProps,
  HTMLAttributes,
  LegacyRef,
  useEffect,
  useRef,
} from 'react'

interface SectionPropTypes {
  title: string
  paragraph: string
  link: string
  component: string
  observerCallBack: (isIntersectiong: Boolean, component: String) => void
}
const Section: React.FC<SectionPropTypes> = ({
  title,
  paragraph,
  link,
  component,
  observerCallBack
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    AttachObserver(
      ref.current,
      {
        threshold: BuildThresholdList(),
        root: document,
        rootMargin: '0px',
      },
      (entries, observer) => {
        entries.forEach((entry) => {
          if (ref.current?.style) {
            ref.current.style.opacity = String(entry.intersectionRatio)
          }
        })
      }
    )

    AttachObserver(
      ref.current,
      {
        threshold: 0.3,
      },
      (entries, observer) => {
        entries.forEach((entry) => {
          const component = ref.current?.dataset.component || ''
          observerCallBack(entry.isIntersecting, component)
        })
      }
    )
  }, [])
  return (
    <div
      className='lg:h-[calc(100vh_-_104px)] h-[50vh] flex items-center justify-center'
      data-component={component}
      ref={ref}>
      <div className='w-full' ref={ref}>
        <Typography.Heading variant='h4' boldness={800} className='mb-5'>
          {title}
        </Typography.Heading>
        <Typography.Content className='mb-5'>{paragraph}</Typography.Content>
        <Button
          href={link}
          variant='ghost'
          className='group px-0 font-semibold text-purple-900 hover:text-purple-900'>
          Learn More{' '}
          <MoveRight className='ml-2 group-hover:translate-x-2 duration-300 ease-in-out transition-transform' />
        </Button>
      </div>
    </div>
  )
}

export default Section
