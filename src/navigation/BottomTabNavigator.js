import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TrackCreate"
      tabBarOptions={{
        style: {
          backgroundColor: "#2C2B44",
          height: "8%",
          borderTopColor: "transparent",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        },
        activeTintColor: "#3AEBF6",
      }}
    >
      <BottomTab.Screen
        name="TrackList"
        component={TrackListNavigator}
        options={{
          tabBarLabel: "Tracks",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="th-list" color="#3AEBF6" size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Add Track",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color="#3AEBF6" size={size} />
          ),
        }}
        name="TrackCreate"
        component={TrackCreateNavigator}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color="#3AEBF6" size={size} />
          ),
        }}
        name="Acount"
        component={AcountNavigator}
      />
    </BottomTab.Navigator>
  );
}

const TrackListStack = createStackNavigator();
function TrackListNavigator() {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ headerShown: false }}
      />
    </TrackListStack.Navigator>
  );
}

const TrackCreateStack = createStackNavigator();
function TrackCreateNavigator() {
  return (
    <TrackCreateStack.Navigator>
      <TrackCreateStack.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ headerShown: false }}
      />
    </TrackCreateStack.Navigator>
  );
}

const AcountStack = createStackNavigator();
function AcountNavigator() {
  return (
    <AcountStack.Navigator>
      <AcountStack.Screen
        name="TrackCreate"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </AcountStack.Navigator>
  );
}
