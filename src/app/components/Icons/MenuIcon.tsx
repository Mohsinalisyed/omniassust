import { IconSvgProps } from './types';

const MenuIcon: React.FC<IconSvgProps> = () => {
    return (
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={40} height={40} rx={8} fill="#fff" fillOpacity={0.12} />
        <rect
          x={0.5}
          y={0.5}
          width={39}
          height={39}
          rx={7.5}
          stroke="#fff"
          strokeOpacity={0.24}
        />
        <g
          clipPath="url(#clip0_936_151)"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 16h16M12 24h16" />
        </g>
        <defs>
          <clipPath id="clip0_936_151">
            <path fill="#fff" transform="translate(8 8)" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
};
export default MenuIcon;