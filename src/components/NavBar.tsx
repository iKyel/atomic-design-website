/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
            <div className="container navbar_inner">
                <ul className="navbar_menu-list">
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Thời sự
                        </a>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Pháp luật <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Pháp luật 1
                                </a>

                            </li>
                            <li>
                                <a href="#">
                                    Pháp luật 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Pháp luật 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Kinh tế <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Kinh tế 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Kinh tế 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Kinh tế 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Bất động sản <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Bất động sản 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bất động sản 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bất động sản 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Văn hoá <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Văn hóa 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Văn hóa 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Văn hóa 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Quốc tế <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Quốc tế 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Quốc tế 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Quốc tế 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Doanh nghiệp <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Doanh nghiệp 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Doanh nghiệp 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Doanh nghiệp 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_menu-list-item">
                        <a href="#">
                            Video <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="navbar_menu-list-item-subItem">
                            <li>
                                <a href="#">
                                    Video 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Video 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Video 3
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="menu-mobile">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
