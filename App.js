import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Splash from "./components/SplashScreen";
import PrescriptionPage from "./pages/PrescriptionPage";

import { ThemeProvider } from "./contexts/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer independent="true">
      {/* <StatusBar hidden={true} /> */}
      <Stack.Navigator
        screenOptions={{
          headerStatusBarHeight: 0
        }}
        initialRouteName="Splash"
        headerMode="none"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PrescriptionPage" component={PrescriptionPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
