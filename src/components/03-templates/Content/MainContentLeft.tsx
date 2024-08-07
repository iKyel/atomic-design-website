/* eslint-disable jsx-a11y/anchor-is-valid */
// images

import new1 from "../../../assets/images/new1.png";
import new2 from "../../../assets/images/new2.png";
import new3 from "../../../assets/images/new3.png";
import new4 from "../../../assets/images/new4.png";
import new5 from "../../../assets/images/new5.png";
import new6 from "../../../assets/images/new6.png";
import new7 from "../../../assets/images/new7.jpg";
import new8 from "../../../assets/images/new8.jpg";

// icons

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// components
import MainContentLeftTop from "./MainContentLeftTop";


const MainContentLeft = () => {
  return (
    <>
      <div className="content-left">
        <div className="content-left_main">
          <MainContentLeftTop />
          <div className="news">
            <div className="content">
              <div className="tin-tuc-chinh">
                <div className="tin-tuc dat-dai">
                  <div className="title">
                    <div className="left">
                      <p>ĐẤT ĐAI</p>
                    </div>
                    <div className="right">
                      <li>
                        <a href="#" className="elem primary-color elem-main">
                          Luật đất đai
                        </a>
                      </li>
                      <li className="elem elem-main">
                        <a href="#">Kiện tụng</a>
                      </li>
                      <li className="elem">
                        <a href="#">Dân sự</a>
                      </li>
                      <li className="">
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
                  <div className="noi-dung">
                    <div className="left">
                      <div className="left-photo">
                        <a href="#">
                          <img src={new1} />
                        </a>
                      </div>
                      <div className="title">
                        <a href="#">
                          <h3>
                            Cáo buộc ông Đinh La Thăng khai báo chưa thành khẩn
                          </h3>
                        </a>
                      </div>
                      <div className="date gray-content">
                        <i className="fa-regular fa-clock"></i>
                        <p className="gray-content">Thứ 4, 27/12/2017</p>
                      </div>
                      <div className="cont">
                        <p>
                          Cơ quan điều tra cáo buộc ông Đinh La Thăng khai báo
                          chưa thành khẩn, né tránh trách nhiệm, hợp thức hóa
                          tài liệu để đối phó.
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="item">
                        <div className="image">
                          <img src={new2} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Phó chủ tịch Thanh Hóa không có tên trên lịch
                                công tác sau khi bị kỷ luật
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="image">
                          <img src={new3} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Người chém tài xế sau vụ cẩu ôtô ở BOT Cai Lậy
                                được trả tự do
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="image">
                          <img src={new4} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Phó chủ tịch Thanh Hóa không có tên trên lịch
                                công tác sau khi bị kỷ luật
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tin-tuc hon-nhan">
                  <div className="title">
                    <div className="left">
                      <p>Hôn Nhân</p>
                    </div>
                    <div className="right">
                      <li>
                        <a href="#" className="elem primary-color elem-main">
                          Đồng giới
                        </a>
                      </li>
                      <li className="elem elem-main">
                        <a href="#">Kiện tụng</a>
                      </li>
                      <li className="elem">
                        <a href="#">Luật Hôn Nhân</a>
                      </li>
                      <li className="">
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
                    <div className="gray"></div>
                    <div className="red"></div>
                  </div>
                  <div className="noi-dung">
                    <div className="left">
                      <div className="left-photo">
                        <a href="#">
                          <img src={new5} />
                        </a>
                      </div>
                      <div className="title">
                        <a href="#">
                          <h3>
                            7 năm tiêu dè sẻn dù lương tăng gấp 3, vợ chồng tôi
                            có nhà, xe
                          </h3>
                        </a>
                      </div>
                      <div className="date gray-content">
                        <i className="fa-regular fa-clock"></i>
                        <p className="gray-content">Thứ 4, 27/12/2017</p>
                      </div>
                      <div className="cont">
                        <p>
                          Cơ quan điều tra cáo buộc ông Đinh La Thăng khai báo
                          chưa thành khẩn, né tránh trách nhiệm, hợp thức hóa
                          tài liệu để đối phó.
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="item">
                        <div className="image">
                          <img src={new6} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Phó chủ tịch Thanh Hóa không có tên trên lịch
                                công tác sau khi bị kỷ luật
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="image">
                          <img src={new7} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Phó chủ tịch Thanh Hóa không có tên trên lịch
                                công tác sau khi bị kỷ luật
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="image">
                          <img src={new8} />
                        </div>
                        <div className="chitiet">
                          <div className="title">
                            <a href="#">
                              <h3>
                                Phó chủ tịch Thanh Hóa không có tên trên lịch
                                công tác sau khi bị kỷ luật
                              </h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">Thứ 4, 27/12/2017</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContentLeft;
