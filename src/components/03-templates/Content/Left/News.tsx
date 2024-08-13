import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNewsStore } from "../../../../context/newContext"; 

const News = () => {
  const newsStore = useNewsStore();

  return (
    <div className="news">
      <div className="content">
        {newsStore.news.map((newsItem, index) => (
          <div className="tin-tuc-chinh" key={index}>
            <div className={`tin-tuc ${newsItem.category?.toLowerCase() || ''}`}>
              <div className="title">
                <div className="left">
                  <p>{newsItem.category}</p>
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
                  {newsItem.important && (
                    <div className="left-item" key={newsItem.id}>
                      <div className="left-photo">
                        <Link to={`/news-detail/${encodeURIComponent(newsItem.id)}`}>
                          <img
                            src={require(`../../../../assets/images/${newsItem.image}`)}
                            alt={newsItem.title}
                          />
                        </Link>
                      </div>
                      <div className="title">
                        <Link to={`/news-detail/${encodeURIComponent(newsItem.title)}`}>
                          <h3>{newsItem.title}</h3>
                        </Link>
                      </div>
                      <div className="date gray-content">
                        <i className="fa-regular fa-clock"></i>
                        <p className="gray-content">{newsItem.date}</p>
                      </div>
                      <div className="cont">
                        <p>{newsItem.content}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="right">
                  {!newsItem.important && (
                    <div className="item" key={newsItem.id}>
                      <div className="image">
                        <Link to={`/news-detail/${encodeURIComponent(newsItem.id)}`}>
                          <img
                            src={require(`../../../../assets/images/${newsItem.image}`)}
                            alt={newsItem.title}
                          />
                        </Link>
                      </div>
                      <div className="chitiet">
                        <div className="title">
                          <Link to={`/news-detail/${encodeURIComponent(newsItem.id)}`}>
                            <h3>{newsItem.title}</h3>
                          </Link>
                        </div>
                        <div className="date gray-content">
                          <i className="fa-regular fa-clock"></i>
                          <p className="gray-content">{newsItem.date}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;