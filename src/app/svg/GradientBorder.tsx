import * as React from "react";

function GradientBorder() {
  return (
    <svg
      width={125}
      height={36}
      viewBox="0 0 125 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.5 13C.5 6.096 6.096.5 13 .5h99c6.904 0 12.5 5.596 12.5 12.5s-5.596 12.5-12.5 12.5H13C6.096 25.5.5 19.904.5 13z"
        stroke="url(#paint0_linear_679_452)"
        strokeOpacity={0.64}
      />
      <defs>
        <linearGradient
          id="paint0_linear_679_452"
          x1={87}
          y1={15.5}
          x2={92}
          y2={-2.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientBorder;
