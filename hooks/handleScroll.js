const { useEffect, useState } = require('react');

const useSection = () => {
  const [section, setSection] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const sections = document.querySelectorAll('.seccion1');
    let currentSection = 0;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom =
        sectionTop + section.offsetHeight;

      if (
        currentScrollY >= sectionTop &&
        currentScrollY < sectionBottom
      ) {
        currentSection = index;
      }
    });

    setSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return section;
};

export default useSection;
