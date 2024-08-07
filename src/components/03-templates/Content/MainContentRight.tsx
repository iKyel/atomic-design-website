/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ad1 from "../../../assets/images/ad1.png"

import pic1 from "../../../assets/images/hn_pic1.png"
import pic2 from "../../../assets/images/hn_pic2.png"
import pic3 from "../../../assets/images/hn_pic3.png"
import pic4 from "../../../assets/images/hn_pic4.png"
import pic5 from "../../../assets/images/hn_pic5.png"

const MainContentRight = () => {
  return (
    <>
      <div className="content-right">
          <div className="main-content-right">
            <div className="item gioi-thieu">
              <div className="title">
                <p>GIỚI THIỆU</p>
                <div className="line">
                  <div className="red"></div>
                  <div className="gray"></div>
                </div>
              </div>
              <div className="noi-dung">
                <p>
                  là website đầu tiên tại Việt Nam đi sâu vào lĩnh vực xây dựng,
                  tập hợp hệ thống văn bản quy phạm pháp luật do nước Cộng hòa
                  xã hội chủ nghĩa Việt Nam ban hành từ ngày thành lập nước
                  (1945) đến nay.
                </p>
              </div>
            </div>
            <div className="item hoi-nhieu">
              <div className="title">
                <p>HỎI NHIỀU</p>
                <div className="line">
                  <div className="red"></div>
                  <div className="gray"></div>
                </div>
              </div>
              <div className="noi-dung">
                <div className="cau-hoi-item">
                  <div className="bao">
                    <div className="stt">
                      <h2 className="gray-content">1</h2>
                    </div>
                    <div className="cau-hoi">
                      <a href="#">
                        <h3>
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản{" "}
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cau-hoi-item">
                  <div className="bao">
                    <div className="stt">
                      <h2 className="gray-content">2</h2>
                    </div>
                    <div className="cau-hoi">
                      <a href="#">
                        <h3>
                          Chi trả tiền bồi thường, hỗ trợ, tái định cư được quy
                          định như thế nào?
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cau-hoi-item">
                  <div className="bao">
                    <div className="stt">
                      <h2 className="gray-content">3</h2>
                    </div>
                    <div className="cau-hoi">
                      <a href="#">
                        <h3>
                          Đăng ký đất đai là gì? và được thực hiện như thế nào?
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cau-hoi-item">
                  <div className="bao">
                    <div className="stt">
                      <h2 className="gray-content">4</h2>
                    </div>
                    <div className="cau-hoi">
                      <a href="#">
                        <h3>
                          Diện tích đất ở đối với trường hợp có vườn, ao được
                          xác định như thế nào?
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cau-hoi-item">
                  <div className="bao">
                    <div className="stt">
                      <h2 className="gray-content">5</h2>
                    </div>
                    <div className="cau-hoi">
                      <a href="#">
                        <h3>
                          Diện tích đất ở đối với trường hợp có vườn, ao được
                          xác định như thế nào?
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ad1">
              <a href="#">
                <img src={ad1} />
              </a>
            </div>
            <div className="item cau-hoi-trong-tuan">
              <div className="title">
                <p>CÂU HỎI TRONG TUẦN</p>
                <div className="line">
                  <div className="red"></div>
                  <div className="gray"></div>
                </div>
              </div>
              <div className="noi-dung">
                <div className="chtt-item">
                  <div className="bao">
                    <div className="left">
                      <div className="stt">1</div>
                      <div className="line-stt"></div>
                    </div>
                    <div className="right">
                      <div className="tieu-de">
                        <h3>
                          Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải
                          di chuyển tài sản thì Nhà nước sẽ bồi thường những?
                        </h3>
                      </div>
                      <div className="van-ban">
                        <p>
                          Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                          thường chi phí di chuyển khi Nhà nước thu hồi đất như
                          sau:
                          <a href="#">
                            <i className="fa fa-plus-circle"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chtt-item">
                  <div className="bao">
                    <div className="left">
                      <div className="stt">2</div>
                      <div className="line-stt"></div>
                    </div>
                    <div className="right">
                      <div className="tieu-de">
                        <h3>
                          {" "}
                          Chi trả tiền bồi thường, hỗ trợ, tái định cư được quy
                          định như thế nào?
                        </h3>
                      </div>
                      <div className="van-ban">
                        <p>
                          Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                          thường chi phí di chuyển khi Nhà nước thu hồi đất như
                          sau:
                          <a href="#">
                            <i className="fa fa-plus-circle"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chtt-item">
                  <div className="bao">
                    <div className="left">
                      <div className="stt">3</div>
                      <div className="line-stt"></div>
                    </div>
                    <div className="right">
                      <div className="tieu-de">
                        <h3>
                          Chi trả tiền bồi thường, hỗ trợ, tái định cư được quy
                          định như thế nào?
                        </h3>
                      </div>
                      <div className="van-ban">
                        <p>
                          Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                          thường chi phí di chuyển khi Nhà nước thu hồi đất như
                          sau:
                          <a href="#">
                            <i className="fa fa-plus-circle"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chtt-item">
                  <div className="bao">
                    <div className="left">
                      <div className="stt">4</div>
                      <div className="line-stt"></div>
                    </div>
                    <div className="right">
                      <div className="tieu-de">
                        <h3>
                          Chi trả tiền bồi thường, hỗ trợ, tái định cư được quy
                          định như thế nào?
                        </h3>
                      </div>
                      <div className="van-ban">
                        <p>
                          Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                          thường chi phí di chuyển khi Nhà nước thu hồi đất như
                          sau:
                          <a href="#">
                            <i className="fa fa-plus-circle"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chtt-item">
                  <div className="bao">
                    <div className="left">
                      <div className="stt">5</div>
                      <div className="line-stt"></div>
                    </div>
                    <div className="right">
                      <div className="tieu-de">
                        <h3>
                          Chi trả tiền bồi thường, hỗ trợ, tái định cư được quy
                          định như thế nào?
                        </h3>
                      </div>
                      <div className="van-ban">
                        <p>
                          Theo Khoản 1 Điều 91 Luật đất đai năm 2013 việc bồi
                          thường chi phí di chuyển khi Nhà nước thu hồi đất như
                          sau:
                          <a href="#">
                            <i className="fa fa-plus-circle"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item van-de-nong">
              <div className="title">
                <p>VẤN ĐỀ NÓNG</p>
                <div className="line">
                  <div className="red"></div>
                  <div className="gray"></div>
                </div>
              </div>
              <div className="ban-tin">
                <div className="new">
                  <div className="photo">
                    <a href="#">
                      <img src={pic1} />
                    </a>
                  </div>
                  <div className="title">
                    <p>
                      Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải di
                      chuyển tài sản thì Nhà nước
                    </p>
                  </div>
                </div>
                <div className="new">
                  <div className="photo">
                    <a href="#">
                      <img src={pic2} />
                    </a>
                  </div>
                  <div className="title">
                    <p>Chính sách Bảo hiểm xã hội năm 2018 có gì mới?</p>
                  </div>
                </div>
                <div className="new">
                  <div className="photo">
                    <a href="#">
                      <img src={pic3} />
                    </a>
                  </div>
                  <div className="title">
                    <p>
                      05 Trường hợp cảnh sát giao thông được yêu cầu dừng xe
                    </p>
                  </div>
                </div>
                <div className="new">
                  <div className="photo">
                    <a href="#">
                      <img src={pic4} />
                    </a>
                  </div>
                  <div className="title">
                    <p>
                      Khi Nhà nước thu hồi đất mà các tổ chức, cá nhân phải di
                      chuyển tài sản thì Nhà nước
                    </p>
                  </div>
                </div>
                <div className="new">
                  <div className="photo">
                    <a href="#">
                      <img src={pic5} />
                    </a>
                  </div>
                  <div className="title">
                    <p>Chính sách Bảo hiểm xã hội năm 2018 có gì mới?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MainContentRight
