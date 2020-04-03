import React from "react";
import { Image, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Col, Row, Grid } from "react-native-easy-grid";

const ActivityComponent = ({ title, desc, userImage }) => {
  return (
    <Grid
      style={{
        marginTop: 20,
        flexDirection: "column"
        // flex: 1
      }}
    >
      <Row style={{ paddingHorizontal: 2 }}>
        <Col
          style={{
            flexDirection: "row",
            width: "23%"
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 80
            }}
            source={userImage}
          />
        </Col>

        <Col
          style={{
            marginTop: 5,
            width: "64%",
            flexDirection: "column"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "black"
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "black"
            }}
          >
            {desc}
          </Text>
        </Col>
        <Col
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            alignContent: "flex-end"
          }}
        >
          <Icon name="camera" style={{ fontSize: 35, paddingBottom: 10 }} />
        </Col>
      </Row>
    </Grid>
  );
};

export default ActivityComponent;
