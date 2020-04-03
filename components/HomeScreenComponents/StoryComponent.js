import React from "react";
import { Image, Text } from "react-native";
import { Col } from "react-native-easy-grid";

class StoryComponent extends React.Component {
  render() {
    const { title, userImage } = this.props;
    return (
      <Col
        style={{
          width: "20%",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Col
          style={{
            width: 50,
            height: 50,
            marginTop: 16,
            alignItems: "center",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 170
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              marginTop: 3
            }}
            source={userImage}
          />
        </Col>
        <Col>
          <Text
            style={{
              fontSize: 14,
              marginTop: 6,
              marginLeft: 6
            }}
          >
            {title}
          </Text>
        </Col>
      </Col>
    );
  }
}

export default StoryComponent;
