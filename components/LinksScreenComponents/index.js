import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export const getTabBarIcon = props => {
  const { route } = props;
  if (route.key === "first") {
    return <Icon name="instagram" style={{ fontSize: 30 }} />;
  } else {
    return <Icon name="user" style={{ fontSize: 30 }} />;
  }
};

export const FirstRoute = () => (
  <Row style={{ flexDirection: "row" }}>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 150,
          width: "100%"
        }}
        source={require("../../assets/images/images1.jpg")}
      />
    </Col>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 150,
          width: "100%"
        }}
        source={require("../../assets/images/jkbnj.jpg")}
      />
    </Col>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 150,
          width: "100%"
        }}
        source={require("../../assets/images/hk.jpg")}
      />
    </Col>
  </Row>
);

export const SecondRoute = () => (
  <Row style={{ flexDirection: "row" }}>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 170,
          width: "100%"
        }}
        source={require("../../assets/images/gjyg.jpg")}
      />
    </Col>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 170,
          width: "100%"
        }}
        source={require("../../assets/images/elsa.jpg")}
      />
    </Col>
    <Col
      style={{
        width: "33.33%",
        marginRight: 2,
        marginBottom: 2
      }}
    >
      <Image
        style={{
          height: 170,
          width: "100%"
        }}
        source={require("../../assets/images/as.jpg")}
      />
    </Col>
  </Row>
);
