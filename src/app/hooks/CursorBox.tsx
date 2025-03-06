"use client";
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
      // Calculate transform to center the cursor
      const offsetX = 140; // Half of the width of the cursor (280px / 2)
      const offsetY = 140; // Half of the height of the cursor (280px / 2)
      setTransform(
        `translate(${mousePosition.x - offsetX}px, ${
          mousePosition.y - offsetY
        }px)`
      );
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
          "radial-gradient(circle, #373737 40%, #010101 80%, #555555 100%)", // Radial gradient for dark center and light edge
        pointerEvents: "none",
        transform: transform, // Apply transform here
        transition: prefersReducedMotion ? "none" : "transform 0.1s ease-out",
        zIndex: "-10", // Use appropriate z-index
        borderRadius: "100%", // Make it circular
      }}
    />
  );
};

export default CursorBox;
