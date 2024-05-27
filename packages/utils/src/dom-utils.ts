export const getElementWidthAndHeight = (element: HTMLElement) => {
  const { width, height } = element.getBoundingClientRect();

  return { width, height };
};

interface AddStyleToDomeNodeProps {
  target: HTMLElement;
  style: Partial<CSSStyleDeclaration>;
}

export const addStyleToDomNode = ({
  target,
  style,
}: AddStyleToDomeNodeProps) => {
  Object.entries(style).forEach(([key, value]) => {
    const styleKey = key as keyof CSSStyleDeclaration;
    // @ts-ignore
    target.style[styleKey] = value;
  });
};
