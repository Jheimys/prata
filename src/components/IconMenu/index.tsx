// src/components/atoms/IconMenu.tsx
import { FiMenu } from 'react-icons/fi';

type IconMenuProps = {
  className?: string;
};

const IconMenu = ({ className }: IconMenuProps) => <FiMenu size={28} className={className} />;

export default IconMenu;

