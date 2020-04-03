import React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
export default class IGTV extends React.Component {
  state = {
    mute: true,
    shouldPlay: true
  };

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  };

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute
    }));
  };

  render() {
    return (
      <View>
        <Video
          source={require("../../assets/vodo1.mp4")}
          shouldPlay={this.state.shouldPlay}
          resizeMode="cover"
          style={{ width: 240, height: 262 }}
          isMuted={this.state.mute}
        />
        <View style={styles.controlBar}>
          <MaterialIcons
            name={this.state.mute ? "volume-mute" : "volume-up"}
            size={45}
            color="white"
            onPress={this.handleVolume}
          />
          <MaterialIcons
            name={this.state.shouldPlay ? "pause" : "play-arrow"}
            size={45}
            color="white"
            onPress={this.handlePlayAndPause}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  controlBar: {
    position: "absolute",
    marginTop: 90,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});
