import React from "react";
import { Image, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const ActivityComponent = ({  desc, userImage }) => {
  return (
    <Grid
      style={{
        marginTop: 20,
        flexDirection: "column"
      }}
    >
      
      <Row style={{ paddingHorizontal: 6 }}>
        <Col
          style={{
            flexDirection: "row",
            marginTop: 20,
            width: "15%"
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 40
            }}
            source={userImage}
          />
        </Col>

        <Col style={{ marginTop: 23 }}>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 5,
              color: "black"
            }}
          >
            {desc}
          </Text>
        </Col>
      </Row>
    </Grid>
  );
};

export default ActivityComponent;
