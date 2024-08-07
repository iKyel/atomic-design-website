/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import videos from "../../data/Video.json";

const MainVideo = () => {
  const importantVideos = videos.filter(video => video.important === "true");
  const nonImportantVideos = videos.filter(video => video.important === "false");

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
              {importantVideos.map((video, index) => (
                <div className="left-item" key={index}>
                  <div className="photo">
                    <a href="#">
                      <img
                        src={require(`../../assets/images/${video.image}`)}
                        alt={video.title}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="title">
                      <a href="#">
                        <h3>{video.title}</h3>
                      </a>
                    </div>
                    <div className="date gray-content">
                      <i className="fa-regular fa-clock"></i>
                      <p className="gray-content">{video.date}</p>
                    </div>
                    <div className="cont">
                      <p>{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content_right">
              {nonImportantVideos.map((video, index) => (
                <div className="item" key={index}>
                  <div className="photo">
                    <a href="#">
                      <img
                        src={require(`../../assets/images/${video.image}`)}
                        alt={video.title}
                      />
                    </a>
                  </div>
                  <div className="title">
                    <h3>
                      {video.title}
                      <i className="fa-solid fa-video">
                        <VideocamIcon />
                      </i>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainVideo;
