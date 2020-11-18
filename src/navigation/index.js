import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useContext } from "react";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { Context as AuthContext } from "../context/AuthContext";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const isLoggedIn = false;

function RootNavigator() {
  const { state, restoreToken } = useContext(AuthContext);
  console.log(state.token);
  return (
    <Stack.Navigator>
      {state.token != null ? (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
