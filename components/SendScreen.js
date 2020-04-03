import React from "react";
// import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { ExpoLinksView } from "@expo/samples";
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
  CardItem,
  Grid,
  Col
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
// import ActivityComponent from "./ActivityComponent";
import Notify from "./NotifyScreen";
import Icon from "react-native-vector-icons/Feather";

// import { TouchableHighlight } from "react-native-gesture-handler";
export default class SendScreen extends React.Component {
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
          <Left style={{ marginTop: 30, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-left" style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, marginTop: 2, fontSize: 20 }}>
              Direct
            </Text>
          </Left>
          <Right
            style={{
              marginTop: 30,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity>
              <Icon style={{ fontSize: 25, marginRight: 20 }} name="video" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={{ fontSize: 25, marginRight: 10 }} name="edit" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Grid style={{ flexDirection: "column" }}>
            <Col
              style={{
                marginTop: 25,
                borderBottomWidth: 0.5,
                width: "95%",
                marginLeft: 10,
                borderRadius: 7,
                padding: 0,
                margin: 0
              }}
            >
              <TouchableOpacity>
                <Item>
                  <Icon name="search" style={{ fontSize: 16 }} />
                  <Input placeholder="Search" />
                  {/* <Icon name="people" /> */}
                </Item>
              </TouchableOpacity>
            </Col>
          </Grid>

          <Notify
            userImage={require("../assets/images/as.jpg")}
            title={`Elsa Jean`}
            desc={"Sent a video"}
          />

          <Notify
            userImage={require("../assets/images/gjyg.jpg")}
            title={`fezii22`}
            desc={"Active yesterday"}
          />
          <Notify
            userImage={require("../assets/images/imagese.jpg")}
            title={`Ahmed Bhai`}
            desc={"kese ho bhai?"}
          />
          <Notify
            userImage={require("../assets/images/images.jpg")}
            title={`malik_khalid_881`}
            desc={"Active 2h ago"}
          />
          <Notify
            userImage={require("../assets/images/jhg.jpg")}
            title={`ali22`}
            desc={"Active yesterday"}
          />
          <Notify
            userImage={require("../assets/images/csacas.jpg")}
            title={`rkaroast`}
            desc={"Sent a video"}
          />
          <Notify
            userImage={require("../assets/images/images1.jpg")}
            title={`malik_khalid_881`}
            desc={"Active 2h ago"}
          />
          <Notify
            userImage={require("../assets/images/hgju.jpg")}
            title={`fezii22`}
            desc={"Active yesterday"}
          />
        </Content>
      </Container>
    );
  }
}

SendScreen.navigationOptions = {
  header: null
};
