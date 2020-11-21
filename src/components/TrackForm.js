import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const TrackForm = () => {
  return (
    <>
      <View style={styles.formWrapper}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#FFF"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => console.log("CLICK")}>
          <View style={styles.recordBtn}>
            <Text style={styles.btnText}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    alignSelf: "center",
    position: "absolute",
    width: width / 1.3,
    zIndex: 100,
    backgroundColor: "#2D2C45",
    height: height / 4,
    top: width / 2,
    borderRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 35,
    justifyContent: "space-around",
  },
  textInput: {
    backgroundColor: "#252539",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "white",
  },
  recordBtn: {
    width: 150,
    height: 40,
    backgroundColor: "#3AEBF6",
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    color: "#252539",
    fontSize: 22,
  },
});

export default TrackForm;
