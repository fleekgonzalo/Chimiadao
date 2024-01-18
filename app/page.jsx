'use client';
import AboutUs from './components/AboutUs';
import Hero from './components/hero';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Contact from './components/Contact';
import Description from './components/Description';
import Sliding from './components/SlidingImages';
import useDimension from '@/hooks/useDimension';
import FinalSection from './components/FinalSection';

const App = () => {
  const { width } = useDimension();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  return (
    <div className='min-h-screen w-full  bg-[#06050c]'>
      <Hero />
      <Description isMobile={isMobile} />
      <AboutUs isMobile={isMobile} />
      <Contact isMobile={isMobile} />
      <Sliding isMobile={isMobile} />
      <FinalSection isMobile={isMobile} />
    </div>
  );
};
export default App;
