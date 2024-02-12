import { useRef } from 'react';
import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import Image from 'next/image';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'imagesweb (8).webp',
  },
  {
    color: '#d6d7dc',
    src: 'image2 (5).webp',
  },
  {
    color: '#e3e3e3',
    src: 'imagesweb (6).webp',
  },
  {
    color: '#21242b',
    src: 'imagesweb (7).webp',
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'imagesweb (9).webp',
  },
  {
    color: '#e5e0e1',
    src: 'imagesweb (10).webp',
  },
  {
    color: '#d7d4cf',
    src: 'imagesweb (3).webp',
  },
  {
    color: '#e1dad6',
    src: 'image (4).webp',
  },
];

const SlidingImages = ({ isMobile }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 50] : [0, 150]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -50] : [0, -150]
  );

  return (
    <div
      ref={container}
      className='flex seccion1 h-full overflow-hidden  flex-col gap-[1vw] relative bg-black z-10'
    >
      <motion.div
        style={{ x: x1 }}
        className='flex relative gap-[1vw] lg:w-[120w] left-[-5vw] '
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className='w-1/4 h-[40vw] lg:h-[20vw] flex items-center justify-center'
            >
              <div className='relative w-full h-full'>
                <img
                  alt={'image'}
                  src={`./images/${project.src}`}
                  className='object-cover h-full lg:h-auto lg:-my-20 '
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className='flex relative gap-[1vw] lg:w-[120w] right-[-5vw] '
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className='w-1/4 h-[40vw] lg:h-[20vw] flex items-center justify-center'
            >
              <div
                key={index}
                className='relative w-full h-full'
              >
                <img
                  alt={'image'}
                  src={`./images/${project.src}`}
                  className='object-cover h-full lg:h-auto '
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingImages;
