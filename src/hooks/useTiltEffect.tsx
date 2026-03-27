import { useRef, useState } from "react";

/**
 * Card tilt effect following cursor position
 * Returns ref and style to apply to the card element
 */
export function useTiltEffect(maxTilt = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" });
  };

  return { ref, style, handleMouseMove, handleMouseLeave };
}
