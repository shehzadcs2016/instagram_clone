import React from "react";
import { Container, Item, Input, Content } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import { Grid } from "react-native-easy-grid";
import Col1 from "../components/SearchScreenComponents/Col1Component";
import Col2 from "../components/SearchScreenComponents/Cols2Component";
import Col3 from "../components/SearchScreenComponents/Col3Component";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid style={{ marginBottom: 1 }}>
            <Col1
              imageUri1={require("../assets/images/jgguyy.jpg")}
              imageUri2={require("../assets/images/hk.jpg")}
            />
            <Col2 />
          </Grid>
          <Grid style={{ flexDirection: "column", marginBottom: 1 }}>
            <Col3
              height={170}
              imageUri1={require("../assets/images/imagese.jpg")}
              imageUri2={require("../assets/images/images.jpg")}
              imageUri3={require("../assets/images/thdssd.jpg")}
            />
            <Col3
              height={170}
              imageUri1={require("../assets/images/as.jpg")}
              imageUri2={require("../assets/images/gjygyiu.jpg")}
              imageUri3={require("../assets/images/gjyg.jpg")}
            />
          </Grid>
          <Grid style={{ marginBottom: 1 }}>
            <Col2 />
            <Col1
              imageUri1={require("../assets/images/hgju.jpg")}
              imageUri2={require("../assets/images/photo.jpg")}
            />
          </Grid>
        </Content>
      </Container>
    );
  }
}

SearchScreen.navigationOptions = {
  title: "",
  headerLeft: (
    <Item>
      <Icon
        name="search"
        style={{ fontSize: 20, marginLeft: 10, fontWeight: "700" }}
      />
      <Input placeholder="Search" style={{ fontSize: 20, flex: 1 }} />
    </Item>
  ),
  headerRight: (
    <Icon name="maximize" style={{ marginRight: 10, fontSize: 30 }} />
  )
};
