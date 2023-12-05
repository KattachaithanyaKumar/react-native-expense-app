import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Transactions from "./Transactions";
import Budget from "./Budget";
import Profile from "./Profile";

const MainLayout = () => {
  const Tab = createBottomTabNavigator();

  const getTabBarIcon = (routeName, isFocused) => {
    let iconName;
    let iconColor = isFocused ? "#7F3DFF" : "#C6C6C6";

    switch (routeName) {
      case "Home":
        iconName = isFocused ? "home" : "home-outline";
        break;
      case "Transactions":
        iconName = isFocused ? "swap-vertical" : "swap-vertical-outline";
        break;
      case "Budget":
        iconName = isFocused ? "pie-chart" : "pie-chart-outline";
        break;
      case "Profile":
        iconName = isFocused ? "person" : "person-outline";
        break;
      default:
        iconName = "ios-information-circle";
    }
    return <Ionicons name={iconName} size={32} color={iconColor} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const routeName = route.name;
          return getTabBarIcon(routeName, focused);
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 16,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
