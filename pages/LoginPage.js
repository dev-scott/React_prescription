import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderLogin from "../components/Login/HeaderLogin";
import BodyContent from "../components/Login/BodyContent";
import SearchLogin from "../components/Login/SearchLogin";
import Button from "../components/Login/Button";
import MonButton from "../components/Login/Button";
import LottieView from "lottie-react-native";

const LoginPage = ({ navigation }) => {

  // componentDidMount() {
  //   this.animation.play();
  //   setTimeout(() => {
  //     this.props.navigation.navigate("HomePage");
  //   }, 3000);
  // }


  return (
    <View style={styles.contient}>
      <HeaderLogin navigation={navigation} />
      <View style={styles.animationContainer}>
      <LottieView       style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff"
          }}  source={require("../assets/person.json")} autoPlay loop />
      </View>
      <BodyContent />
      <SearchLogin />

      <MonButton />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:200,
  },
  contient:{

    marginTop:50,

  }
});

export default LoginPage;
