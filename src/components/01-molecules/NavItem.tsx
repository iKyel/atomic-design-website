import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '../00-atoms/Button';

interface NavItemProps {
  label: string;
  items?: string[];
}

const NavItem: React.FC<NavItemProps> = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton onClick={handleClick} color="inherit">
        {label}
      </CustomButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items?.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavItem;
