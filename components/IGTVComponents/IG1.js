import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import IGTV from "../VideoComponent";

export default class IGTV1 extends React.Component {
  render() {
    return (
      <Row
        style={{
          flexDirection: "row",
          marginTop: 1
        }}
      >
        <Col style={{ marginRight: 2 }}>
          <IGTV width={180} />
        </Col>
        <Col>
          <IGTV width={200} />
        </Col>
      </Row>
    );
  }
}
