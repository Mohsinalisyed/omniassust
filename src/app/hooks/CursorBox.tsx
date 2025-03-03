'use client'
import React from "react";
import useMousePosition from "./useMousePosition";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const CursorBox = () => {
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [transform, setTransform] = React.useState("");

  // Only apply transform on the client side
  React.useEffect(() => {
    if (!prefersReducedMotion && mousePosition.x && mousePosition.y) {
      setTransform(`translate(${mousePosition.x}px, ${mousePosition.y}px)`);
    }
  }, [mousePosition, prefersReducedMotion]);

  return (
    <div
      className="md:block hidden"
      style={{
        position: "absolute",
        width: "280px",
        height: "280px",
        backgroundImage:
          "radial-gradient(circle, #373737 40%, #555555 80%, #555555 100%)", // Radial gradient for dark center and light edge,
        pointerEvents: "none",
        transform: transform, // Apply transform here
        transition: prefersReducedMotion ? "none" : "transform 0.1s ease-out",
        zIndex: "-1", // Use appropriate z-index
        borderRadius:"100%"
      }}
    />
  );
};

export default CursorBox;
