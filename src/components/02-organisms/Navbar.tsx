import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../01-molecules/NavItem";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import navItems from '../../data/Nav.json'; // Import the JSON file

const Navbar: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar sx={{ background: theme.palette["primary"].main }}>
        <Box sx={{ maxWidth: '1170px', width: '100%', margin: '0 auto', display: 'flex' }}>
          {navItems.map((item, index) => (
            <NavItem key={index} label={item.label} items={item.items} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;