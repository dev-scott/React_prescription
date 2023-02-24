import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerFirst}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </View>
      <View style={styles.headerSecond}>
        <FontAwesome name="bell" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#f3f",
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20
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
  }
});

export default Header;
