import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

//screens
import Onboarding from "./Screens/auth/Onboarding";
import Login from "./Screens/auth/Login";
import Signup from "./Screens/auth/Signup";
import MainLayout from "./Screens/layout/MainLayout";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
          name="MainLayout"
          component={MainLayout}
          options={{ headerShown: false, animation: "fade" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
