/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import data from '../../../../data/Content/ContentTop.json';
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
  const {
    title,
    comments,
    shares,
    location,
    date,
    content,
    additionalContent,
    tags
  } = data;

  return (
    <>
      <div className="hot-new">
        <h2 className="title">{title}</h2>
        <div className="infor">
          <div className="infor-left">
            <a href="#" className="icon comment">
              <ChatBubbleIcon />
              <span>{comments}</span>
            </a>
            <a href="#" className="icon share">
              <ShareIcon />
              <span>{shares}</span>
            </a>
          </div>
          <div className="infor-right">
            <p className="VN">{location}</p>
            <span>|</span>
            <p className="date">{date}</p>
            <a href="#" className="icon">
              <PrintIcon />
            </a>
          </div>
        </div>
        <div className="content">
          {additionalContent.map((item, index) => (
            <React.Fragment key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item.subContent.map((subItem, subIndex) => (
                  <li key={subIndex} className="primary-color">
                    <ChevronRightIcon />
                    <p className="gray-content">{subItem.text}</p>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          <p className="text">{content}</p>
          <div className="btn-xemthem">
            <a href="#">
              <button>
                Xem thêm
                <KeyboardArrowDownIcon />
              </button>
            </a>
          </div>
          <div className="end">
            <div className="share">
              <div className="block-left">
                <p>Chia sẻ: </p>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <XIcon />
                </a>
                <a href="#">
                  <GoogleIcon />
                </a>
              </div>
              <div className="block-right">
                <a href="#" className="gray-content">
                  <BookmarkIcon />
                </a>
              </div>
            </div>
            <div className="tag">
              {tags.map((tag, index) => (
                <div className="inner" key={index}>
                  <a href="#">
                    <p>{tag}</p>
                  </a>
                </div>
              ))}
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
  );
};

export default MainContentLeftTop;
