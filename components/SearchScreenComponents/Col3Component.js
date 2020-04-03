import React from "react";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Col3Component extends React.Component {
  render() {
    const { imageUri1, imageUri2, imageUri3, height } = this.props;

    return (
      <Row style={{ flexDirection: "row", marginBottom: 1 }}>
        <Col
          style={{
            width: "33.5%",
            marginRight: 2
          }}
        >
          <Image
            style={{
              height: height,
              width: "100%"
            }}
            source={imageUri1}
          />
        </Col>
        <Col style={{ width: "33.5%", marginRight: 2 }}>
          <Image
            style={{
              height: height,
              width: "100%"
            }}
            source={imageUri2}
          />
        </Col>
        <Col style={{ width: "33.5%", marginRight: 2 }}>
          <Image
            style={{
              height: height,
              width: "100%"
              // marginTop: 2
            }}
            source={imageUri3}
          />
        </Col>
      </Row>
    );
  }
}
