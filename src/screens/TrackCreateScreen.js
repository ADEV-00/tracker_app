import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <View>
      <Map />
      {err ? (
        <Text style={styles.locationErr}>Pleas Enable Location Services</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  locationErr: {
    position: "absolute",
    top: 300,
    left: 50,
    zIndex: 100,
    width: 300,
    height: 60,
    fontSize: 22,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default TrackCreateScreen;
