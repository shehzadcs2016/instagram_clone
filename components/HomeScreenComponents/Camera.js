import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import RevIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CrossIcon from "react-native-vector-icons/Entypo";
import EnergyIcon from "react-native-vector-icons/SimpleLineIcons";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View style={{ flex: 1 }}>
          <Header
            backgroundColor="black"
            leftComponent={
              <TouchableOpacity onPress={() => {}}>
                <Icon name="settings" type="Ionicons" size={25} color="white" />
              </TouchableOpacity>
            }
            centerComponent={
              <TouchableOpacity onPress={() => {}}>
                <EnergyIcon
                  name="energy"
                  type="Ionicons"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            }
            rightComponent={
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <CrossIcon name="cross" size={35} color="white" />
              </TouchableOpacity>
            }
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "flex-end",
            // alignContent: "center"
            alignSelf: "center",
            width: "50%",
            marginRight: -100
          }}
        >
          <TouchableOpacity
            style={{
              marginBottom: 39
            }}
            onPress={() => {
              alert("pic has captured");
            }}
          >
            <Icon name="circle" style={{ fontSize: 82, color: "white" }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 59,
              marginLeft: 23
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <RevIcon
              name="camera-party-mode"
              style={{ fontSize: 42, color: "white" }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
// export default class CameraScreen extends React.Component {
//   render() {
//     return (
//       // {this.CameraComp()}
//       <Text>Hello</Text>
//     );
//   }
// }

CameraScreen.navigationOptions = {
  header: null
};
