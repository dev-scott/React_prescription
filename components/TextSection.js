import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const TextSection = ({ navigation }) => {
  return (
    <View style={styles.contain_text}>
      <View style={styles.left}>
        <View style={styles.text_contain}>
          <Text style={styles.textP}>12</Text>
          <View style={styles.vuS}>
            <AntDesign name="arrowup" size={14} color="green" />
            <Text style={styles.textS}>
              2% <Text style={styles.epaisse}>today</Text>
            </Text>
          </View>
        </View>
        <Text>Patient appointments</Text>
      </View>
      <View style={styles.right}>
        <AntDesign
          onPress={() => navigation.navigate("LoginPage")}
          name="pluscircle"
          size={55}
          color="black"
        />
      </View>
    </View>
  );
};

export default TextSection;

const styles = StyleSheet.create({
  contain_text: {
    // backgroundColor: "#f4f4",
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },

  textP: {
    fontSize: 45
  },
  vuS: {
    backgroundColor: "#F7FFF6",
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 10,
    width: 80,
    // paddingHorizontal: 10,
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:5,
    paddingRight: 11
  },

  textS: {
    fontWeight: "normal"
  },
  epaisse: {
    opacity: 0.5
  },
  text_contain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  left: {
    flexDirection: "column"
  }
});
