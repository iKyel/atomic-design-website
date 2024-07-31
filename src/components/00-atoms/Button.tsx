import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, variant = 'contained', color = 'primary', disabled = false }) => (
  <Button
    onClick={onClick}
    variant={variant}
    color={color}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CustomButton;
