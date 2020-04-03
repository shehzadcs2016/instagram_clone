import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
// import { Video } from "expo";
import { Video } from "expo-av";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
export default class VideoComponent extends React.Component {
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
    const { width } = this.props;
    // alert(width);
    return (
      <View>
        <Video
          source={require("../assets/vodo.mp4")}
          shouldPlay={this.state.shouldPlay}
          resizeMode="cover"
          style={{ width: width, height: 262 }}
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
