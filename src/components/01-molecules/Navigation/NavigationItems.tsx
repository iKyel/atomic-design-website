import React from "react";
import MenuLink from "../../00-atoms/MenuLink";

interface NavItemProps {
  href: string;
  label: string;
}

const NavigationItems: React.FC<NavItemProps> = ({ href, label }) => (
  <li className="header_menu-list-item">
    <MenuLink href={href}>{label}</MenuLink>
  </li>
);

export default NavigationItems;