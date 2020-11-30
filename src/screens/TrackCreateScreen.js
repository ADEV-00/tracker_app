import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, callback);

  return (
    <View>
      <TrackForm style={styles.trackForm} />
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
  trackForm: {
    zIndex: 100,
  },
});

export default TrackCreateScreen;
