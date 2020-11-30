import React, { useContext } from "react";
import { Dimensions, Dimenstion } from "react-native";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { mapStyle } from "../config/mapStyle";
import { Context as LocationContext } from "../context/LocationContext";

const { width, height } = Dimensions.get("window");

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator site="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      customMapStyle={mapStyle}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeColor="rgba(0, 176, 238, 1.0)"
        fillColor="rgba(0, 176, 238, 1.0)"
      />
      <Polyline
        coordinates={locations.map((loc) => loc.coords)}
        strokeWidth={4}
        strokeColor="rgba(0, 176, 238, 0.7)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
});

export default Map;
