/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import news from "../../data/MainNews.json"; // Import dữ liệu từ file JSON

const MainNews = () => {
  return (
    <>
      <div className="container main_news">
        {news.map((item, index) => (
          <div className="new-item" key={index}>
            <div className="loai-tin">
              <p>{item.category}</p>
              <div className="line">
                <div className="red"></div>
                <div className="gray"></div>
              </div>
            </div>
            <div className="photo">
              <a href="#">
                <img src={require(`../../assets/images/${item.image}`)} />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="paragraph">
                <ul>
                  {item.paragraphs.map((paragraph, pIndex) => (
                    <li key={pIndex}>
                      <p>{paragraph}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainNews;
