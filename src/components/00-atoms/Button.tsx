import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'inherit';
  className?: string;
  sx?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, variant = 'text', color = 'inherit', className, sx }) => (
  <Button
    onClick={onClick}
    variant={variant}
    color={color}
    className={className}
    sx={{ padding: '16px', ...sx }}
  >
    {children}
  </Button>
);

export default CustomButton;