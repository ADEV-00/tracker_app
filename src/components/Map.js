import React from "react";
import { Dimensions, Dimenstion } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { mapStyle } from "../config/mapStyle";

const { width, height } = Dimensions.get("window");

const defaultRoute = {
  latitude: 43.847891,
  longitude: 18.377144,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const Map = () => {
  return (
    <MapView
      style={styles.map}
      customMapStyle={mapStyle}
      initialRegion={defaultRoute}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
});

export default Map;
