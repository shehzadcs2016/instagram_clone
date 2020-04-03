import React from "react";
import Camera from "../components/HomeScreenComponents/Camera";
export default class AddScreen extends React.Component {
  render() {
    return <Camera />;
  }
}

AddScreen.navigationOptions = {
  header: null
};
