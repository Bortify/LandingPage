import { cn } from '@/lib/utils'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Container: React.FC<ContainerProps> = ({
  skipParentContainer = false,
  parentClassName,
  className,
  children,
}) => {
  return (
    <ParentContainer
      skipParentContainer={skipParentContainer}
      className={parentClassName}>
      <div className={cn(' w-full max-w-98', className)}>{children}</div>
    </ParentContainer>
  )
}

export default Container

const ParentContainer: React.FC<ParentContainerProps> = ({
  skipParentContainer,
  children,
  className,
}) => {
  if (skipParentContainer) {
    return children
  }
  return (
    <section className={cn('w-full grid place-items-center', className)}>
      {children}
    </section>
  )
}

interface ContainerProps {
  skipParentContainer?: Boolean
  parentClassName?: string
  className?: string
  children: any
}

interface ParentContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skipParentContainer?: Boolean
}
