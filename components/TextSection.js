import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";

const styles = isDarkMode => ({
  contain_text: {
    backgroundColor: isDarkMode ? "#273E47" : "#F8F8F8",
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },

  textP: {
    fontSize: 45,
    color: isDarkMode ? "#fff" : "#000",

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
    paddingLeft: 5,
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
    flexDirection: "column",
    color: isDarkMode ? "#fff" : "#000",
  },
  patient:{

    color: isDarkMode ? "#fff" : "#000",

  }
});

const TextSection = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const {
    contain_text,
    textP,
    right,
    vuS,
    textS,
    epaisse,
    text_contain,
    patient,
    left
  } = styles(isDarkMode);

  return (
    <View style={contain_text}>
      <View style={left}>
        <View style={text_contain}>
          <Text style={textP}>12</Text>
          <View style={vuS}>
            <AntDesign name="arrowup" size={14} color="green" />
            <Text style={textS}>
              2% <Text style={epaisse}>today</Text>
            </Text>
          </View>
        </View>
        <Text style={patient}>Patient appointments</Text>
      </View>
      <View style={right}>
        <AntDesign
          onPress={() => navigation.navigate("LoginPage")}
          name="pluscircle"
          size={55}
          color={isDarkMode ? "#fff" : "#273E47"}
        />
      </View>
    </View>
  );
};

export default TextSection;
