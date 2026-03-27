import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * Custom cursor component:
 * - Small circle follows mouse with spring physics
 * - Expands when hovering interactive elements (links, buttons)
 * - Hidden on mobile/touch devices
 */
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    // Re-scan for interactive elements periodically
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-primary mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
          transition: "width 0.2s, height 0.2s",
          backgroundColor: isHovering ? "hsl(195 100% 40% / 0.1)" : "transparent",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 4,
          height: 4,
          opacity: isHovering ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;
