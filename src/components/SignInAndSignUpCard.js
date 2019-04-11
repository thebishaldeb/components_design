import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Form, Input, Divider, Row, Col, Card, Button } from "antd";
import naruto2 from "../resources/naruto2.jpg";

class SignIn extends Component {
  render() {
    return (
      <div>
        <p className="signInForm">Let me help you sign in</p>
        <Form className="paddingMarginBottom">
          <Form.Item>
            <Input type="email" placeholder="Email Address" />
          </Form.Item>
          <Form.Item className="paddingMarginBottom">
            <Input type="password" placeholder="Password" />
            <Link className="forgotpass" to="/">
              Forgot password?
            </Link>
            <Button className="themeColor" block>
              Sign In
            </Button>
            <p className="belowFormtext">
              New to LensHood?{" "}
              <span
                onClick={e => this.props.setModal1Visible("signup")}
                className="colorCursor"
              >
                Sign Up
              </span>
            </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
class SignUp extends Component {
  render() {
    return (
      <div>
        <p className="signInForm">Let me help you sign up</p>
        <Form className="paddingMarginBottom">
          <Form.Item>
            <Input type="text" placeholder="Your Name" />
          </Form.Item>
          <Form.Item>
            <Input type="email" placeholder="Email Address" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item className="paddingMarginBottom">
            <Button className="themeColor" block>
              Sign Up
            </Button>
            <p className="belowFormtext">
              Already have an account?{" "}
              <span
                onClick={e => this.props.setModal1Visible("signin")}
                className="colorCursor"
              >
                Sign In
              </span>
            </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default class SignInAndSignUpCard extends Component {
  state = {
    SignInState: "signin"
  };

  setModal1Visible(val) {
    this.setState({ SignInState: val });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <img
              src={naruto2}
              alt=""
              className={
                this.state.SignInState === "signin" ? "signInimg" : "signupImg"
              }
            />
          </Col>
          <Col span={16}>
            <Card className="modalcard">
              <h2 className="signinstate">
                {this.state.SignInState === "signin"
                  ? "Sign in to Lenshood"
                  : "Create Account"}
              </h2>
              <Row gutter={16}>
                <Col span={12}>
                  <Button className="fbookbtn" block>
                    Facebook
                  </Button>
                </Col>
                <Col span={12}>
                  <Button className="googlebtn" block>
                    Google
                  </Button>
                </Col>
              </Row>
              <Divider className="viaEmail">or via E-mail</Divider>
              {this.state.SignInState === "signin" ? (
                <SignIn setModal1Visible={this.setModal1Visible.bind(this)} />
              ) : (
                <SignUp setModal1Visible={this.setModal1Visible.bind(this)} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
