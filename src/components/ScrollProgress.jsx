import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.05);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon to-neon-purple z-50 origin-left"
      style={{ scaleX: scrollYProgress, opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    />
  );
};

export default ScrollProgress;
