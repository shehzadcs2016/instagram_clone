import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Container, Header, Left, Right, Content } from "native-base";
import { Grid } from "react-native-easy-grid";
import Col3 from "../SearchScreenComponents/Col3Component";
export default class Archieve extends React.Component {
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
                Stories Archieve
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
          <Grid style={{ flexDirection: "column" }}>
            <Col3
              height={200}
              imageUri1={require("../../assets/images/gjyg.jpg")}
              imageUri2={require("../../assets/images/images1.jpg")}
              imageUri3={require("../../assets/images/thdssd.jpg")}
            />
            <Col3
              height={200}
              imageUri1={require("../../assets/images/pic1.jpg")}
              imageUri2={require("../../assets/images/jgguyy.jpg")}
              imageUri3={require("../../assets/images/mjhk.jpg")}
            />
            <Col3
              height={200}
              imageUri1={require("../../assets/images/imagese.jpg")}
              imageUri2={require("../../assets/images/index.png")}
              imageUri3={require("../../assets/images/hk.jpg")}
            />
            <Text
              style={{
                flex: 1,
                opacity: 0.5,
                fontSize: 12,
                marginLeft: 20,
                // alignSelf: "center",
                marginTop: 10
              }}
            >
              Only You can see your memories and archieved stories unless
              <Text style={{ opacity: 0.5, marginTop: 5 }}>
                you choose to share them
              </Text>
            </Text>
          </Grid>
        </Content>
      </Container>
    );
  }
}

Archieve.navigationOptions = {
  header: null
};
