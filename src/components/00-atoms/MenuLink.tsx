import React from "react";

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, children }) => (
  <a href={href} className="header_menu-list-item-link">
    {children}
  </a>
);

export default MenuLink;