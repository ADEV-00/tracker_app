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
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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

  //Vary bad toggle handling !!!!
  let toggleRecStopIcon;
  let toggleRecStopFunction;
  if (recording && toggle === false) {
    toggleRecStopIcon = "stop";
    toggleRecStopFunction = stopRecording;
  } else {
    toggleRecStopIcon = "play";
    toggleRecStopFunction = () => setToggle(true);
  }
  return (
    <>
      {toggle ? (
        <>
          <View style={styles.formWrapper}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#5E5E85",
                marginBottom: 15,
                fontSize: 20,
              }}
            >
              Choose exercise
            </Text>
            <View style={styles.btnListWrapper}>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => changeName("Walking")}
              >
                <FontAwesome5 name="walking" size={40} color="#5E5E85" />
                <Text style={styles.btnActionText}>Walking</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => changeName("Running")}
              >
                <FontAwesome5 name="running" size={40} color="#5E5E85" />
                <Text style={styles.btnActionText}>Running</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnAction}
                onPress={() => changeName("Biking")}
              >
                <FontAwesome5 name="bicycle" size={35} color="#5E5E85" />
                <Text style={styles.btnActionText}>Biking</Text>
              </TouchableOpacity>
            </View>
            {/* <TextInput
              value={name}
              placeholder="Enter name"
              placeholderTextColor="#FFF"
              style={styles.textInput}
              onChangeText={changeName}
            /> */}
            <TouchableOpacity
              onPress={() => {
                startRecording();
                setToggle(false);
              }}
            >
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
          onPress={toggleRecStopFunction}
        >
          <FontAwesome5
            name={toggleRecStopIcon}
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
    //height: height / 4,
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
  btnListWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 29,
  },
  btnAction: {
    width: 60,
    height: 80,
    backgroundColor: "#252539",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnActionText: {
    color: "#5E5E85",
    fontWeight: "bold",
  },
});

export default TrackForm;
