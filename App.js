import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

//screens
import Onboarding from "./Screens/Onboarding";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false, animation: "simple_push" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, animation: "simple_push" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false, animation: "simple_push" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
