export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 0;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
