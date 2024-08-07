/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MainContentLeftTop = () => {
  return (
    <>
      <div className="hot-new">
            <h2 className="title">
              Có nên quy định trần lãi suất trong Bộ luật Dân sự (sửa đổi)?
            </h2>
            <div className="infor">
              <div className="infor-left">
                <a href="#" className="icon comment">
                  <i className="fa-solid fa-comment">
                    <ChatBubbleIcon />
                  </i>
                  <span>123</span>
                </a>
                <a href="#" className="icon share">
                  <i className="fa-solid fa-share-nodes">
                    <ShareIcon />
                  </i>
                  <span>88</span>
                </a>
              </div>
              <div className="infor-right">
                <p className="VN">Việt Nam</p>
                <span>|</span>
                <p className="date">Thứ Sáu, 30/9/2016 00:06 GMT+7</p>
                <a href="#" className="icon">
                  <i className="fa-solid fa-print">
                    <PrintIcon />
                  </i>
                </a>
              </div>
            </div>
            <div className="content">
              <h4>
                Thủ tướng yêu cầu đẩy mạnh xuất khẩu, kiểm soát chặt chẽ nhập
                khẩu để giảm nhập siêu.
              </h4>
              <ul>
                <li className="primary-color">
                  <i className="fa-solid fa-angle-right">
                    <ChevronRightIcon />
                  </i>
                </li>
                <li>
                  <p className="gray-content">
                    Áp trần lãi suất trong luật Dân sự là 'nhầm lẫn nghiêm
                    trọng'?
                  </p>
                </li>
              </ul>
              <p className="text">
                Tình hình hiện nay đã có thay đổi. Nếu như trước đây, BLHS quy
                định tội cho vay nặng lãi trên cơ sở quy định tại BLDS, thì hiện
                giờ, BLHS đã có quy định riêng về tội này. Chẳng hạn, nếu vay 1
                đồng mà lấy lãi cũng 1 đồng tức là cho vay nặng lãi, hay mức thu
                lãi từ 30 triệu đồng trở lên thì sẽ truy cứu trách nhiệm hình
                sự. Tôi cho là BLHS quy định như vậy là được, song vẫn cần quy
                định thêm ở BLDS bởi nó vô hiệu cho những người bị áp lực phải
                ký những hợp đồng vay quá lớn. Tuy nhiên, loại bỏ chuyện liên
                quan đến khối ngân hàng, nếu BLHS quy định 100% thì BLDS chỉ nên
                quy định 20%, tức giảm 5 lần, song cần phải cân nhắc chỗ này vì
                nó liên quan đến biến động lạm phát. Lạm phát đã 19% rồi thì lãi
                suất 20% là không có gì nhiều.
                <br />
                Tuy nhiên, nếu vẫn để quy định này tại dự thảo BLDS sửa đổi thì
                thực tế nó vẫn trói buộc hoạt động chuyên môn của các tổ chức
                tín dụng và mâu thuẫn với quy định cho phép tự do thỏa thuận về
                lãi suất của Luật Các tổ chức tín dụng, ông nghĩ sao về vấn đề
                này?
                <br />
                Đúng như vậy. Cho nên tôi nghĩ là cần cân nhắc không nên quy
                định điều này vào trong BLDS như một điều kiện trói buộc nữa,
                bởi nguyên tắc của một hợp đồng là tự nguyện. Nếu vi phạm một
                điều luật cấm thì hợp đồng đó vô hiệu tuyệt đối. Điều này dẫn
                tới tình trạng khi cần vay sẵn sàng vay với lãi suất cao, nhưng
                đến khi trả nợ lại căn cứ luật để làm vô hiệu hóa hợp đồng vay.
                Do đó, cần phải cân nhắc rất kỹ vấn đề này.
              </p>
              <div className="btn-xemthem">
                <a href="#">
                  <button>
                    Xem thêm
                    <i className="fa-solid fa-angle-down">
                      <KeyboardArrowDownIcon />
                    </i>
                  </button>
                </a>
              </div>
              <div className="end">
                <div className="share">
                  <div className="block-left">
                    <p>Chia sẻ: </p>
                    <a href="#">
                      <i className="fa-brands fa-facebook">
                        <FacebookIcon />
                      </i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter">
                        <XIcon />
                      </i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-google">
                        <GoogleIcon />
                      </i>
                    </a>
                  </div>
                  <div className="block-right">
                    <a href="#" className="gray-content">
                      <i className="fa-regular fa-bookmark">
                        <BookmarkIcon />
                      </i>
                    </a>
                  </div>
                </div>
                <div className="tag">
                  <div className="inner">
                    <a href="#">
                      <p>Bộ Tài Chính</p>
                    </a>
                  </div>
                  <div className="inner">
                    <a href="#">
                      <p>Người Tiêu Dùng</p>
                    </a>
                  </div>
                  <div className="inner">
                    <a href="#">
                      <p>Bộ Tài Chính</p>
                    </a>
                  </div>
                  <div className="inner">
                    <a href="#">
                      <p>Người Tiêu Dùng</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="y-kien">
            <div className="title elem">
              <div className="left">
                <p className="primary-color">Ý kiến bạn đọc (3)</p>
              </div>
              <div className="right">
                <li className="element">
                  <a href="#">
                    <p className="link">Mới nhất</p>
                  </a>
                </li>
                <li className="element">
                  <span>|</span>
                </li>
                <li className="element">
                  <a href="#">
                    <p>Quan tâm nhất</p>
                  </a>
                </li>
              </div>
            </div>
            <div className="neu-y-kien elem">
              <p className="gray-content">Ý kiến</p>
            </div>
            <div className="tra-loi">
              <a href="#">
                <button>
                  <p>Trả lời</p>
                </button>
              </a>
            </div>
          </div>
    </>
  )
}

export default MainContentLeftTop
