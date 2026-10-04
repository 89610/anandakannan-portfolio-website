const FAST_Y_OFFSET = 12;

const DEFAULT_VIEWPORT = {
  once: false,
  amount: 0.1,
};

export function getRevealProps({
  delay = 0,
  stagger = 0,
  index = 0,
  yOffset = FAST_Y_OFFSET,
  duration = 0.35,
  viewport = DEFAULT_VIEWPORT,
  prefersReducedMotion = false,
} = {}) {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
      viewport: undefined,
    };
  }

  return {
    initial: { opacity: 0, y: yOffset },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: {
      duration,
      ease: 'easeOut',
      delay: delay + index * stagger,
    },
  };
}

export function getStaggerProps({
  delay = 0,
  stagger = 30,
  yOffset = FAST_Y_OFFSET,
  duration = 0.35,
  prefersReducedMotion = false,
} = {}) {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
      viewport: undefined,
    };
  }

  return (index) => ({
    initial: { opacity: 0, y: yOffset },
    whileInView: { opacity: 1, y: 0 },
    viewport: DEFAULT_VIEWPORT,
    transition: {
      duration,
      ease: 'easeOut',
      delay: delay + index * stagger,
    },
  });
}