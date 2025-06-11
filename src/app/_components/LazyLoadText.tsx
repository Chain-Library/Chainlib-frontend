import { useState, useEffect, useRef } from "react";

interface LazyLoadTextProps {
  text: string;
}

export default function LazyLoadText({ text }: LazyLoadTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={textRef} className="min-h-[100px]">
      {isVisible ? (
        <p className="text-gray-700 leading-relaxed">{text}</p>
      ) : (
        <p className="text-gray-400" aria-live="polite">
          Loading review...
        </p>
      )}
    </div>
  );
}