import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Container, Header, Left, Right, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import CardComponent from "../components/HomeScreenComponents/CardComponent";
import StoryComponent from "../components/HomeScreenComponents/StoryComponent";

export default class HomeScreen extends React.Component {
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
              onPress={() => this.props.navigation.navigate("CameraScreen")}
            >
              <Icon
                name="camera"
                style={{ marginHorizontal: 3, fontSize: 25 }}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/images/icons/instagram.png")}
              style={{ marginHorizontal: 7 }}
            />
          </Left>
          <Right
            style={{
              marginTop: 30,
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("IGTVScreen")}
            >
              <Icon style={{ fontSize: 25, marginRight: 20 }} name="tv" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Send")}
            >
              <Icon style={{ fontSize: 25, marginRight: 10 }} name="send" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row
              style={{
                flexDirection: "row",
                borderBottomColor: "black"
              }}
            >
              <StoryComponent
                userImage={require("../assets/images/icons/plus-math.png")}
                title={"Your Story"}
              />
              <StoryComponent
                userImage={require("../assets/images/recommended_2.jpg")}
                title={"FilmStar"}
              />
              <StoryComponent
                userImage={require("../assets/images/rka.jpg")}
                title={"RKARoast"}
              />
            </Row>
          </Grid>

          <ScrollView>
            <CardComponent
              userImage={require("../assets/images/images23.jpg")}
              image={require("../assets/images/index.png")}
              user={"shehzad890"}
              instaUser={"kaptan98"}
              other={(1, 234)}
              onComment={() => this.props.navigation.navigate("Comment")}
              onSend={() => this.props.navigation.navigate("Send")}
            />
            <CardComponent
              userImage={require("../assets/images/jgguyy.jpg")}
              image={require("../assets/images/mjhk.jpg")}
              user={"elsa jean"}
              instaUser={"kaptan98"}
              other={(1, 234)}
            />
            <CardComponent
              userImage={require("../assets/images/jgguyy.jpg")}
              image={require("../assets/images/elsa.jpg")}
              user={"elsa jean"}
              instaUser={"kaptan98"}
              other={(1, 234)}
            />
            <CardComponent
              userImage={require("../assets/images/gjyg.jpg")}
              image={require("../assets/images/panda.jpg")}
              user={"shehzad890"}
              instaUser={"kaptan98"}
              other={(1, 234)}
            />
            <CardComponent
              userImage={require("../assets/images/hk.jpg")}
              image={require("../assets/images/images1.jpg")}
              user={"Fezii90"}
              instaUser={"Uganda"}
              other={(2, 234)}
            />
            <CardComponent
              userImage={require("../assets/images/images1.jpg")}
              image={require("../assets/images/jhku.jpg")}
              user={"dimple34"}
              instaUser={"faraz45"}
              other={(9, 234)}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};
