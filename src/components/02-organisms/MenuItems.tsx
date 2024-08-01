/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SocialIcons from "../01-molecules/SocialIcon";
import NavigationLinks from "../01-molecules/Navigation/NavigationLinks";

const MenuItems: React.FC = () => (
  <div className="header">
    <div className="container header_inner">
      <SocialIcons />
      <NavigationLinks />
    </div>
  </div>
);

export default MenuItems;
