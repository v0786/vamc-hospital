import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.35,
  direction = 'up',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialY = () => {
    if (direction === 'up') return 12;
    if (direction === 'down') return -12;
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY() }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const MotionButton: React.FC<MotionButtonProps> = ({ children, className = '', ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
