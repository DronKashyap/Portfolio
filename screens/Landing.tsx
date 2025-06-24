import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Header from "@/components/Header";
import Bento from "@/components/Bento";
import AnimatedCarousel from "@/components/AnimatedCarousel"
import Footer from "@/components/Footer";

export function Landing() {
  return (
    <div className="bg-white text-black ">
      <Header />
      <AnimatedCarousel />
      <div className="container mx-auto flex min-h-screen max-w-5xl flex-col px-4 gradient-to-t from-red-500 to-blue-500 md:px-16">
      <section className="pb-3 md:mt-8 md:pb-16 lg:mt-10">
      <Bento />
      </section>
      </div>
    </div>
  );
}
