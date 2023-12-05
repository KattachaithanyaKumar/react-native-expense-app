import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../AuthStyles";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../COLORS";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

const Signup = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onFocus={handlePasswordBlur} // Reset password input secureTextEntry on email input focus
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!isPasswordFocused}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Re-enter password"
          style={styles.input}
          secureTextEntry={!isPasswordFocused}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <Text style={{ marginBottom: 14 }}>Lock Screen Pin:</Text>
          <SmoothPinCodeInput
            codeLength={4}
            ref={this.pinInput}
            value={code}
            onTextChange={(code) => setCode(code)}
            onFulfill={this._checkCode}
            onBackspace={this._focusePrevInput}
            cellStyle={{
              borderColor: COLORS.lightGrey,
              borderWidth: 1,
              borderRadius: 8,
            }}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <View style={styles.sub}>
          <Text style={styles.centerText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
