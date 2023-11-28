import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../COLORS";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputBox}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <View style={styles.sub}>
          <Text style={styles.centerText}>Don't have an account yet? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.link}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 32,
  },
  inputBox: {
    margin: 30,
    gap: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    padding: 16,
    borderRadius: 14,
  },
  button: {
    backgroundColor: COLORS.primaryColor,
    padding: 16,
    borderRadius: 14,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
  },
  sub: {
    fontWeight: "400",
    alignItems: "center",
    flexDirection: "row",
  },
  link: {
    color: COLORS.primaryColor,
  },
});
