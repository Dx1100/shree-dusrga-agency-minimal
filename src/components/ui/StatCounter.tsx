import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1800,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const decimalPlaces = Number.isInteger(value)
    ? 0
    : (value.toString().split('.')[1]?.length ?? 1);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * value;

      if (decimalPlaces > 0) {
        setCount(Number(currentVal.toFixed(decimalPlaces)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, value, durationMs, decimalPlaces]);

  const formattedCount =
    decimalPlaces > 0
      ? count.toFixed(decimalPlaces)
      : count.toLocaleString();

  return (
    <span ref={elementRef} className="font-mono tabular-nums inline-flex items-baseline">
      {prefix && <span>{prefix}</span>}
      <span>{formattedCount}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
