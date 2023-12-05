import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.balanceBox}>
        <Text style={styles.balanceTitle}>Account Balance</Text>
        <Text style={styles.balance}>₹0</Text>
      </View>
      <View style={styles.statBox}>
        <View style={[styles.stat, styles.income]}>
          <View style={styles.icon}>
            <Ionicons name="arrow-down-outline" size={26} color={"#00A86B"} />
          </View>
          <View>
            <Text style={styles.thin}>Income</Text>
            <Text style={styles.bold}>₹0</Text>
          </View>
        </View>
        <View style={[styles.stat, styles.expense]}>
          <View style={styles.icon}>
            <Ionicons name="arrow-up-outline" size={26} color={"#FD3C4A"} />
          </View>
          <View>
            <Text style={styles.thin}>Expence</Text>
            <Text style={styles.bold}>₹0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  balanceBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 56,
    paddingBottom: 24,
    gap: 8,
  },
  balanceTitle: {
    fontWeight: "200",
    fontSize: 18,
  },
  balance: {
    fontWeight: "900",
    fontSize: 38,
  },
  statBox: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  stat: {
    width: "80%",
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
  },
  income: {
    backgroundColor: "#00A86B",
  },
  expense: {
    backgroundColor: "#FD3C4A",
  },
  icon: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
  },
  thin: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
  bold: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "900",
  },
});
