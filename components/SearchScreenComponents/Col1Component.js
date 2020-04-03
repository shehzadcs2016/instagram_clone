import React from "react";
import { Image } from "react-native";
import { Col } from "react-native-easy-grid";

export default class ColComponent extends React.Component {
  render() {
    const { imageUri1, imageUri2 } = this.props;
    return (
      <Col
        style={{
          flexDirection: "column",
          width: "35%"
        }}
      >
        <Image
          style={{
            height: 130,
            width: "100%"
          }}
          source={imageUri1}
        />
        <Image
          style={{
            height: 130,
            width: "100%",
            marginTop: 2
          }}
          source={imageUri2}
        />
      </Col>
    );
  }
}
