import React from 'react';
import "../App.css";
import { Icon } from "antd";

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToPrevSlide}>
      <Icon type="left-circle" />
    </div>
  );
}

export default RightArrow;