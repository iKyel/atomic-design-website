/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import questions from "../../../../data/Content/Right/MuchAsked.json"; // Import dữ liệu từ file JSON

const MuchAsked = () => {
  return (
    <>
      <div className="item hoi-nhieu">
        <div className="title">
          <p>HỎI NHIỀU</p>
          <div className="line">
            <div className="red"></div>
            <div className="gray"></div>
          </div>
        </div>
        <div className="noi-dung">
          {questions.map((question, index) => (
            <div className="cau-hoi-item" key={index}>
              <div className="bao">
                <div className="stt">
                  <h2 className="gray-content">{index + 1}</h2>
                </div>
                <div className="cau-hoi">
                  <a href="#">
                    <h3>{question.question}</h3>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MuchAsked;
