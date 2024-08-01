import React from "react";
import NavList from "./NavigationList";
import NavigaionItems from "../../../data/NavigationItems.json"

const NavigationLinks = () => {

  return (
    <div>
      <nav className="header_menu">
        <NavList items={NavigaionItems} />
      </nav>
    </div>
  );
};

export default NavigationLinks;