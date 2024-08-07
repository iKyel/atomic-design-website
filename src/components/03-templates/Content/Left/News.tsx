/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import newsData from "../../../../data/Content/News.json";

const News = () => {
  return (
    <>
      <div className="news">
        <div className="content">
          {newsData.map((category, catIndex) => (
            <div className="tin-tuc-chinh" key={catIndex}>
              <div className={`tin-tuc ${category.category.toLowerCase()}`}>
                <div className="title">
                  <div className="left">
                    <p>{category.category}</p>
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
                    {category.items
                      .filter((item) => item.important)
                      .map((item, itemIndex) => (
                        <div className="left-item" key={itemIndex}>
                          <div className="left-photo">
                            <a href="#">
                              <img
                                src={require(`../../../../assets/images/${item.image}`)}
                                alt={item.title}
                              />
                            </a>
                          </div>
                          <div className="title">
                            <a href="#">
                              <h3>{item.title}</h3>
                            </a>
                          </div>
                          <div className="date gray-content">
                            <i className="fa-regular fa-clock"></i>
                            <p className="gray-content">{item.date}</p>
                          </div>
                          <div className="cont">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="right">
                    {category.items
                      .filter((item) => !item.important)
                      .map((item, itemIndex) => (
                        <div className="item" key={itemIndex}>
                          <div className="image">
                            <a href="#">
                              <img
                                src={require(`../../../../assets/images/${item.image}`)}
                                alt={item.title}
                              />
                            </a>
                          </div>
                          <div className="chitiet">
                            <div className="title">
                              <a href="#">
                                <h3>{item.title}</h3>
                              </a>
                            </div>
                            <div className="date gray-content">
                              <i className="fa-regular fa-clock"></i>
                              <p className="gray-content">{item.date}</p>
                            </div>
                            <div className="cont">
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
