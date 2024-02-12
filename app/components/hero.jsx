const Hero = () => {
  return (
    <section
      id='Home'
      className='seccion1 h-[90vh] lg:h-screen  w-full flex gap-10 relative items-start lg:items-end flex-col justify-end'
    >
      <div className='absolute top-0 left-0 z-0 w-full h-full overflow-hidden'>
        <video
          src='/images/HeroOriginal.mp4'
          autoPlay
          muted
          playsInline
          loop
          className='relative top-[50%] left-[50%] object-cover w-full h-full  translate-x-[-50%] translate-y-[-50%]'
        ></video>
      </div>
      {/* <div className='text-white flex flex-col gap-2 p-5 lg:p-20  z-10 absolute'>
        <div className='overflow-hidden '>
          <p className='text-2xl lg:text-5xl overflow-hidden lg:h-16 animacionInferiorTexto font-extralight '>
            Learn Everything
          </p>
        </div>
        <div className='overflow-hidden  '>
          <p className='text-2xl lg:text-5xl overflow-hidden lg:h-16 animacionInferiorTexto2 font-extralight'>
            Learn Everywhere
          </p>
        </div>
        <div className='overflow-hidden '>
          <p className='text-2xl lg:text-5xl overflow-hidden lg:h-16 animacionInferiorTexto3 font-extralight'>
            Learn Chemistry
          </p>
        </div>
      </div> */}
    </section>
  );
};
export default Hero;
