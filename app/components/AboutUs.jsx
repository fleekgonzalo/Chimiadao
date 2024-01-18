import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import { useRef } from 'react';

const AboutUs = ({ isMobile }) => {
  const container = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [200, -200]
  );
  const opacity = useTransform(
    scrollYProgress2,
    [0, 1],
    isMobile ? [0, 0] : [200, -200]
  );
  const strength = useTransform(
    scrollYProgress3,
    [0, 1],
    isMobile ? [0, 0] : [360, -240]
  );
  return (
    <section
      id='About'
      className='seccion1 lg:h-[60vh] px-[10px] mt-24 lg:mt-0 sm:px-[10%] lg:p-8 gap-5 lg:gap-20  w-full flex flex-col lg:flex-row items-center justify-center '
    >
      <motion.article
        ref={container}
        style={{ y: scale }}
        className='lg:h-[450px]  lg:w-[450px]  '
      >
        <div className='h-full py-5 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/imagesweb (2).webp'
            alt='img'
            className=' object-cover max-h-[300px] lg:max-h-[200px] rounded-lg w-full '
          />
          <div className='flex lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[white] font-semibold'>
              The Mission of ChimiaDAO
            </p>
            <span className='text-[white]'>
              ChimiaDAO is more than a decentralized
              autonomous organization; it’s a movement.
              Rooted in our mission to revolutionize
              chemistry, we’re committed to fostering a
              robust global community aligned with the
              principles of open science.
            </span>
          </div>
        </div>
      </motion.article>
      <motion.article
        ref={container3}
        style={{ y: strength }}
        className='lg:h-[450px]  lg:w-[450px]  '
      >
        <div className='h-full py-5 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/imagesweb.webp'
            alt='img'
            className=' object-cover max-h-[300px] lg:max-h-[200px] rounded-lg w-full'
          />
          <div className='flex  lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[white] font-semibold'>
              Strategic Partnerships
            </p>
            <span className='text-[white]'>
              Our journey with strategic partners like XChem
              reflects our dedication to innovation and
              community-driven research. We envision a
              future where our community actively directs
              research priorities, ensuring our endeavors
              are relevant to real-world needs.
            </span>
          </div>
        </div>
      </motion.article>
      <motion.article
        ref={container2}
        style={{ y: opacity }}
        className='lg:h-[450px]  lg:w-[450px]  '
      >
        <div className='h-full py-5 w-full flex flex-col justify-center gap-6 items-center'>
          <img
            src='./images/imagesweb (4).webp'
            alt='img'
            className=' object-cover max-h-[300px] lg:max-h-[200px] rounded-lg w-full'
          />
          <div className='flex lg:h-[150px] flex-col gap-3'>
            <p className='text-2xl text-[white] font-semibold'>
              Community Engagement
            </p>
            <span className='text-[white]'>
              Through our engaging newsletters, podcasts,
              conferences, and bi-weekly community calls,
              we’re nurturing a vibrant ecosystem of
              chemists, scholars, and enthusiasts.
            </span>
          </div>
        </div>
      </motion.article>
    </section>
  );
};
export default AboutUs;
