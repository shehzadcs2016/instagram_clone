import React from "react";
import { Input, Card } from "native-base";
import { Image, Text, TouchableOpacity } from "react-native";
import AnimatedIcon from "./AnimatedIcon";
import Icon from "react-native-vector-icons/Feather";
import RecommendCardItem from "../RecommendedCardItem";
import { Col, Grid } from "react-native-easy-grid";
export default class CardComponent extends React.Component {
  heartClick = () => {
    alert("heart Clicked");
  };

  render() {
    const {
      userImage,
      user,
      instaUser,
      other,
      image,
      onComment,
      onSend
    } = this.props;
    return (
      <Card
        style={{
          alignItems: "center",
          marginTop: -4
        }}
      >
        <Grid style={{ marginTop: 15 }}>
          <Col
            style={{
              flexDirection: "row",
              paddingHorizontal: 5
            }}
          >
            <Image
              style={{
                height: 35,
                width: 35,
                borderRadius: 40
              }}
              source={userImage}
            />
            <Text
              style={{
                fontSize: 15,
                paddingHorizontal: 10,
                paddingTop: 7,
                color: "black",
                fontWeight: "700"
              }}
            >
              {user}
            </Text>
          </Col>
          <Col
            style={{
              alignItems: "flex-end"
            }}
          >
            <Icon
              name="more-vertical"
              style={{ fontSize: 30, marginRight: 10, paddingTop: 4 }}
            />
          </Col>
        </Grid>

        <RecommendCardItem imageUri={image} />
        <Grid>
          <Col
            style={{
              flexDirection: "row"
            }}
          >
            <AnimatedIcon />
            <TouchableOpacity onPress={onComment}>
              <Icon
                name="message-circle"
                style={{ fontSize: 30, marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSend}>
              <Icon
                name="send"
                style={{ fontSize: 30, marginHorizontal: 10 }}
              />
            </TouchableOpacity>
          </Col>

          <Col
            style={{
              alignItems: "flex-end"
            }}
          >
            <Icon name="bookmark" style={{ fontSize: 30, marginRight: 10 }} />
          </Col>
        </Grid>
        <Grid style={{ marginTop: 7 }}>
          <Col
            style={{ flexDirection: "row", height: 35, paddingHorizontal: 6 }}
          >
            {/* <Image
            style={{ height: 30, width: 30, borderRadius: 40 }}
            source={require("./../assets/images/431042228.jpg")}
          /> */}
            <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
              Liked By <Text style={{ fontWeight: "700" }}> {instaUser} </Text>{" "}
              and <Text style={{ fontWeight: "700" }}> {other} others </Text>
            </Text>
          </Col>
        </Grid>
        <Grid>
          <Col
            style={{
              // height: 35,
              paddingHorizontal: 9,
              paddingTop: 5,
              height: 100
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              dawn_dot_com{" "}
              <Text style={{ fontSize: 16 }}>
                Pakistani public transport serving up the best one-liners.For
                urdu readers/speakers.how would you translate this sentence.
              </Text>
              <Text style={{ fontSize: 18 }}>Photo by @hassan.bari</Text>
            </Text>
          </Col>
        </Grid>

        <Grid>
          <Col
            style={{
              paddingHorizontal: 9
            }}
          >
            <TouchableOpacity onPress={onComment}>
              <Text style={{ fontSize: 18 }}>View All 12 comments</Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        <Grid>
          <Col
            style={{
              flexDirection: "row"
            }}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                marginTop: 5,
                borderRadius: 40
              }}
              source={require("../../assets/images/431042228.jpg")}
            />
            <Input placeholder="Add a comment" />
          </Col>
          <Col
            style={{
              alignItems: "flex-end"
            }}
          >
            <Icon
              name="plus-circle"
              style={{ fontSize: 25, marginRight: 10, marginTop: 5 }}
            />
          </Col>
        </Grid>
        <Text
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 5,
            height: 25
          }}
        >
          {" "}
          5 hours ago
        </Text>
      </Card>
    );
  }
}
