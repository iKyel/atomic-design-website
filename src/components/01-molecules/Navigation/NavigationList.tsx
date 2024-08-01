import React from "react";
import NavigationItems from "./NavigationItems";

interface NavListProps {
  items: { href: string; label: string }[];
}

const NavList: React.FC<NavListProps> = ({ items }) => (
  <ul className="header_menu-list">
    {items.map((item, index) => (
      <NavigationItems key={index} href={item.href} label={item.label} />
    ))}
  </ul>
);

export default NavList;