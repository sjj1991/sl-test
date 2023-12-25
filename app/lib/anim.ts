export const baseTransition = { duration: 1.2, type: "spring", bounce: 0 };

export const sectionVariants = {
  hidden: { opacity: 0, y: "100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...baseTransition, delay: 0.0 },
  },
};

export const bottomInContainer = (delay?: number, stagger?: number) => ({
  hidden: { opacity: 0, x: "80px", y: "80px", scale: 1.1 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: stagger ?? 0.15,
      delayChildren: delay ?? 0.0,
      ...baseTransition,
    },
  },
});

export const bottomIn = (delay?: number) => {
  const args = delay ? { delay: delay } : {};
  return {
    hidden: { opacity: 0, x: "80px", y: "80px", scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        ...baseTransition,
        ...args,
      },
    },
  };
};
