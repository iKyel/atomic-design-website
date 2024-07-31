import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';

interface CustomIconProps extends SvgIconProps {
  name: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, ...props }) => (
  <Icon {...props} component="svg">{name}</Icon>
);

export default CustomIcon;