import React from 'react';
import "../App.css";
import { Icon } from "antd";

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <Icon type="right-circle" />
    </div>
  );
}

export default RightArrow;