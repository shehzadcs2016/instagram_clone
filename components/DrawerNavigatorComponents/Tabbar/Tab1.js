import React from "react";
import { Text } from "react-native";
import Notify from "./NotifyScreen";

import { Container, Content } from "native-base";
export const getTabBarIcon = props => {
  const { route } = props;

  if (route.key === "first") {
    return <Text style={{ fontSize: 18 }}>Suggested</Text>;
  } else {
    return <Text style={{ fontSize: 18 }}>Discover</Text>;
  }
};

export class Tab1 extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Notify
            userImage={require("../../../assets/images/hk.jpg")}
            title={`Elsa_Jean`}
            desc1={"Elsa Jean"}
            desc2={"Suggested For U"}
          />
          <Notify
            userImage={require("../../../assets/images/asa.jpg")}
            title={`zoni_dool`}
            desc1={"Zoni Shah"}
            desc2={"Suggested For U"}
          />
          <Notify
            userImage={require("../../../assets/images/aas.png")}
            title={`Pent_Jean`}
            desc1={"Pent Jean"}
            desc2={"Suggested For U"}
          />
          <Notify
            userImage={require("../../../assets/images/as.jpg")}
            title={`Aliya23`}
            desc1={"Aliya Khan"}
            desc2={"Suggested For U"}
          />
        </Content>
      </Container>
    );
  }
}
