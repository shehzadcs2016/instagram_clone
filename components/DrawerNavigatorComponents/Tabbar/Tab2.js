import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
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
import Notify from "./NotifyScreen";

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

export default class Tab2 extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Notify
            userImage={require("../../../assets/images/hk.jpg")}
            title={`Elsa_Jean`}
            desc1={"Elsa Jean"}
            desc2={"Follow"}
          />
          <Notify
            userImage={require("../../../assets/images/asa.jpg")}
            title={`zoni_dool`}
            desc1={"Zoni Shah"}
            desc2={"Follow"}
          />
          <Notify
            userImage={require("../../../assets/images/aas.png")}
            title={`Pent_Jean`}
            desc1={"Pent Jean"}
            desc2={"Follow"}
          />
          <Notify
            userImage={require("../../../assets/images/as.jpg")}
            title={`Aliya23`}
            desc1={"Aliya Khan"}
            desc2={"Follow"}
          />
        </Content>
      </Container>
    );
  }
}
