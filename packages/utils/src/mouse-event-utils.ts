export const getMousePosition = (event: MouseEvent) => {
  return {
    x: event.pageX,
    y: event.pageY,
  };
};
