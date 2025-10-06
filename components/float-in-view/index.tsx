import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
};

const init = { opacity: 0, y: 20 };
const to = { opacity: 1, y: 0 };
const transition = { duration: 0.3 };

const FloatInView: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={init}
      animate={isInView ? to : init}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FloatInView;
