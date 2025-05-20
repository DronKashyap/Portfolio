'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const IMAGE_SETS = [
  ['/img1a.png', '/img1b.png', '/img1c.png'],
  ['/img2a.png', '/img2b.png', '/img2c.png'],
  ['/img3a.png', '/img3b.png', '/img3c.png'],
  ['/img4a.png', '/img4b.png', '/img4c.png'],
];

const AnimatedCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([]);

  const startScroll = async () => {
    await controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (!isHovered) startScroll();
    else controls.stop();
  }, [isHovered]);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(IMAGE_SETS.length).fill(0)
  );

  const startImageLoops = (cardIdx: number) => {
    intervalRefs.current[cardIdx] = setInterval(() => {
      setCurrentImageIndexes(prev => {
        const newIndexes = [...prev];
        newIndexes[cardIdx] = (newIndexes[cardIdx] + 1) % IMAGE_SETS[cardIdx].length;
        return newIndexes;
      });
    }, 1000);
  };

  const stopImageLoops = (cardIdx: number) => {
    clearInterval(intervalRefs.current[cardIdx]!);
  };

  return (
    <div
      className="overflow-hidden  mt-12 w-auto  h-auto mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      <motion.div
        animate={controls}
        className="flex w-[200%] space-x-6"
      >
        {[...IMAGE_SETS, ...IMAGE_SETS].map((set, idx) => {
          const cardIdx = idx % IMAGE_SETS.length;
          return (
            <div
              key={idx}
              className="min-w-auto h-auto bg-white shadow-lg rounded-xl flex items-center justify-center overflow-hidden"
              onMouseEnter={() => startImageLoops(cardIdx)}
              onMouseLeave={() => stopImageLoops(cardIdx)}
            >
              <Image
                src={set[currentImageIndexes[cardIdx]]}
                alt="carousel-img"
                width={300}
                height={400}
                quality={100} 
                className="object-fit w-auto h-auto transition-all duration-300"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedCarousel;
