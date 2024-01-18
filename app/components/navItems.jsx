import { motion } from 'framer-motion';

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.35,
      opacity: { duration: 0.35 },
      ease: [0.235, 0.61, 0.355, 0.1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75 + i * 0.1,
      duration: 0.5,
      opacity: { duration: 0.35 },
      ease: [0.235, 0.61, 0.355, 0.1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const NavItems = () => {
  const items = [
    {
      title: 'Home',
      href: '#Home',
    },
    {
      title: 'About Us',
      href: '#About',
    },
    {
      title: 'Our Mission',
      href: '#Approach',
    },
    {
      title: 'Services',
      href: '#Resources',
    },
    {
      title: 'Contact',
      href: '#Contact',
    },
  ];
  const socials = [
    {
      name: 'Instagram',
      link: '#Home',
    },
    {
      name: 'Linkedin',
      link: '#About',
    },
    {
      name: 'Facebook',
      link: '#Approach',
    },
    {
      name: 'Twitter',
      link: '#Resources',
    },
  ];
  return (
    <div className='h-full p-[80px_40px_50px_40px] box-border flex justify-between flex-col'>
      <div className='text-black text-[30px] lg:text-[46px] flex gap-[10px] flex-col'>
        {items.map((item, index) => {
          return (
            <div key={index} className='perspective'>
              <motion.div
                custom={index}
                variants={perspective}
                animate='enter'
                exit='exit'
                initial='initial'
              >
                <a href={item.href}>{item.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-wrap'>
        {socials.map((social, index) => {
          return (
            <motion.a
              key={`f_${index}`}
              className='w-1/2 text-black [text-decoration:_none]'
              variants={slideIn}
              custom={index}
              animate='enter'
              exit='exit'
              initial='initial'
              href={social.link}
            >
              {social.name}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
export default NavItems;
