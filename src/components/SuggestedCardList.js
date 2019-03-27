import React, { Component } from "react";
import "../App.css";
import { List } from "antd";
import RelatedCard from "./RelatedCard";

class SuggestedCardList extends Component {
  render() {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        dataSource={this.props.relatedList}
        renderItem={item => (
          <List.Item>
            <RelatedCard relatedlist={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default SuggestedCardList;
