import * as React from "react";

function PhaseIcon() {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_706_2139)">
        <circle cx={24} cy={24} r={8} fill="url(#paint0_linear_706_2139)" />
      </g>
      <defs>
        <filter
          id="filter0_dd_706_2139"
          x={0}
          y={0}
          width={48}
          height={48}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={8} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.984314 0 0 0 0 0.286275 0 0 0 0 0.117647 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_706_2139"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={6} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.984314 0 0 0 0 0.286275 0 0 0 0 0.117647 0 0 0 1 0" />
          <feBlend
            in2="effect1_dropShadow_706_2139"
            result="effect2_dropShadow_706_2139"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_706_2139"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_706_2139"
          x1={19}
          y1={18}
          x2={30}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB491E" />
          <stop offset={1} stopColor="#FBCA1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PhaseIcon;
