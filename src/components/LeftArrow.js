import React from "react";
import "../App.css";
import { Icon } from "antd";

const LeftArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToPrevSlide}>
      <h1>
        <Icon type="left-circle" />
      </h1>
    </div>
  );
};

export default LeftArrow;
