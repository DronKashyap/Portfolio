import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      x="0"
      y="100"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="100"
      fill="#88CE02"
    >
      GSAP
    </text>
  </svg>
)

export { SvgComponent as Gsap }
