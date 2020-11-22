import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Context as LocationContext } from "../context/LocationContext";

const { width, height } = Dimensions.get("window");

const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle ? (
        <>
          <View style={styles.formWrapper}>
            <TextInput
              value={name}
              placeholder="Enter name"
              placeholderTextColor="#FFF"
              style={styles.textInput}
              onChangeText={changeName}
            />
            <TouchableOpacity onPress={startRecording}>
              <View style={styles.recordBtn}>
                <Text style={styles.btnText}>Start</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => setToggle(false)}
          >
            <FontAwesome
              name="close"
              size={35}
              color="#2D2C45"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => setToggle(true)}
        >
          <FontAwesome5
            name="play"
            size={25}
            color="#2D2C45"
            style={{ transform: [{ rotate: "-45deg" }] }}
          />
        </TouchableOpacity>
      )}
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
  btnWrapper: {
    position: "absolute",
    bottom: height / 10,
    left: width / 2 - 28,
    width: 50,
    height: 50,
    backgroundColor: "#3AEBF6",
    zIndex: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
    elevation: 4,
  },
});

export default TrackForm;
