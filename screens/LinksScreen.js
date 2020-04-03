import React from "react";
import { Container, Header, Left, Right, Content } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  FirstRoute,
  SecondRoute,
  getTabBarIcon
} from "../components/LinksScreenComponents/index";
import StoryComponent from "../components/HomeScreenComponents/StoryComponent";

export default class ProfileScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" }
    ]
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#FFFFFF", height: 70 }}>
          <Left
            style={{
              marginTop: 22,
              flexDirection: "row",
              alignItems: "flex-start",
              flex: 2
            }}
          >
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20 }}>Shehzadcs631</Text>
              <Icon
                name="chevron-down"
                style={{ marginTop: 12, fontSize: 15, marginLeft: 3 }}
              />
            </TouchableOpacity>
          </Left>
          <Right style={{ marginTop: 25 }}>
            <Icon
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
              name="menu"
              style={{ marginRight: 10, fontSize: 25 }}
            />
          </Right>
        </Header>

        <Content>
          <Grid style={{ flexDirection: "column" }}>
            <Row style={{ flexDirection: "row" }}>
              <Col
                style={{
                  width: "40%",
                  marginLeft: 10,
                  alignContent: "center"
                }}
              >
                <Image
                  style={{
                    height: 110,
                    width: 100,
                    marginTop: 10,
                    borderRadius: 180
                  }}
                  source={require("../assets/images/hk.jpg")}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    marginTop: 6,
                    marginLeft: 4
                  }}
                >
                  Shehzad Ahmed
                </Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  alignContent: "center",
                  marginLeft: -38
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "700",
                    marginTop: 60
                  }}
                >
                  10
                </Text>
                <Text style={{ fontSize: 15 }}>Posts</Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  alignContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "700",
                    marginTop: 60
                  }}
                >
                  95
                </Text>
                <Text style={{ fontSize: 15 }}>Followers</Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  alignContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "700",
                    marginTop: 60
                  }}
                >
                  166
                </Text>
                <Text style={{ fontSize: 15 }}>Following</Text>
              </Col>
            </Row>

            <Col
              style={{
                alignItems: "center",
                alignContent: "center",
                marginTop: 25,
                borderWidth: 1,
                width: "95%",
                marginLeft: 10,
                backgroundColor: "white",
                borderRadius: 7
              }}
            >
              <TouchableOpacity style={{ paddingBottom: 5, paddingTop: 5 }}>
                <Text
                  style={{
                    fontSize: 15,
                    alignSelf: "center"
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </Col>
            <Row
              style={{
                flexDirection: "row",
                borderBottomColor: "black"
              }}
            >
              <StoryComponent
                userImage={require("../assets/images/icons/plus-maths.png")}
                title={"Your Story"}
              />
              <StoryComponent
                userImage={require("../assets/images/jhg.jpg")}
                title={"tiger"}
              />
            </Row>
            <Row style={{ flexDirection: "row", marginTop: 25 }}>
              <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  first: FirstRoute,
                  second: SecondRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get("window").width }}
                renderTabBar={props => (
                  <TabBar
                    {...props}
                    tabStyle={styles.tabStyle}
                    style={styles.tab}
                    renderIcon={props => getTabBarIcon(props)}
                    indicatorStyle={styles.indicator}
                  />
                )}
              />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  tabStyle: {
    opacity: 1,
    backgroundColor: "#FFFFFF",
    height: 55,
    marginRight: 2,
    alignContent: "center",
    borderBottomWidth: 2,
    borderColor: "black"
  },
  tab: {
    backgroundColor: "#FFFFFF",
    paddingRight: 5,
    paddingLeft: 20,
    alignContent: "center"
  },
  indicator: {
    backgroundColor: "yellow",
    borderWidth: 10,
    borderColor: "white"
  }
});
ProfileScreen.navigationOptions = {
  header: null
};
