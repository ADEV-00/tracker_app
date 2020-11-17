import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { Foundation, Fontisto } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";

const { width, height } = Dimensions.get("window");

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.appWrapper}>
      <View style={styles.header}>
        <Image
          style={{ width: "100%", borderRadius: 20 }}
          resizeMode="cover"
          source={require("../img/signUpBg.png")}
        />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.formTitle}>Create Account</Text>
        <Text style={styles.formSubTitle}>
          Let’s us know what is your email and your password
        </Text>
        <View style={styles.inputWrapper}>
          <Foundation
            name="mail"
            size={25}
            color="#37396C"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Fontisto
            name="locked"
            size={25}
            color="#37396C"
            style={styles.inputIcon}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Enter your password"
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        {/* <View style={styles.inputWrapper}>
          <Fontisto
            name="locked"
            size={25}
            color="#37396C"
            style={styles.inputIcon}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Confirm password"
          />
        </View> */}

        {state.errorMessage ? (
          <Text style={{ color: "red", fontWeight: "bold" }}>
            {state.errorMessage}
          </Text>
        ) : null}
        <TouchableOpacity onPress={() => signup({ email, password })}>
          <View style={styles.btn}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "white" }}>
          Already have an account?{" "}
          <Text
            style={{ color: "white", fontWeight: "bold" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            Login here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
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
    borderRadius: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingVertical: 35,
    textAlign: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 32,
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
    marginBottom: 35,
  },
  inputWrapper: {
    backgroundColor: "#EFEFF6",
    width: "100%",
    height: 50,
    borderRadius: 5,
    //borderWidth: 1,
    //borderColor: "#37396c",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    overflow: "hidden",
    marginBottom: 17,
  },
  inputIcon: {
    marginRight: 9,
  },
  inputText: {
    fontWeight: "bold",
    lineHeight: 12,
    flex: 1,
    overflow: "hidden",
  },
  btn: {
    marginTop: 35,
    width: 221,
    height: 50,
    backgroundColor: "#292B4D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
  },
});

export default SignUpScreen;
