import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { FontPropTypes } from '../Types'
import Fonts from '../Font'
import { BoldnessToFontWeightMap } from '../constants'

const Content: React.FC<ContentPropType> = ({
  children,
  boldness = 500,
  italic = false,
  underline = false,
  fontFamily = 'manrope',
  className,
  size = 'lg',
  ...restProps
}) => {
  return (
    <p
      {...restProps}
      className={cn(
        {
          underline: underline,
          italic: italic,
        },
        Fonts[fontFamily],
        BoldnessToFontWeightMap[boldness],
        SizeToStyleMap[size],
        className
      )}>
      {children}
    </p>
  )
}

export default Content

interface ContentPropType
  extends FontPropTypes,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

const SizeToStyleMap = {
  xs: 'text-[8px] md:text-xs',
  sm: 'text-[10px] md:text-sm',
  base: 'text-xs md:text-base',
  lg: 'text-sm md:text-lg',
  xl: 'text-lg md:text-xl',
}
