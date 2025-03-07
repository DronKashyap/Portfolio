"use client";

import Preloader from "@/components/BootElement";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const BootScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>;
};

export default BootScreen;
