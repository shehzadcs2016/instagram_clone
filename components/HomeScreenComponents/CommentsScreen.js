import React from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Input,
  Content,
  Grid,
  Col,
  Footer
} from "native-base";
import { Image, Text, TouchableOpacity } from "react-native";
import Notify from "../CommentComponent/NotifyScreen";
import Icon from "react-native-vector-icons/Feather";

export default class CommentsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            height: 75,
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 0,
            borderBottomColor: "#FFFFFF"
          }}
        >
          <Left style={{ marginTop: 30, flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-left" style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, marginTop: 2, fontSize: 20 }}>
              Comments
            </Text>
          </Left>
          <Right
            style={{
              marginTop: 30,
              flex: 1,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Send")}
            >
              <Icon
                style={{ fontSize: 25, marginRight: 10, opacity: 0.5 }}
                name="send"
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Notify
            userImage={require("../../assets/images/csacas.jpg")}
            title={`rkaroast`}
            desc={"Hahahah"}
          />
          <Notify
            userImage={require("../../assets/images/images.jpg")}
            title={`malik_khalid_881`}
            desc={"Level h bhai"}
          />
          <Notify
            userImage={require("../../assets/images/hgju.jpg")}
            title={`fezii22`}
            desc={"beautiful"}
          />
          <Notify
            userImage={require("../../assets/images/csacas.jpg")}
            title={`rkaroast`}
            desc={"Sent a video"}
          />
          <Notify
            userImage={require("../../assets/images/images.jpg")}
            title={`malik_khalid_881`}
            desc={"Active 2h ago"}
          />
          <Notify
            userImage={require("../../assets/images/hgju.jpg")}
            title={`fezii22`}
            desc={"Active yesterday"}
          />
          <Notify
            userImage={require("../../assets/images/csacas.jpg")}
            title={`rkaroast`}
            desc={"Sent a video"}
          />
          <Notify
            userImage={require("../../assets/images/images.jpg")}
            title={`malik_khalid_881`}
            desc={"Active 2h ago"}
          />
          <Notify
            userImage={require("../../assets/images/hgju.jpg")}
            title={`fezii22`}
            desc={"Active yesterday"}
          />
        </Content>
        <Footer style={{ backgroundColor: "#ffffff", height: 50 }}>
          <Left>
            <Grid>
              <Col
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 5,
                  // marginTop: 20,
                  // flex: 1,8
                  width: "14%"
                  //   backgroundColor: "black"
                  // overflow: "hidden",
                }}
              >
                <Image
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 80
                    // marginTop: 10
                  }}
                  source={require("../../assets/images/aas.png")}
                />
              </Col>
              <Col style={{ flexDirection: "row" }}>
                <Col>
                  <Input
                    placeholder="Add a Comment"
                    style={{ opacity: 0.5, fontSize: 14 }}
                  />
                </Col>
                <Col
                  style={{
                    // backgroundColor: "green",
                    alignContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                >
                  <TouchableOpacity style={{ marginTop: 14, marginRight: 9 }}>
                    <Text style={{ color: "blue" }}>Post</Text>
                  </TouchableOpacity>
                </Col>
              </Col>
            </Grid>
          </Left>
        </Footer>
      </Container>
    );
  }
}

CommentsScreen.navigationOptions = {
  header: null
};
