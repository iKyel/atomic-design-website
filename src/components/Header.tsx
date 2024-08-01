/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container header_inner">
        <div className="header_left-icon">
          <a href="index.html" className="header_left-icon-def">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="index.html" className="header_left-icon-gmail">
            <i className="fa-solid fa-envelope "></i>
          </a>
          <a href="index.html" className="header_left-icon-def">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="index.html" className="header_left-icon-def">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <nav className="header_menu">
          <ul className="header_menu-list">
            <li className="header_menu-list-item">
              <a href="#" className="header_menu-list-item-link">
                Trang Chủ
              </a>
            </li>
            <li className="header_menu-list-item">
              <a href="#" className="header_menu-list-item-link">
                Giới Thiệu
              </a>
            </li>
            <li className="header_menu-list-item">
              <a href="#" className="header_menu-list-item-link">
                Liên Hệ
              </a>
            </li>
            <li className="header_menu-list-item">
              <a href="#" className="header_menu-list-item-link">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
