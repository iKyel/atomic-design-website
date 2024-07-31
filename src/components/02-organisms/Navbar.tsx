import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavItem from '../01-molecules/NavItem';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Thời sự', items: ['Tin mới', 'Tin nóng'] },
    { label: 'Pháp luật', items: ['Pháp luật 1', 'Pháp luật 2'] },
    { label: 'Kinh tế', items: ['Kinh tế 1', 'Kinh tế 2'] },
    { label: 'Bất động sản', items: ['Bất động sản 1', 'Bất động sản 2'] },
    { label: 'Văn hóa', items: ['Văn hóa 1', 'Văn hóa 2'] },
    { label: 'Quốc tế', items: ['Quốc tế 1', 'Quốc tế 2'] },
    { label: 'Doanh nghiệp', items: ['Doanh nghiệp 1', 'Doanh nghiệp 2'] },
    { label: 'Video', items: ['Video 1', 'Video 2'] },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} items={item.items} />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
