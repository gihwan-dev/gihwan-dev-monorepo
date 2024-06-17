import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const windowResizeHandler: React.UIEventHandler<Window> = (e) => {
    setWidth(e.currentTarget.innerWidth);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps -- lodash debounce handler
  const debouncedWindowResizeHandler = useCallback(
    _.debounce(windowResizeHandler),
    [],
  );

  useEffect(() => {
    if (width === 0) {
      setWidth(window.innerWidth);
    }

    // @ts-expect-error -- 윈도우 리사이즈 핸들러 타입 에러
    window.addEventListener('resize', debouncedWindowResizeHandler);

    return () => {
      // @ts-expect-error -- 윈도우 리사이즈 핸들러 타입 에러
      window.removeEventListener('resize', debouncedWindowResizeHandler);
    };
  }, [debouncedWindowResizeHandler]);

  const isMobile = () => {
    return width <= 640;
  };

  return {
    width,
    isMobile,
  };
}
