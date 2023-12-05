import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import styles from "../AuthStyles";

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("MainLayout");
  };

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
        <Pressable style={styles.button} onPress={handleLogin}>
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
