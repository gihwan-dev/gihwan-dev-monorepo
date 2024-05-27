export const getMousePosition = (event: MouseEvent) => {
  return {
    x: event.clientX,
    y: event.clientY,
  };
};
