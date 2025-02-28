import * as React from "react";

function OverLayEffect() {
  return (
    <svg
      width={1339}
      height={641}
      viewBox="0 0 1339 641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_944_2651)">
        <path
          d="M454.551 160L160 305.787l716.195 174.802L1179 349.664 454.551 160z"
          fill="url(#paint0_linear_944_2651)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_944_2651"
          x={0}
          y={0}
          width={1339}
          height={640.589}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={80}
            result="effect1_foregroundBlur_944_2651"
          />
        </filter>
        <linearGradient
          id="paint0_linear_944_2651"
          x1={957.475}
          y1={462.469}
          x2={545.627}
          y2={125.844}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB491E" stopOpacity={0.64} />
          <stop offset={0.5} stopColor="#000" stopOpacity={1} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default OverLayEffect;
