import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./src/navigation";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
