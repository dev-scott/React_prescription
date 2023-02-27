import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";

const styles = (isDarkMode, themeStyle) => ({
  header: {
    // backgroundColor: isDarkMode ? "#071E22":"#F8F8F8",
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,

    ...themeStyle
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  headerFirst: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  headerSecond: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  darkMode: {
    height: 30,
    width: 50,
    backgroundColor: isDarkMode ? "#273E47" : "#fff",
    // color: isDarkMode ? "#000" : "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },

});

const Header = ({ title }) => {
  const { isDarkMode, toggleDarkMode, themeStyle } = useContext(ThemeContext);

  const { header, darkMode, headerFirst, headerText, headerSecond } = styles(
    isDarkMode , themeStyle,     {
      backgroundColor: isDarkMode ? "#071E22" : "#F8F8F8",
      transitionDuration: "500ms",
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-in-out",
    }
  );

  return (
    <View style={header}>
      <View style={headerFirst}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </View>

      <View style={darkMode}>
        <FontAwesome
          name={isDarkMode ? "sun-o" : "moon-o"}
          size={24}
          color={isDarkMode ? "#fff" : "#000"}
          onPress={toggleDarkMode}
        />
      </View>
      <View style={headerSecond}>
        <FontAwesome name="bell" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
