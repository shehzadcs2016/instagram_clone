import React from "react";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
// import { StyleSheet } from "react-native";
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
export default class PhotoCard extends React.Component {
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
        <AnimatedIcon
          ref={this.handleLargeAnimatedIconRef}
          name="heart"
          color={colors.white}
          size={80}
          style={styles.animatedIcon}
          duration={500}
          delay={200}
        />
        <Image
          style={styles.image}
          source={card.photo}
          resizeMode="cover"
          style={{ backgroundColor: "black" }}
        />
        <View style={styles.photoDescriptionContainer}>
          <TouchableOpacity activeOpacity={1} onPress={this.handleOnPressLike}>
            <AnimatedIcon
              ref={this.handleSmallAnimatedIconRef}
              name={liked ? "heart" : "hearto"}
              color={liked ? colors.heartColor : colors.textPrimary}
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.polaroidTextContainer}>
            <Text style={styles.text}>Photo by: </Text>
            <Text style={[styles.text, styles.textPhotographer]}>
              {card.photographer}
            </Text>
          </View>
        </View>
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

const card = {
  photographer: "Patrycja",
  photo: {
    uri:
      "https://instagram.fqyy1-1.fna.fbcdn.net/vp/3c9a078e2ca06b6f23495a58f4d5790e/5D38A6B6/t51.2885-15/e35/56706298_321117518554648_5665440507722377382_n.jpg?_nc_ht=instagram.fqyy1-1.fna.fbcdn.net"
  },
  key: "pkarniej"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    height: 345,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2
  },
  image: {
    marginTop: 10,
    height: 280,
    width: "92%"
  },
  photoDescriptionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  animatedIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    borderRadius: 160,
    opacity: 0
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    backgroundColor: colors.transparent,
    color: colors.textPrimary
  },
  textPhotographer: {
    fontWeight: "bold",
    textAlign: "center"
  },
  polaroidTextContainer: {
    flexDirection: "row",
    textAlign: "left",
    paddingTop: 0
  }
});
