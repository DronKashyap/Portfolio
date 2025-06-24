"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";


import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there — I’m Dron Kashyap, a Full Stack Developer with a passion for crafting seamless digital experiences across both mobile and web platforms. Currently, I work full-time as a Software Engineer, but my journey has been shaped by countless freelance projects that have honed my ability to adapt, lead, and deliver high-impact solutions for clients around the world.
        </Paragraph>
        <Paragraph className=" mt-4">
         Over the years, I’ve worn many hats: developer, strategist, and sometimes even DevOps engineer. I bring mid-level DevOps expertise to the table, making sure what I build doesn’t just work — it scales, performs, and stays reliable.
        </Paragraph>

        <Paragraph className=" mt-4">
       But more than just a coder, I see myself as a problem solver. I don’t believe in being locked into a single tech stack or language. Whether it's building an MVP from scratch, fixing performance bottlenecks, or architecting scalable backend systems, I approach every challenge with flexibility and curiosity.
        </Paragraph>
        <Paragraph className=" mt-4">
          Lately, I’ve been diving deep into AI/ML and Blockchain development, learning Rust and exploring the mechanics behind decentralized technologies. These areas excite me not just for their technical depth but for their potential to change how we interact with technology altogether.
        </Paragraph>
        <Paragraph className=" mt-4">
          Outside of the screen, I’m equally passionate about football. I run my own club — <strong>Brownie FC </strong>— where the energy of the field keeps me grounded and creative. You can check us out on YouTube and see the action for yourself.
        </Paragraph>
        <Paragraph className=" mt-4">
         I also run <strong>Penguin Labs</strong>, a development agency where I collaborate with international clients to build Prototypes, MVPs, and full-scale applications. Whether you’re a startup in need of speed or an enterprise looking for custom digital solutions, Penguin Labs is where ideas turn into reality.
        </Paragraph>
          <div className="flex justify-center items-center mt-6 space-x-4"> 
         <Image  src="/browniefc.png"
              className="hover:scale-110 transition-transform duration-200 "
              width={100}
              height={40} alt="about" />
        <Image  src="/logo2.jpeg"
              className="hover:scale-110 rounded-full transition-transform duration-200 "
              width={100}
              height={40} alt="about" />
              </div>       
      </div>
    </div>
  );
}
