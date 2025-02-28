import { IconSvgProps } from './types';

const MenuIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="15.25" stroke="white" strokeWidth="1.5" />
            <path d="M9.33337 12.6667H22.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33337 19.3333H22.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};
export default MenuIcon;