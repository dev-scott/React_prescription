import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HeaderLogin = ({ navigation }) => {
  return (
    <View style={styles.containe}>
      <View style={styles.scott}>
        <AntDesign
          onPress={() => navigation.navigate("HomePage")}
          name="arrowleft"
          size={24}
          color="black"
        />
        <Text>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containe: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  scott: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%"
  }
});

export default HeaderLogin;
