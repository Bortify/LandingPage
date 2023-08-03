import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import Fonts from '../Font'

interface HeadingPropsType
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  italic?: Boolean
  underline?: Boolean
  boldness?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontFamily?: 'inter' | 'manrope' | 'poppins'
}

const Heading: React.FC<HeadingPropsType> = ({
  className,
  children,
  variant,
  boldness = 500,
  italic = false,
  underline = false,
  fontFamily = 'manrope',
  ...restProps
}) => {
  const props = {
    ...restProps,
    className: cn(
      Fonts[fontFamily],
      VariantToStyleMap[variant],
      BoldnessToFontWeightMap[boldness],
      {
        underline: underline,
        italic: italic,
      },
      className
    ),
  }
  switch (variant) {
    case 'h1':
      return <h1 {...props}>{children}</h1>
    case 'h2':
      return <h2 {...props}>{children}</h2>
    case 'h3':
      return <h3 {...props}>{children}</h3>
    case 'h4':
      return <h4 {...props}>{children}</h4>
    case 'h5':
      return <h5 {...props}>{children}</h5>
    case 'h6':
      return <h6 {...props}>{children}</h6>
  }
}

const VariantToStyleMap = {
  h1: 'text-6xl',
  h2: 'text-5xl',
  h3: 'text-4xl',
  h4: 'text-3xl',
  h5: 'text-2xl',
  h6: 'text-xl',
}

const BoldnessToFontWeightMap = {
  100: 'font-thin',
  200: 'font-extralight',
  300: 'font-light',
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black',
}

export default Heading
