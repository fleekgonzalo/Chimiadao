'use client';
import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
const Description = ({ isMobile }) => {
  const refs = useRef([]);
  const appear = useRef(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: appear,
    offset: ['start end', 'start start'],
  });
  const appearEnd = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [300, 0]
  );
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);
  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: () => `top+=${window.innerHeight - 1500}`,
        end: `+=${window.innerHeight / 1.5}`,
        scrub: true,
      },
    });
  };
  const phrase =
    'Welcome to ChimiaDAO, a trailblazer in the field of chemistry, championing open-source and decentralized science. ';
  const splitWords = () => {
    let body = [];
    phrase.split(' ').forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(
        <p
          className=' text-[27px] lg:text-[50px] mr-2 mb-6 lg:mb-3'
          key={`word_${index}`}
        >
          {letters}
        </p>
      );
    });
    return body;
  };
  const splitLetters = (word) => {
    let letters = [];
    word.split('').forEach((letter, index) => {
      letters.push(
        <span
          ref={(e) => {
            refs.current.push(e);
          }}
          className='opacity-50'
          key={`letter_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div
      ref={container}
      className=' seccion1 flex  bg-[#06050c] items-center px-[10px] sm:px-5 pt-16 pb-4 lg:p-[128px_128px_64px_128px] justify-start lg:justify-evenly  text-white'
    >
      <motion.div
        ref={appear}
        style={{ translateY: appearEnd }}
        className='w-full flex items-center justify-center h-full  flex-wrap'
      >
        {splitWords()}
      </motion.div>
    </div>
  );
};
export default Description;
