import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'inherit';
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, variant = 'text', color = 'inherit', className }) => (
  <Button
    onClick={onClick}
    variant={variant}
    color={color}
    className={className}
  >
    {children}
  </Button>
);

export default CustomButton;
