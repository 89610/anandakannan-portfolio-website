import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useScrollReveal';

export function ScrollReveal({
  children,
  delay = 0,
  stagger = 0,
  index = 0,
  className = '',
  style = {},
  as: Component = 'div',
  viewport = { once: true, margin: '0px' },
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className} style={style} {...props}>{children}</Component>;
  }

  const initial = { opacity: 0, y: 25 };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    duration: 0.7,
    ease: [0.25, 0.46, 0.45, 0.94],
    delay: delay + index * stagger
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
  viewport = { once: true, margin: '0px' },
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className} style={style} {...props}>{children}</Component>;
  }

  const initial = { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };
  const transition = {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
    delay: delay + index * stagger
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
  stagger = 100,
  className = '',
  style = {},
  viewport = { once: true, margin: '0px' },
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
          initial: { opacity: 0, y: 25 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: delay + index * stagger
          },
          viewport: undefined
        });
      })}
    </motion.div>
  );
}