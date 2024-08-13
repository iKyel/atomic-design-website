/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNewsStore } from "../../../../context/newContext";
import { NewsItem } from "../../../../store/newStore";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsStore = useNewsStore();
  
  const item: NewsItem | undefined = newsStore.news.find(item => item.id === parseInt(id || '', 10));
  
  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <div className="hot-new">
        <h2 className="title">{item.title}</h2>
        <div className="infor">
          <div className="infor-left">
            <a href="#" className="icon comment">
              <ChatBubbleIcon />
              <span>{item.comments}</span>
            </a>
            <a href="#" className="icon share">
              <ShareIcon />
              <span>{item.shares}</span>
            </a>
          </div>
          <div className="infor-right">
            <p className="VN">{item.location}</p>
            <span>|</span>
            <p className="date">{item.date}</p>
            <a href="#" className="icon">
              <PrintIcon />
            </a>
          </div>
        </div>
        <div className="content">
          {item.additionalContent.map((content, index) => (
            <React.Fragment key={index}>
              <h4>{content.title}</h4>
              <ul>
                {content.subContent.map((subItem, subIndex) => (
                  <li key={subIndex} className="primary-color">
                    <ChevronRightIcon />
                    <p className="gray-content">{subItem.text}</p>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          <p className="text">{item.content}</p>
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
              {item.tags.map((tag, index) => (
                <div className="inner" key={index}>
                  <a href={`/tags/${encodeURIComponent(tag)}`}>
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

export default NewsDetail;
