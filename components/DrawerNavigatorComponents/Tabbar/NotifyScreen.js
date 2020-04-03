import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const ActivityComponent = ({ title, desc1, desc2, userImage }) => {
  return (
    <Grid
      style={{
        marginTop: 20,
        flexDirection: "column"
      }}
    >
      <Row style={{ paddingHorizontal: 2 }}>
        <Col
          style={{
            flexDirection: "row",
            width: "25%",
            marginTop: 3,
            paddingHorizontal: 5
          }}
        >
          <Image
            style={{
              height: 70,
              width: 70,
              borderRadius: 70
            }}
            source={userImage}
          />
        </Col>

        <Col
          style={{
            marginTop: 7,
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
              color: "black",
              opacity: 0.5
            }}
          >
            {desc1}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              opacity: 0.5
            }}
          >
            {desc2}
          </Text>
        </Col>
        <Col
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            alignContent: "flex-end",
            backgroundColor: "grey",
            width: "30%",
            height: 30,
            borderRadius: 12,
            marginTop: 18
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              paddingHorizontal: 22
            }}
          >
            <Text style={{ color: "white" }}> Follow </Text>
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  );
};

export default ActivityComponent;
