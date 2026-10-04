import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useScrollReveal';

const FAST_TRANSITION = {
  duration: 0.35,
  ease: 'easeOut',
};

const FAST_Y_OFFSET = 12;

const DEFAULT_VIEWPORT = {
  once: false,
  amount: 0.1,
};

export function ScrollReveal({
  children,
  delay = 0,
  stagger = 0,
  index = 0,
  className = '',
  style = {},
  as: Component = 'div',
  viewport = DEFAULT_VIEWPORT,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className} style={style} {...props}>{children}</Component>;
  }

  const initial = { opacity: 0, y: FAST_Y_OFFSET };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    ...FAST_TRANSITION,
    delay: delay + index * stagger,
  };

  return (
    <motion.div
      as={Component}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      style={style}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealText({
  children,
  delay = 0,
  stagger = 0,
  index = 0,
  className = '',
  style = {},
  as: Component = 'p',
  viewport = DEFAULT_VIEWPORT,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className} style={style} {...props}>{children}</Component>;
  }

  const initial = { opacity: 0, y: FAST_Y_OFFSET };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    ...FAST_TRANSITION,
    delay: delay + index * stagger,
  };

  return (
    <motion.text
      as={Component}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      style={style}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.text>
  );
}

export function StaggerContainer({
  children,
  delay = 0,
  stagger = 30,
  className = '',
  style = {},
  viewport = DEFAULT_VIEWPORT,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const childArray = Array.isArray(children) ? children : [children];

  if (prefersReducedMotion) {
    return <div className={className} style={style} {...props}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={viewport}
      className={className}
      style={style}
      {...props}
    >
      {childArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          initial: { opacity: 0, y: FAST_Y_OFFSET },
          animate: { opacity: 1, y: 0 },
          transition: {
            ...FAST_TRANSITION,
            delay: delay + index * stagger,
          },
          viewport: undefined,
        });
      })}
    </motion.div>
  );
}