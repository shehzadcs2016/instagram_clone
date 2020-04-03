import React from "react";

import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Item,
  Input,
  Content,
  Card,
  CardItem
} from "native-base";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Icons
} from "react-native";
// import Icon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/Feather";

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
            paddingHorizontal: 5,
            // marginTop: 20,
            // flex: 1,8
            width: "14%"
            // backgroundColor: "black"
            // overflow: "hidden",
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 80
            }}
            source={userImage}
          />
        </Col>
        <Row style={{ flexDirection: "column" }}>
          <Col
            style={{
              // marginTop: 5,
              // paddingHorizontal: 10,
              // width: "64%",
              flex: 1,
              // backgroundColor: "green",
              flexDirection: "row"
              // marginTop: -5
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "black"
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                paddingHorizontal: 5,
                marginTop: 4,
                fontSize: 10,
                color: "black"
              }}
            >
              {desc}
            </Text>
          </Col>
          <Col
            style={{
              // marginTop: 5,
              // paddingHorizontal: 10,
              // width: "64%",
              flex: 1,
              // backgroundColor: "green",
              flexDirection: "row"
              // marginTop: -5
            }}
          >
            <Text
              style={{
                fontSize: 10,
                marginTop: 4,
                opacity: 0.5,
                color: "black"
              }}
            >
              2h
            </Text>
            <Text
              style={{
                paddingHorizontal: 12,
                marginTop: 4,
                fontSize: 10,
                opacity: 0.5,
                color: "black"
              }}
            >
              Reply
            </Text>
          </Col>
        </Row>
        <Col
          style={{
            // flexDirection: "row-reverse",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            alignContent: "flex-end",
            // backgroundColor: "pink",
            height: 30
          }}
        >
          <Icon name="heart" style={{ opacity: 0.2, marginRight: 12 }} />
        </Col>
      </Row>
    </Grid>
  );
};

export default ActivityComponent;
