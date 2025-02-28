import { IconSvgProps } from './types';

const MenuCloseIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="19.25" stroke="white" strokeWidth="1.5" />
            <path d="M26 14L14 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 14L26 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};
export default MenuCloseIcon;