import React from "react";
import { Container, Header, Left, Right, Content } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import ActivityComponent from "../components/HeartScreenComponents/ActivityComponent";
export default class HeartScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#FFFFFF", height: 80 }}>
          <Left
            style={{
              marginTop: 20,
              paddingHorizontal: 10
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Text style={{ fontSize: 25 }}>Activity</Text>
            </TouchableOpacity>
          </Left>
          <Right></Right>
        </Header>
        <Content>
          <Col style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20, marginTop: 12, marginBottom: -22 }}>
              This Week
            </Text>
          </Col>
          <ActivityComponent
            userImage={require("../assets/images/hk.jpg")}
            desc={` abbas.tahir_1214 liked your photo.`}
          />
          <ActivityComponent
            userImage={require("../assets/images/asa.jpg")}
            desc={` ch.nabeel_sattar liked your photo.`}
          />
          <ActivityComponent
            userImage={require("../assets/images/images.jpg")}
            desc={` marif012 liked your photo..`}
          />
          <ActivityComponent
            userImage={require("../assets/images/images1.jpg")}
            desc={` umair.asghar.1426876 liked your photo..`}
          />
          <Col style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20, marginTop: 12, marginBottom: -22 }}>
              This Month
            </Text>
          </Col>
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/elsa.jpg")}
            desc={" ahmadkhokhar25597 liked your photo."}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/pic1.jpg")}
            desc={
              " Follow shehzad890, fezi12 and others you know to see their photos and  videos."
            }
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/gjyg.jpg")}
            desc={" g.mustafa87 liked your photo."}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/jgguyy.jpg")}
            desc={" as_ad6199 liked your photo."}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/jhku.jpg")}
            desc={" muhammadfarhankhokhar liked your photo.."}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/jhg.jpg")}
            desc={" totally_siyapy liked your photo.."}
          />
          <Col style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20, marginTop: 12, marginBottom: -22 }}>
              This Year
            </Text>
          </Col>
          <ActivityComponent
            userImage={require("../assets/images/hk.jpg")}
            desc={` abbas.tahir_1214 liked your photo.`}
          />
          <ActivityComponent
            userImage={require("../assets/images/asa.jpg")}
            desc={` ch.nabeel_sattar liked your photo.`}
          />
          <ActivityComponent
            userImage={require("../assets/images/images.jpg")}
            desc={` marif012 liked your photo..`}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/elsa.jpg")}
            desc={" ahmadkhokhar25597 liked your photo."}
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/pic1.jpg")}
            desc={
              " Follow shehzad890, fezi12 and others you know to see their photos and  videos."
            }
          />
          <ActivityComponent
            day={"This Week"}
            userImage={require("../assets/images/gjyg.jpg")}
            desc={" g.mustafa87 liked your photo."}
          />
        </Content>
      </Container>
    );
  }
}

HeartScreen.navigationOptions = {
  header: null
};
