'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import img1a from '@/public/img1a.png';
import img1b from '@/public/img1b.png';
import img1c from '@/public/img1c.png';
import img2a from '@/public/img2a.png';
import img2b from '@/public/img2b.png';
import img2c from '@/public/img2c.png';
import img3a from '@/public/img3a.png';
import img3b from '@/public/img3b.png';
import img3c from '@/public/img3c.png';
import img4a from '@/public/img4a.png';
import img4b from '@/public/img4b.png';
import img4c from '@/public/img4c.png';
import img5a from '@/public/img5a.png';
import img5b from '@/public/img5b.png';
import img5c from '@/public/img5c.png';

const IMAGE_SETS = [
  [img1a, img1b, img1c],
  [img2a, img2b, img2c],
  [img3a, img3b, img3c],
  [img4a, img4b, img4c],
  [img5a, img5b, img5c],
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

    // Optional: Log image dimensions
    const allImages = IMAGE_SETS.flat();
    allImages.forEach((img, index) => {
      console.log(`Image ${index + 1}: ${img.src}, Width: ${img.width}, Height: ${img.height}`);
    });
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
      className="relative overflow-hidden w-full py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="flex w-[200%] space-x-6"
      >
        {[...IMAGE_SETS, ...IMAGE_SETS].map((set, idx) => {
          const cardIdx = idx % IMAGE_SETS.length;
          const currentImage = set[currentImageIndexes[cardIdx]];
          return (
            <div
                key={idx}
                className="relative flex items-center justify-center min-w-[1000px] h-[600px] shrink-0 overflow-hidden"
                onMouseEnter={() => startImageLoops(cardIdx)}
                onMouseLeave={() => stopImageLoops(cardIdx)}
              >
                <Image
                  src={currentImage}
                  alt="carousel-img"
                  width={1000}
                  height={600}
                  className="z-0 border-4  rounded-xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedCarousel;
