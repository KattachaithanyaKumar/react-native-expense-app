import { StyleSheet } from "react-native";
import COLORS from "../COLORS";

export default styles = StyleSheet.create({
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
    fontWeight: "600",
    fontSize: 18,
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
