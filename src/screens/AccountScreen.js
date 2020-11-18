import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Button title="Signout" onPress={() => signout()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
