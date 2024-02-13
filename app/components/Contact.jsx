import { useRef } from 'react';
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

const Contact = ({ isMobile }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -250]
  );

  return (
    <motion.section
      style={{ y: sm }}
      ref={container}
      id='Contact'
      className='seccion1 z-40 mt-10 lg:mt-0 px-[10px] sm:px-[11%] py-10 lg:py-32 lg:px-8 flex gap-10 relative items-center flex-col justify-center'
    >
      <div className='card lg:card-side w-full lg:w-[80%] shadow-xl'>
        <figure className='min-w-[300px]'>
          <img src='/images/image (5).webp' alt='Album' />
        </figure>
        <div className='card-body px-0 py-8 lg:p-[2rem] text-white '>
          <h2 className='card-title text-lg lg:text-2xl'>
            Services & Technological Advancements
          </h2>
          <p className=''>
            At ChimiaDAO, our services and technological
            prowess go hand in hand. We offer an array of
            advanced chemical synthesis and analysis
            services, backed by our commitment to
            ‘Proof-of-Synthesis’ – a revolutionary
            technology streamlining molecular synthesis
            processes. Our approach integrates the precision
            of blockchain technology, enhancing transparency
            and traceability in every project. This unique
            blend of services and technology ensures
            top-notch quality and reproducibility in
            chemical synthesis, positioning ChimiaDAO at the
            forefront of decentralized scientific research.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
