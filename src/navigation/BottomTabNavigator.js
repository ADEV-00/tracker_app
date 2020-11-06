import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TrackCreate">
      <BottomTab.Screen name="TrackList" component={TrackListNavigator} />
      <BottomTab.Screen name="TrackCreate" component={TrackCreateNavigator} />
      <BottomTab.Screen name="Acount" component={AcountNavigator} />
    </BottomTab.Navigator>
  );
}

const TrackListStack = createStackNavigator();
function TrackListNavigator() {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
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
      />
    </TrackCreateStack.Navigator>
  );
}

const AcountStack = createStackNavigator();
function AcountNavigator() {
  return (
    <AcountStack.Navigator>
      <AcountStack.Screen name="TrackCreate" component={AccountScreen} />
    </AcountStack.Navigator>
  );
}
