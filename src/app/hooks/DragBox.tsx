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
    // Decrease the distance by adding an offset (e.g., 10px)
    const offset = 200; // Adjust this value to get the desired distance
    setTransform(
      `translate(${mousePosition.x - offset}px, ${mousePosition.y - offset}px)`
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
        zIndex: "10", // Use appropriate z-index
          borderRadius: "100%",
        display: "flex",
          justifyContent: "center",
        alignItems: "center",
      }}
      >
          Drag
      </div>
  );
};

export default DragBox;
