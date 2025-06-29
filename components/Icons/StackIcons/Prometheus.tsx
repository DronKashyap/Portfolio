import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 48 48"
    {...props}
  >
    <defs>
      <linearGradient id="prometheusGradient" x1="5.435" x2="41.676" y1="5.435" y2="41.676" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ed6c47" />
        <stop offset="1" stopColor="#d43a02" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#prometheusGradient)" />
    <path
      fill="#fff"
      d="M29.91,37c-0.47,2.84-2.94,5-5.91,5s-5.44-2.16-5.91-5H29.91z M34,32H14v3h20V32z M33.5,30
        c1-1,2.5-3.5,3-5C35,25.5,30,26.5,30,26.5c1-1.5,2-3.5,2-6c0-3.5-4-7-3-11.5c-2.5,2.5-2.5,7.5-2.5,9.5c-0.5-1.5-0.5-3-0.5-4
        c0-3-3-5.5-2-8.5c0,0-2.5,1-2.5,4c0,3.5-0.5,5.5-1.5,6.5c0-3-1-5-2.5-5.5c0.5,1,0.5,1.5,0.5,2c0,1.5-2.5,6-2.5,9
        c0,2,1,3.5,2.5,4.5c0,0-4-1-6.5-1.5c0.5,1.5,2,4,3,5C14.5,30,31.5,30,33.5,30z"
    />
  </svg>
)

export { SvgComponent as Prometheus }
