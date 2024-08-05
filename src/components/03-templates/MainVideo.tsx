/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const MainVideo = () => {
  return (
    <>
      <div className="main_video">
        <div className="container video">
          <div className="title">
            <div className="left">
              <p>VIDEO NỔI BẬT</p>
            </div>
            <div className="right">
              <li className="icon">
                <a href="#">
                  <i className="fa-icon fa-solid fa-angle-left">
                    <ChevronLeftIcon />
                  </i>
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <i className="fa-icon fa-solid fa-angle-right">
                    <ChevronRightIcon />
                  </i>
                </a>
              </li>
            </div>
          </div>
          <div className="line">
            <div className="red"></div>
            <div className="gray"></div>
          </div>
          <div className="content">
            <div className="content_left">
              <div className="photo">
                <a href="#">
                  <img src="" />
                </a>
              </div>
              <div className="text">
                <div className="title">
                  <a href="#">
                    <h3>
                      Thủ tướng New Zealand tặng huy hiệu APEC làm quà Giáng
                      sinh
                    </h3>
                  </a>
                </div>
                <div className="date gray-content">
                  <i className="fa-regular fa-clock"></i>
                  <p className="gray-content">Thứ 4, 27/12/2017</p>
                </div>
                <div className="cont">
                  <p>
                    Về vẻ bề ngoài, chè Tân Cương có màu xanh đen, xuăn chặt,
                    cánh chè gọn nhỏ, trên bề mặt cánh chè có nhiều phấn trắng.
                    Nước chè rất trong, xanh, vàng nhạt, sánh. Nước chè có vị
                    chát ngọt, dễ dịu, hài hòa, có hậu, gần như không cảm nhận
                    có vị đắng. Mùi chè thơm ngọt, dễ chịu
                  </p>
                </div>
              </div>
            </div>

            <div className="content_right">
              <div className="item">
                <div className="photo">
                  <a href="#">
                    <img src="" />
                  </a>
                </div>
                <div className="title">
                  <h3>
                    Nga biên chế 3 radar có thể phát hiện tên lửa từ 10.000 km
                    <i className="fa-solid fa-video">
                      <VideocamIcon />
                    </i>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="photo">
                  <a href="#">
                    <img src="" />
                  </a>
                </div>
                <div className="title">
                  <h3>
                    Thượng viện Mỹ thông qua dự luật cải cách thuế lớn nhất 30
                    năm
                    <i className="fa-solid fa-video">
                      <VideocamIcon />
                    </i>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="photo">
                  <a href="#">
                    <img src="" />
                  </a>
                </div>
                <div className="title">
                  <h3>
                    Chiến dịch dồn ép công tố viên đặc biệt Mueller của Trump
                    <i className="fa-solid fa-video">
                      <VideocamIcon />
                    </i>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainVideo;
