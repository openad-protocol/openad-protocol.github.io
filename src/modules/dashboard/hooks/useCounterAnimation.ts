import { useState, useEffect } from 'react';

function useCounterAnimation(targetValue: number, duration = 1200) {
  const [currentValue, setCurrentValue] = useState(0);
  const [animationFrameId, setAnimationFrameId] = useState(0);

  useEffect(() => {
    const startValue = 0;
    const endValue = targetValue;
    const startTime = performance.now();

    const updateCounter = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const current = Math.round(
        startValue + progress * (endValue - startValue),
      );
      setCurrentValue(current);

      if (progress < 1) {
        setAnimationFrameId(requestAnimationFrame(updateCounter));
      }
    };

    setAnimationFrameId(requestAnimationFrame(updateCounter));

    return () => {
      if (animationFrameId > 0) {
        cancelAnimationFrame(animationFrameId);
        setAnimationFrameId(0);
      }
    };
  }, [targetValue]);

  return { currentValue };
}

export default useCounterAnimation;
