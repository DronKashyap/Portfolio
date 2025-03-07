import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function Landing() {
  return (
    <div className="w-full mx-auto rounded-md m-0 p-0 h-[700px] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Dron's Portfolio Site
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
         Coming Soon!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        </div>
      </Vortex>
    </div>
  );
}
