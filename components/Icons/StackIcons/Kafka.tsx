import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="45"
    height="45"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="25" x2="25" y1="24.681" y2="35.468" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset=".699" stopColor="#e6abff" />
      </linearGradient>
      <linearGradient id="grad2" x1="25" x2="25" y1="2.683" y2="15.247" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset=".699" stopColor="#e6abff" />
      </linearGradient>
      <linearGradient id="grad3" x1="45.5" x2="45.5" y1="14.815" y2="26.122" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset=".699" stopColor="#e6abff" />
      </linearGradient>
      <linearGradient id="grad4" x1="45.5" x2="45.5" y1="38.414" y2="49.233" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset=".699" stopColor="#e6abff" />
      </linearGradient>
      <linearGradient id="grad5" x1="25" x2="25" y1="48.976" y2="58.584" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset=".699" stopColor="#e6abff" />
      </linearGradient>
      <linearGradient id="grad6" x1="34.503" x2="34.503" y1="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1a6dff" />
        <stop offset="1" stopColor="#c822ff" />
      </linearGradient>
    </defs>
    <circle cx="25" cy="32" r="6" fill="url(#grad1)" />
    <circle cx="25" cy="9" r="5" fill="url(#grad2)" />
    <path fill="url(#grad3)" d="M49.4,18.25c0.6,1.04,0.76,2.25,0.45,3.41c-0.31,1.17-1.06,2.14-2.1,2.74c-1.69,0.96-3.86,0.68-5.07-0.9c-1.04-1.44-1.21-3.3-0.6-4.93c0.76-2.04,2.87-3.31,4.93-2.74C47.83,16.46,48.8,17.21,49.4,18.25z" />
    <path fill="url(#grad4)" d="M49.85,42.34c0.31,1.16,0.15,2.37-0.45,3.41c-0.6,1.04-1.57,1.79-2.73,2.1c-1.69,0.45-3.43,0.22-4.93-0.65c-1.97-1.13-3.08-3.34-2.58-5.49c0.52-1.94,1.68-3.6,3.31-4.74c2.28-1.63,5.43-1.44,7.54,0.46C48.79,40.2,49.54,41.17,49.85,42.34z" />
    <circle cx="25" cy="55" r="5" fill="url(#grad5)" />
    <path fill="url(#grad6)" d="M49.75,36.14c-2.95-1.71-6.73-1.23-9.13,1.47l-4.43-2.54C36.68,33.82,37,32.45,37,31s-0.32-2.82-0.87-4.06l4.43-2.54c2.4,2.7,6.18,3.18,9.13,1.47c4.02-2.33,5.41-7.5,3.08-11.52c-2.33-4.02-7.5-5.41-11.52-3.08c-2.67,1.55-4.2,4.65-3.97,7.68l-4.48,2.56c-1.63-2.28-4.19-3.86-7.13-4.15v-4.11c4.49-0.5,8-4.32,8-8.94c0-4.96-4.04-9-9-9s-9,4.04-9,9c0,4.62,3.51,8.44,8,8.94v4.11c-5.05,0.5-9,4.77-9,9.95s3.95,9.45,9,9.95v4.11c-4.49,0.5-8,4.32-8,8.94c0,4.96,4.04,9,9,9s9-4.04,9-9c0-4.62-3.51-8.44-8-8.94v-4.11c2.94-0.29,5.5-1.87,7.13-4.15l4.48,2.56c-1.07,2.66-0.55,5.82,1.49,8.01c2.61,2.88,6.96,3.63,10.46,1.71c4.02-2.33,5.41-7.5,3.08-11.52C53.12,39.11,51.72,37.27,49.75,36.14z" />
  </svg>
)

export { SvgComponent as Kafka }
