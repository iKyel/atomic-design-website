/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div>
      <div className="main_about-us">
        <div className="container about-us">
          <div className="left">
            <a href="#">
              <i className="fa-solid fa-house">
                <HomeIcon />
              </i>
              <p>Về trang chủ</p>
            </a>
          </div>
          <div className="right">
            <p className="item">Theo dõi chúng tôi trên:</p>
            <a href="#" className="item">
              <i className="fa-brands fa-facebook">
                <FacebookIcon />
              </i>
            </a>
            <a href="#" className="item">
              <i className="fa-brands fa-twitter">
                <XIcon />
              </i>
            </a>
            <a href="#" className="item">
              <i className="fa-brands fa-google">
                <GoogleIcon />
              </i>
            </a>
            <a href="#" className="item">
              <i className="fa-brands fa-youtube">
                <YouTubeIcon />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="main_footer">
        <div className="container main_footer_content">
          <div className="main_footer_content_left">
            <div className="logo">{/* <img src="" /> */}</div>
            <div className="location">
              <li className="item">
                <p>Tòa soạn: Số 60, Dương Đình Nghệ, Cầu Giấy, Hà Nội</p>
              </li>
              <li className="item">
                <p>ĐT: 043.123456; Fax: 043.123456</p>
              </li>
              <li className="item">
                <p>© chiaseluat giữ bản quyền nội dung trên website này</p>
              </li>
            </div>
          </div>
          <div className="main_footer_content_right">
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Thời sự</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="item">
                    <p>Việt Nam</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thế giới</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Dân sự</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Ngân hàng</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiền tệ</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Bảo hiểm</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thuế, ngân hàng</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Đất đai</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tin tức</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Dự án</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Toàn cảnh</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiện ích</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Hôn nhân</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>24h</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Cổ phiếu</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Giao dịch</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Góc nhìn</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Hành chính</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thị trường</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiêu dùng</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Giao thương</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Quản trị</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Thời sự</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="item">
                    <p>Việt Nam</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thế giới</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Dân sự</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Ngân hàng</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiền tệ</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Bảo hiểm</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thuế, ngân hàng</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Đất đai</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tin tức</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Dự án</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Toàn cảnh</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiện ích</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Hôn nhân</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>24h</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Cổ phiếu</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Giao dịch</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Góc nhìn</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="big-item">
              <div className="topic">
                <div className="title">
                  <a href="#">
                    <h3>Hành chính</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Thị trường</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Tiêu dùng</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Giao thương</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <p>Quản trị</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
