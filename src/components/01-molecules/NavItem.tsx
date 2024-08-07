import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '../00-atoms/Button';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  items?: { label: string; path: string }[];
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
          <MenuItem
            key={index}
            component={Link}
            to={item.path} 
            onClick={handleClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavItem;
