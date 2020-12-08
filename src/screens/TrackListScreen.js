import React, { isValidElement, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTracks();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text>Track List Screen</Text>
      <Button
        title="Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
