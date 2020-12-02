import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Context } from "../context/AuthContext";
import { Dimensions, Dimenstion } from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <View style={styles.accountScreenWrapper}>
      <View style={styles.accountHeader}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../img/signUpBg.png")}
            style={{ width: "100%" }}
          />
        </View>
        <View style={styles.profileImg}>
          <FontAwesome5 name="user-edit" size={50} color="#5e5e85" />
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoTitle}>Information</Text>
        <View style={styles.infoText}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.span}>Adev</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.label}>First name:</Text>
          <Text style={styles.span}>Amel</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.label}>Last name:</Text>
          <Text style={styles.span}>Sivsic</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.span}>developer.amel@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountScreenWrapper: {
    flex: 1,
    backgroundColor: "#2c2b44",
  },
  accountHeader: {
    width: width,
    height: height / 2.5,
    flexDirection: "column",
    position: "relative",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "73%",
    backgroundColor: "#252539",
    overflow: "hidden",
  },
  profileImg: {
    width: 180,
    height: 180,
    backgroundColor: "#252539",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3aebf6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 7.49,

    elevation: 12,
  },
  infoWrapper: {
    alignSelf: "center",
    backgroundColor: "#252539",
    width: width - 80,
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    overflow: "scroll",
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e5e85",
    marginBottom: 12,
  },
  infoText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "#5e5e85",
    marginRight: 5,
  },
  span: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3aebf6",
  },
});

export default AccountScreen;
