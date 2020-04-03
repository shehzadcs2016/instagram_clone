import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
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
import { Col, Row, Grid } from "react-native-easy-grid";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Tab1, getTabBarIcon } from "./Tabbar/Tab1";
import Tab2 from "./Tabbar/Tab2";

export default class Discover extends React.Component {
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
        <Header
          style={{
            height: 75,
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 0,
            borderBottomColor: "#FFFFFF"
          }}
        >
          <Left
            style={{
              marginTop: 30,
              flex: 1,
              flexDirection: "row"
              //   backgroundColor: "black"
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="arrow-left"
                style={{ marginHorizontal: 3, fontSize: 25 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
                Find People
              </Text>
              <Icon
                name="chevron-down"
                style={{ fontSize: 25, marginTop: 3 }}
              />
            </TouchableOpacity>
          </Left>
          <Right
            style={{
              marginTop: 30,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity>
              <Icon style={{ fontSize: 25 }} name="more-vertical" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row style={{ flexDirection: "row", marginTop: 15 }}>
              <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  first: Tab1,
                  second: Tab2
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get("window").width }}
                renderTabBar={props => (
                  <TabBar
                    indicatorStyle={styles.indicator}
                    {...props}
                    tabStyle={styles.tabStyle}
                    style={styles.tab}
                    renderIcon={props => getTabBarIcon(props)}
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
    opacity: 0.5,
    // backgroundColor: "black",
    height: 50

    // marginRight: 2,
    // alignContent: "center",
    // borderBottomWidth: 2,
    // borderColor: "black"
  },
  tab: {
    backgroundColor: "#FFFFFF"
    // paddingRight: 5,
    // paddingLeft: 20,
    // alignContent: "center"
  },
  indicator: {
    backgroundColor: "black"
    // borderWidth: 10,
    // borderColor: "white"
  }
});
Discover.navigationOptions = {
  header: null
};
