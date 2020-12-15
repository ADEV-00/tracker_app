import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { mapStyle } from "../config/mapStyle";

const { width, height } = Dimensions.get("window");

const TrackDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(TrackContext);
  const _id = route.params?._id ?? "defaultValue";

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <MapView
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline
          strokeWidth={4}
          strokeColor="rgba(0, 176, 238, 0.7)"
          coordinates={track.locations.map((loc) => loc.coords)}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
  },
});

export default TrackDetailScreen;
