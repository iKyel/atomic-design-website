/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import questions from "../../../../data/Content/Right/Question.json"; 

const Questions = () => {
  return (
    <>
      <div className="item cau-hoi-trong-tuan">
        <div className="title">
          <p>CÂU HỎI TRONG TUẦN</p>
          <div className="line">
            <div className="red"></div>
            <div className="gray"></div>
          </div>
        </div>
        <div className="noi-dung">
          {questions.map((question, index) => (
            <div className="chtt-item" key={index}>
              <div className="bao">
                <div className="left">
                  <div className="stt">{index + 1}</div>
                  <div className="line-stt"></div>
                </div>
                <div className="right">
                  <div className="tieu-de">
                    <h3>{question.question}</h3>
                  </div>
                  <div className="van-ban">
                    <p>
                      {question.detail}
                      <a href="#">
                        <i className="fa fa-plus-circle"></i>
                      </a>
                    </p>
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

export default Questions;
