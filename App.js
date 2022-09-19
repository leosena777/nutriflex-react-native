import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";

export default function App() {
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/logo.png"),
  ];

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
