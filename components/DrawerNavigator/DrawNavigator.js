import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import {
  Container,
  Header,
  Left,
  Content,
  Grid,
  Col,
  Footer
} from "native-base";
import { Text, TouchableOpacity } from "react-native";
export default class CustomDrawerContentComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#fffff", height: 60, marginTop: 10 }}
        >
          <Left style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                fontStyle: "italic"
              }}
            >
              shehzadcs631
            </Text>
          </Left>
        </Header>
        <Content>
          <Grid style={{ flexDirection: "column" }}>
            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                marginTop: 5
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this.props.navigation.navigate("Archieve")}
              >
                <Icon name="ios-timer" style={{ fontSize: 30, marginTop: 5 }} />
                <Text
                  style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
                >
                  Archieve
                </Text>
              </TouchableOpacity>
            </Col>
            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                marginTop: 5
              }}
            >
              <Icons name="maximize" style={{ fontSize: 30, marginTop: 5 }} />
              <Text
                style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
              >
                Nametag
              </Text>
            </Col>
            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                marginTop: 5
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this.props.navigation.navigate("Saved")}
              >
                <Icons name="bookmark" style={{ fontSize: 30, marginTop: 5 }} />
                <Text
                  style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
                >
                  Saved
                </Text>
              </TouchableOpacity>
            </Col>

            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                marginTop: 5
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Archieve")}
                style={{ flexDirection: "row" }}
              >
                <Icon name="ios-list" style={{ fontSize: 30, marginTop: 5 }} />
                <Text
                  style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
                >
                  Close Friends
                </Text>
              </TouchableOpacity>
            </Col>

            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                marginTop: 5
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this.props.navigation.navigate("Discover")}
              >
                <Icon3 name="people" style={{ fontSize: 30, marginTop: 5 }} />
                <Text
                  style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
                >
                  Discover People
                </Text>
              </TouchableOpacity>
            </Col>

            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                marginTop: 5
              }}
            >
              <Icons name="facebook" style={{ fontSize: 30, marginTop: 5 }} />
              <Text
                style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
              >
                Open Facebook
              </Text>
            </Col>
          </Grid>
        </Content>
        <Footer
          style={{
            backgroundColor: "#fffff",
            height: 60,
            marginTop: 10,

            borderColor: "#fffff"
          }}
        >
          <Left style={{ flex: 1, flexDirection: "row" }}>
            <Grid style={{ borderTopWidth: 1 }}>
              <Col
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  marginTop: 5
                }}
              >
                <Icons name="settings" style={{ fontSize: 30, marginTop: 5 }} />
                <Text
                  style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
                >
                  Settings
                </Text>
              </Col>
            </Grid>
          </Left>
        </Footer>
      </Container>
    );
  }
}
// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     LinkScreen: LinkScreen,
//     HeartScreen: HeartScreen
//   },
//   {
//     drawerWidth: 200,
//     drawerPosition: "right",
//     drawerType: "slide",
//     contentComponent: CustomDrawerContentComponent,
//     contentOptions: {
//       activeTintColor: "black",
//       itemsContainerStyle: {
//         marginVertical: 0
//       },
//       iconContainerStyle: {
//         opacity: 1
//       }
//     }
//   }
// );

// export default MyDrawerNavigator;
