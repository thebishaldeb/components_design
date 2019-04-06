import React, { Component } from "react";
import "../App.css";
import { Modal, Button } from "antd";
import SignInAndSignUpCard from "../components/SignInAndSignUpCard";

export default class SignIn extends Component {
  state = {
    modal1Visible: false,
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>SignIn</Button>
        <Modal
          centered
          width={650}
          bodyStyle={{padding:"0"}}
          visible={this.state.modal1Visible}
          footer = {null}
          onCancel={() => this.setModal1Visible(false)}
        >
          <SignInAndSignUpCard />
        </Modal>
      </div>
    );
  }
}
