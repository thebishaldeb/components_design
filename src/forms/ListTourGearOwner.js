import React, { Component } from "react";
import "../App.css";
import { Layout, Row, Col, Breadcrumb, Steps } from "antd";
import ListYGSteps from "../components/ListYGSteps";

const Step = Steps.Step;
class ListTourGearOwner extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Layout style={{ padding: "24px 5%", background: "#fff" }}>
          <ListYGSteps step={1}/>
        </Layout>
      </div>
    );
  }
}

export default ListTourGearOwner;
