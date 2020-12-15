import React, { isValidElement, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTracks();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View style={{ backgroundColor: "#2C2B44", flex: 1 }}>
        {/*   <Text>Track List Screen</Text>
      <Button
        title="Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      /> */}
        <Text
          style={{
            marginVertical: 40,
            fontSize: 40,
            fontWeight: "bold",
            alignSelf: "center",
            color: "white",
          }}
        >
          Track List
        </Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemwrapper}>
                <Text>Icon</Text>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.btnMore}
                  onPress={() =>
                    navigation.navigate("TrackDetail", { _id: item._id })
                  }
                >
                  <Text style={{ fontSize: 16, color: "#01ABC7" }}>More</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemwrapper: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#252539",
    marginBottom: 25,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  btnMore: {
    borderWidth: 1,
    borderColor: "#01ABC7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    backgroundColor: "#252539",
  },
});

export default TrackListScreen;
