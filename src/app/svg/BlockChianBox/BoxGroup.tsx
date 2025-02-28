import * as React from "react";

function BoxGroup() {
  return (
    <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
      {/* Top platform */}
      <rect
        x="50"
        y="50"
        width="200"
        height="50"
        rx="10"
        fill="url(#gradientTop)"
        stroke="black"
        strokeWidth="2"
      />
      {/* Middle platform */}
      <rect
        x="70"
        y="120"
        width="160"
        height="50"
        rx="10"
        fill="url(#gradientMiddle)"
        stroke="black"
        strokeWidth="2"
      />
      {/* Bottom platform */}
      <rect
        x="90"
        y="190"
        width="120"
        height="50"
        rx="10"
        fill="url(#gradientBottom)"
        stroke="black"
        strokeWidth="2"
      />
      {/* Gradients for the platforms */}
      <defs>
        <linearGradient id="gradientTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6e7a89" />
          <stop offset="100%" stopColor="#f1f5f8" />
        </linearGradient>
        <linearGradient id="gradientMiddle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b9ea4" />
          <stop offset="100%" stopColor="#cfd9e0" />
        </linearGradient>
        <linearGradient id="gradientBottom" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9faab6" />
          <stop offset="100%" stopColor="#c3cfd9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BoxGroup;
