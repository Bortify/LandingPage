import NextLink from 'next/link'
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

interface LinkType
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string
}

const Link: React.FC<LinkType> = ({ children, href, className, target }) => {
  return (
    <NextLink href={href} className={className} target={target}>
      {children}
    </NextLink>
  )
}

export default Link
