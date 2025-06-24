import ProjectCard from '@/components/ProjectCard'
import { topProjects } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My projects and creations.',
}

const page = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-5 md:px-16">
    <section className="pb-16 pt-8 md:mt-8 lg:mt-10">
      <div>
        <h2 className="my-8 font-neu text-3xl font-medium tracking-tight">
          Top Projects
        </h2>
        <div className="space-y-14">
          {topProjects.map((project, index) => (
            <ProjectCard
              key={index}
              delay={index * 0.2}
              imageSrc={project.imageSrc}
              // videoSrc={project.videoSrc}
              title={project.title}
              tags={project.tags}
              timeline={project.timeline}
              tagline={project.tagline}
              liveDemoHref={project.liveDemoHref}
              sourceCodeHref={project.sourceCodeHref}
            />
          ))}
        </div>
      </div>{' '}
      <div>
        <h1 className="my-14 text-xl">
          View more on{' '}
          <Link
            href="https://github.com/DronKashyap?tab=repositories"
            className="peer inline-flex items-center justify-start bg-gradient-to-r from-green-200 via-green-400 via-70% to-purple-500 bg-clip-text font-neu text-transparent"
            target="_blank"
          >
            Github
          </Link>
         
          <ArrowRight className="ml-2 inline-block size-4 rounded-full border border-transparent stroke-black stroke-1 transition-all duration-300 ease-linear peer-hover:-rotate-45 peer-hover:border-slate-950 peer-hover:stroke-[2px] dark:stroke-white dark:peer-hover:border-slate-50" />
        </h1>
        <h1 className="mt-24 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-center font-neu text-4xl font-extrabold text-transparent opacity-30 md:text-7xl">
          Shipping More Soon
        </h1>
      </div>
    </section>
    </div>
  )
}
export default page
