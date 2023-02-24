import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

class SplashScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
    setTimeout(() => {
      this.props.navigation.navigate("HomePage");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#fff"
          }}
          source={require("../assets/SplashScreen.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default SplashScreen;
