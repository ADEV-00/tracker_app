import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SignInScreen = () => {
  return (
    <View style={styles.appWrapper}>
      <View style={styles.header}>
        <Image
          style={{ width: "100%", borderRadius: 20 }}
          resizeMode="cover"
          source={require("../img/loginBg.png")}
        />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.formTitle}>Welcome back</Text>
        <Text style={styles.formSubTitle}>
          Use your credentials below and login to your account
        </Text>
      </View>
      <View>
        <Text>
          Don't have an account?{" "}
          <Text
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            Sign Up here
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: "#292B4D",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
  },
  formWrapper: {
    backgroundColor: "white",
    width: width - 30,
    marginTop: 25,
    height: height / 1.6,
    borderRadius: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingVertical: 35,
    textAlign: "center",
    alignItems: "center",
  },
  formTitle: {
    color: "#191818",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 12,
  },
  formSubTitle: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: "#c4c4c4",
    width: width / 2,
  },
});

export default SignInScreen;
