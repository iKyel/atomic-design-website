/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container banner_inner">
        <div className="title">thời sự</div>
        <ul className="menu">
          <li>
            <a href="#">
              Trang Chủ<span>/</span>{" "}
            </a>
            <a href="#">
              Thời Sự<span>/</span>{" "}
            </a>
            <a href="#">Mục 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
