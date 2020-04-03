import React from "react";
import { ScrollView, Text, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Container, Header, Left, Right, Content } from "native-base";
import { Grid } from "react-native-easy-grid";
import IGTV from "../VideoComponent";
import Row1 from "../IGTVComponents/IG1";
export default class IGTVScreen extends React.Component {
  render() {
    const { width } = Dimensions.get("window");

    return (
      <Container>
        <Header
          style={{
            height: 75,
            backgroundColor: "black",
            borderBottomWidth: 0,
            borderBottomColor: "#FFFFFF"
          }}
        >
          <Left style={{ marginTop: 30, flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="arrow-left"
                style={{ marginHorizontal: 3, fontSize: 25, color: "white" }}
              />
            </TouchableOpacity>
            <Text
              style={{ color: "white", marginHorizontal: 10, marginTop: 2 }}
            >
              IGTV
            </Text>
          </Left>
          <Right
            style={{
              marginTop: 30,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity>
              <Icon
                style={{ fontSize: 25, marginRight: 20, color: "white" }}
                name="search"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={{ fontSize: 25, marginRight: 10, color: "white" }}
                name="plus"
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Grid style={{ marginBottom: 1 }}>
            <ScrollView>
              <IGTV width={width} />
              <Row1 />
              <Row1 />
              <Row1 />
              <Row1 />
            </ScrollView>
          </Grid>
        </Content>
      </Container>
    );
  }
}

IGTVScreen.navigationOptions = {
  header: null
};
