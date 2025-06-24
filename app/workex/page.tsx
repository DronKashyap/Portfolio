"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Circle, MapPin, Calendar, Building2 } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  isCurrentRole?: boolean;
   companyLogo?: string;
};

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Smith Retail and Ventures",
    location: "Noida, India · On Site",
    duration: "May 2025 - Present",
    description:
      "Developing and maintaining the company's e-commerce platform using Next.js and Node.js. Implementing new features, optimizing performance, and ensuring a seamless user experience.",
    isCurrentRole: true,
   companyLogo: "/SRVP.png",
  },
  {
    title: "Full Stack Developer",
    company: "NeuNormal",
    location: "Bengaluru, India · Remote",
    duration: "November 2024 - May 2025",
    description:
      "Single-handedly built and deployed an AI-Powered Digital Marketing tool and developed NeuSocial - a comprehensive mental and physical health platform for users.",
    companyLogo: "/neunormal.png",
    },
  {
    title: "Frontend Engineer Intern",
    company: "Netbookflix",
    location: "Noida, India · Remote",
    duration: "August 2024 - November 2024",
    description:
      "Collaborated with the team to migrate codebase from React to Next.js, improving performance and SEO. Contributed to building new features and resolving application bugs.",
    companyLogo: "/nbf.png",
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const timelineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const WorkEx: FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
        <p className="text-lg text-gray-600">My professional journey and career milestones</p>
      </motion.div>

      <div className="relative">
        {/* Animated Timeline Line */}
        {/* <div className="absolute left-8 top-0 w-0.5 bg-gray-200 h-full">
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 to-purple-600"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          />
        </div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] top-6">
                {exp.isCurrentRole ? (
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    className="relative"
                  >
                    <Circle className="w-4 h-4 fill-green-500 text-green-500" />
                    <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping" />
                  </motion.div>
                ) : (
                  <Circle className="w-4 h-4 fill-gray-400 text-gray-400" />
                )}
              </div>

              {/* Experience Card */}
              <motion.div
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.duration}</span>
                    {exp.isCurrentRole && (
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold"
                      >
                        Current
                      </motion.span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-lg text-gray-700">
                    <Building2 className="w-5 h-5" />
                    <span className="font-semibold">{exp.company}</span>
                     <div className="ml-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {exp.companyLogo ? (
                        <img 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkEx;