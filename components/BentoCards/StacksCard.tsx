import { Marquee } from '../Marquee'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Html } from '@/components/Icons/StackIcons/Html'
import { Css } from '@/components/Icons/StackIcons/css'
import { Docker } from '@/components/Icons/StackIcons/docker'
import { Express } from '@/components/Icons/StackIcons/express'
import { Figma } from '@/components/Icons/StackIcons/figma'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
import { Git } from '@/components/Icons/StackIcons/git'
import { Github } from '@/components/Icons/StackIcons/github'
import { GithubActions } from '@/components/Icons/StackIcons/githubactions'
import { Graphql } from '@/components/Icons/StackIcons/graphql'
import { Java } from '@/components/Icons/StackIcons/java'
import { JS } from '@/components/Icons/StackIcons/javascript'
import { Mongodb } from '@/components/Icons/StackIcons/mongodb'
import { Postgresql } from '@/components/Icons/StackIcons/postgresql'
import { Postman } from '@/components/Icons/StackIcons/postman'
import { Prisma } from '@/components/Icons/StackIcons/prisma'
import { ReactIcon } from '@/components/Icons/StackIcons/react'
import { Redis } from '@/components/Icons/StackIcons/redis'
import { Sass } from '@/components/Icons/StackIcons/sass'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { Sql } from '@/components/Icons/StackIcons/sql'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import { Typescript } from '@/components/Icons/StackIcons/typescript'
import { VsCode } from '@/components/Icons/StackIcons/VS'
import { Webpack } from '@/components/Icons/StackIcons/webpack'
import { WebSocket } from '@/components/Icons/StackIcons/Websocket'
import { Cloudflare } from '@/components/Icons/StackIcons/Cloudflare'
import { Firebase } from '../Icons/StackIcons/Firebase'
import React from 'react'
import { NodejsIcon } from '@/components/Icons/StackIcons/nodejsIcon'
import { Gsap } from '../Icons/StackIcons/Gsap'
import { Python } from '../Icons/StackIcons/Python'
import { Aws } from '../Icons/StackIcons/AWS'
import { Kubernetes } from '../Icons/StackIcons/kubernetes'
import { Prometheus } from '../Icons/StackIcons/Prometheus'
import { Grafana } from '../Icons/StackIcons/Grafana'
import { Kafka } from '../Icons/StackIcons/Kafka'
import { Mongoose } from '../Icons/StackIcons/Mongoose'
import Stack from '@/components/Icons/Stack'
import BentoCard from './BentoCard'
import Vite from '@/components/Icons/StackIcons/vite'

const frontendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Html,
  Css,
  JS,
  Typescript,
  ReactIcon,
  Nextjs,
  Tailwind,
  Sass,
  FramerMotion,
  Figma,
  Sql,
  Shadcn,
  Vite,
  Webpack,
  Firebase,
  Gsap
]

const backendAndTools: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  NodejsIcon,
  Express,
  Docker,
  Prisma,
  Python,
  Aws,
  Kafka,
  Kubernetes,
  Prometheus, 
  Grafana,
  Mongoose,
  Postgresql,
  Mongodb,
  Redis,
  Graphql,
  Postman,
  VsCode,
  Git,
  Github,
  GithubActions,
  WebSocket,
  Cloudflare,
]

const StacksCard = ({ isForSmall = false }: { isForSmall?: boolean }) => {
  return (
    <BentoCard className="group/stack col-span-5 row-span-1 h-56 p-4 xs:col-span-4 xs:row-span-2 lg:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Stack className="size-4" />
        <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
          Stacks
        </h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        {frontendTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `s-${index}` : `${index}`}
            className="size-10 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
          />
        ))}
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        {backendAndTools.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `s2-${index}` : `${index}2`}
            className="size-10  grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
          />
        ))}
      </Marquee>
    </BentoCard>
  )
}

export default StacksCard
