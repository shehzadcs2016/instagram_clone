import React from "react";
import { Col } from "react-native-easy-grid";
import IGTV from "./IGTV";

export default class Col2Component extends React.Component {
  render() {
    return (
      <Col
        style={{
          alignItems: "flex-end",
          width: "65%"
        }}
      >
        <IGTV />
      </Col>
    );
  }
}
