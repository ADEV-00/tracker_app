import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = true;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              borderRadius: 15,
            },
          }}
        >
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={AccountScreen}
                options={{
                  title: "Account Settings",
                }}
              />
              <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
              <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
              <Stack.Screen name="TrackList" component={TrackListScreen} />
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
      </NavigationContainer>
    </>
  );
}
