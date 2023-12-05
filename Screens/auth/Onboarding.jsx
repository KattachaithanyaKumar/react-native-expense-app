import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardFlow } from "react-native-onboard";
import { useNavigation } from "@react-navigation/native";

const img1 = require("../../assets/Illustration1.png");
const img2 = require("../../assets/Illustration2.png");
const img3 = require("../../assets/Illustration3.png");

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <OnboardFlow
        pages={[
          {
            title: "Gain total control of your money",
            subtitle: "Become your own money manager and make every cent count",
            imageComponent: (
              <Image
                source={img1}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
          },
          {
            title: "Know where your money goes",
            subtitle:
              "Track your transaction easily, with categories and financial report",
            imageComponent: (
              <Image
                source={img2}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
          },
          {
            title: "Planning ahead",
            subtitle: "Setup your budget for each category so you in control",
            imageComponent: (
              <Image
                source={img3}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
          },
        ]}
        style={{
          marginTop: 180,
        }}
        onDone={() => {
          navigation.navigate("Login");
        }}
        paginationColor="#EEE5FF"
        paginationSelectedColor="#7F3DFF"
        primaryButtonStyle={{
          backgroundColor: "#7F3DFF",
        }}
        autoPlay="true"
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
