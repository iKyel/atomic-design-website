/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hotTopics from "../../../../data/Content/Right/HotTopic.json"; 

const HotTopic = () => {
  return (
    <>
      <div className="item van-de-nong">
        <div className="title">
          <p>VẤN ĐỀ NÓNG</p>
          <div className="line">
            <div className="red"></div>
            <div className="gray"></div>
          </div>
        </div>
        <div className="ban-tin">
          {hotTopics.map((topic, index) => (
            <div className="new" key={index}>
              <div className="photo">
                <a href="#">
                  <img src={require(`../../../../assets/images/${topic.image}`)} />
                </a>
              </div>
              <div className="title">
                <p>{topic.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotTopic;
