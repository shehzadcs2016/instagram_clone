import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
const AnimatedIcon = Animatable.createAnimatableComponent(Icon);
class LikedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };

    this.lastPress = 0;
  }

  handleLargeAnimatedIconRef = ref => {
    this.largeAnimatedIcon = ref;
  };

  handleSmallAnimatedIconRef = ref => {
    this.smallAnimatedIcon = ref;
  };

  // Function that handles the animation of both small and bigger heart
  animateIcon = () => {
    const { liked } = this.state;
    // Firstly, we stop any occuring animation
    this.largeAnimatedIcon.stopAnimation();

    if (liked) {
      // If the Photo is already liked, there's a different animation for a small heart icon, it's a little subtle animation
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => this.largeAnimatedIcon.bounceOut());
      this.smallAnimatedIcon.pulse(200);
    } else {
      /* The Animation chain for the main animation when liking the photo occurs by double tapping
      Each animation is returning a promise, that's why we can chain them in a smooth sequence of animations */
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => {
          this.largeAnimatedIcon.bounceOut();
          this.smallAnimatedIcon.bounceIn();
        })
        .then(() => {
          if (!liked) {
            this.setState(prevState => ({ liked: !prevState.liked }));
          }
        });
    }
  };

  handleOnPress = () => {
    const time = new Date().getTime();
    // This delta determines time passed since last press on the photo
    const delta = time - this.lastPress;
    const doublePressDelay = 400;

    if (delta < doublePressDelay) {
      // If the delta is less than specified doublePressDelay value, it fires the function for animations
      this.animateIcon();
    }
    this.lastPress = time;
  };

  handleOnPressLike = () => {
    /* This is a separate function for liking the photo, 
    it activates only smart heart animation and it's invoked by pressing small icon */
    this.smallAnimatedIcon.bounceIn();
    this.setState(prevState => ({ liked: !prevState.liked }));
  };

  render() {
    const { liked } = this.state;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.card}
        onPress={this.handleOnPress}
      >
        <TouchableOpacity activeOpacity={1} onPress={this.handleOnPressLike}>
          <AnimatedIcon
            ref={this.handleSmallAnimatedIconRef}
            name={liked ? "heart" : "hearto"}
            color={liked ? colors.heartColor : colors.textPrimary}
            style={styles.icon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const colors = {
  transparent: "transparent",
  white: "#fff",
  heartColor: "#e92f3c",
  textPrimary: "#515151",
  black: "#000"
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 30,
    marginHorizontal: 10
  }
});

export default LikedComponent;
