import React from 'react';
import IconButton from '@mui/material/IconButton';

interface CustomIconButtonProps {
  icon: React.ReactElement;
  href: string;
  className?: string;
}

const Icon: React.FC<CustomIconButtonProps> = ({ icon, href, className }) => (
  <IconButton component="a" href={href} className={className}>
    {icon}
  </IconButton>
);

export default Icon;
