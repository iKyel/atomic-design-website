import React from 'react';
import TextField from '@mui/material/TextField';

interface CustomInputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type = 'text', value, onChange, placeholder, className }) => (
  <TextField
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
    variant="outlined"
    fullWidth
  />
);

export default CustomInput;
