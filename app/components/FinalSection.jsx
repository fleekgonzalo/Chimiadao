import Image from 'next/image';
import { useRef } from 'react';
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';
const FinalSection = ({ isMobile }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [-500, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 90]
  );
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className='text-white seccion1 flex flex-col  items-center justify-center bg-[#06050c] relative'
    >
      <div className=' pt-[120px] lg:pt-[200px]  w-full max-w-[1800px] bg-[#06050c]'>
        <div className='border-b mx-[10px] sm:mx-[11%] lg:mt-[100px] border-[1px_solid_#888686] lg:pb-[100px] p-5 lg:mx-[200px] relative'>
          <span className='flex items-center gap-3 lg:gap-6 lg:p-3'>
            <div className='min-h-[40px] min-w-[40px] lg:w-20 lg:h-20 relative rounded-full lg:rounded-[50%]  bg-[#38f2c2] '></div>
            <h2 className='text-xs lg:text-lg'>
              We’re excited to connect with like-minded
              individuals and organizations.
            </h2>
          </span>
          <h2 className='lg:text-[2vw] my-10 mx-3 lg:mx-0'>
            {' '}
            Whether you’re an academic researcher, a small
            or medium-sized enterprise in the chemistry
            field, or just a curious enthusiast, we welcome
            your questions and opportunities for
            collaboration.
          </h2>
          <motion.div
            style={{ x }}
            className='absolute posicionamiento'
          >
            <button className='w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] bg-[#ffa339] rounded-[50%] absolute flex items-center justify-center '>
              <p className='m-0 text-sm lg:text-lg text-black relative font-bold z-10'>
                Get in touch
              </p>
            </button>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width='9'
            height='9'
            viewBox='0 0 9 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute hidden lg:block lg:top-[30%] lg:left-[100%]'
          >
            <path
              d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
              fill='white'
            />
          </motion.svg>
        </div>
        <div className='flex flex-col lg:flex-row mx-[10px]  my-20 sm:mx-[11%] lg:gap-[20px] lg:m-[50px_200px_0_200px]'>
          <p>matiasgigena@outlook.es</p>
          <p>+31 6 27 84 74 30</p>
        </div>
        <div className='flex justify-between mt-[200px] p-[20px]'>
          <span className='flex flex-col lg:flex-row gap-3 items-start justify-center'>
            <h3>Version</h3>
            <p>2024 © Edition</p>
          </span>
          <div className='flex flex-row gap-3 items-end lg:items-center lg:gap-5'>
            <p>Dribbble</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FinalSection;
