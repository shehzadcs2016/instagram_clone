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
import Col3 from "../SearchScreenComponents/Col3Component";
export default class CloseFriend extends React.Component {
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
            <Text style={{ marginHorizontal: 10, fontSize: 18 }}>Saved</Text>
          </Left>
        </Header>
      </Container>
    );
  }
}

CloseFriend.navigationOptions = {
  header: null
};
