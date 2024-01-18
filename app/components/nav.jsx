'use client';
import Button from './ButtonGrad';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavItems from './navItems';
import useDimension from '@/hooks/useDimension';
import useSection from '@/hooks/handleScroll';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
});

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useDimension();
  const section = useSection();

  const sizes = {
    widthMobile: 280,
    widthDesktop: 480,
    heightMobile: 450,
    heightDesktop: 600,
  };
  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  const variants = {
    open: {
      width: isMobile
        ? sizes.widthMobile
        : sizes.widthDesktop,
      height: isMobile
        ? sizes.heightMobile
        : sizes.heightDesktop,
      top: '-25px',
      right: '-25px',
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      width: 100,
      height: 40,
      top: '0px',
      right: '0px',
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className='w-full z-50 absolute h-full justify-center '>
      <nav className=' h-full flex justify-center items-center'>
        <div className='text-[#303036] flex items-center justify-center gap-3 lg:gap-4'>
          {section !== 0 ? (
            <div className=' w-full transition-opacity flex duration-300 gap-3 sm:gap-4 opacity-1 backdrop-blur-xl fixed top-0 bg-[#000000b3] lg:left-0 py-8   '>
              <img
                src='./images/ChimiaDAO Logo - PNG - By Dcmat copy.webp'
                alt='logo'
                className='h-10 w-10 sm:h-12 sm:w-12 ml-[10px] sm:ml-[11%]'
              />
              <button
                className={`text-white font-normal  text-2xl  lg:text-3xl ${poppins.className}`}
                onClick={handleClick}
              >
                Chimia
                <span
                  className={`uppercase font-medium ${poppins.className}`}
                >
                  dao
                </span>
              </button>
            </div>
          ) : (
            <div className='w-full transition-opacity flex duration-300 gap-3 sm:gap-4 opacity-0  backdrop-blur-xl fixed top-0 bg-[#000000b3] lg:left-0 py-8 '>
              <img
                src='./images/ChimiaDAO Logo - PNG - By Dcmat copy.webp'
                alt='logo'
                className='h-10 w-10 lg:h-12 lg:w-12 ml-[11%]'
              />
              <button
                className={`text-white font-normal  text-2xl  lg:text-3xl ${poppins.className}`}
                onClick={handleClick}
              >
                Chimia
                <span
                  className={`uppercase font-medium ${poppins.className}`}
                >
                  dao
                </span>
              </button>
            </div>
          )}
          <img
            src='./images/Shade.webp'
            alt='sombra'
            className='min-h-[100vh] w-full object-cover'
          />
          <img
            src='./images/Logo-ChimiaDAO---Shade.webp'
            alt=''
            className='min-h-[100vh] w-full object-cover absolute animacionCirculo'
          />
          <p className=' rounded-full bg-white animacionCirculo text-[#000] border px-10 py-3  text-xl lg:text-2xl absolute top-[57%] cursor-pointer'>
            Explore{' '}
          </p>
        </div>
        {section !== 0 ? (
          <div className='fixed transition opacity-1 duration-300 top-[33px] right-[10px] sm:top-[40px] sm:right-[11%]'>
            <motion.div
              variants={variants}
              animate={isActive ? 'open' : 'closed'}
              initial='closed'
              className='w-[280px] lg:w-[480px] lg:h-[600px] relative bg-[#f9fafa] rounded-[25px]'
            >
              <AnimatePresence>
                {isActive && <NavItems />}
              </AnimatePresence>
            </motion.div>
            <Button
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        ) : (
          <div className='fixed transition opacity-0 duration-300 top-[33px] right-[10px]  sm:top-[40px] sm:right-[11%]'>
            <motion.div
              variants={variants}
              animate={isActive ? 'open' : 'closed'}
              initial='closed'
              className='w-[280px] lg:w-[480px] lg:h-[600px] relative bg-[#f9fafa] rounded-[25px]'
            >
              <AnimatePresence>
                {isActive && <NavItems />}
              </AnimatePresence>
            </motion.div>
            <Button
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        )}
      </nav>
    </main>
  );
};
export default Nav;
