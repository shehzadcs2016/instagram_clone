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
export default class Saved extends React.Component {
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
          <Right
            style={{
              marginTop: 30,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity>
              <Icon style={{ fontSize: 25 }} name="plus" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Grid style={{ flexDirection: "column" }}>
            <Col3
              height={200}
              imageUri1={require("../../assets/images/pic1.jpg")}
              imageUri2={require("../../assets/images/jgguyy.jpg")}
              imageUri3={require("../../assets/images/mjhk.jpg")}
            />
            <Col3
              height={200}
              imageUri1={require("../../assets/images/gjyg.jpg")}
              imageUri2={require("../../assets/images/images1.jpg")}
              imageUri3={require("../../assets/images/thdssd.jpg")}
            />
            <Col3
              height={200}
              imageUri1={require("../../assets/images/imagese.jpg")}
              imageUri2={require("../../assets/images/index.png")}
              imageUri3={require("../../assets/images/hk.jpg")}
            />
          </Grid>
        </Content>
      </Container>
    );
  }
}

Saved.navigationOptions = {
  header: null
};
