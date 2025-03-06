"use client";
import React from "react";
import useMousePosition from "./useMousePosition";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DragBox = () => {
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [transform, setTransform] = React.useState("");

  // Only apply transform on the client side
React.useEffect(() => {
  if (!prefersReducedMotion && mousePosition.x && mousePosition.y) {
    setTransform(
      `translate(${mousePosition.x - 170}px, ${mousePosition.y - 170}px)`
    );
  }
}, [mousePosition, prefersReducedMotion]);


  return (
    <div
      className="md:block hidden"
      style={{
        position: "absolute",
        width: "80px",
          height: "80px",
        background:'#ffffff3d',
        pointerEvents: "none",
        transform: transform, // Apply transform here
        transition: prefersReducedMotion ? "none" : "transform 0.1s ease-out",
        zIndex: "100", // Use appropriate z-index
          borderRadius: "100%",
        display: "flex",
          justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
        border: "1.5px solid rgba(255, 255, 255, 0.16)"
      }}
      >
          DRAG
      </div>
  );
};

export default DragBox;
