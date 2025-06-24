import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 351" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#FFA000"
      d="M0 266 44.6 0 121.6 127.3 93.6 158.6z"
    />
    <path
      fill="#F57C00"
      d="m93.6 158.6 28-31.3 32.9 41.1-60.9 113.7z"
    />
    <path
      fill="#FFCA28"
      d="m0 266 182.3 84.8-60.9-113.7z"
    />
  </svg>
)

export { SvgComponent as Firebase }
